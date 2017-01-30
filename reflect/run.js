const fs = require('fs');
const app = require('express')();
const async = require('async');
const jsdom = require('jsdom');
const execFile = require('child_process').execFile;
const exec = require('child_process').exec;
let $;
const base = '../content/';
const outDir = '../site/reflected/';
let content = [];
const config = {};
const globals = {};
const globalComponents = [];
const variables = {};
jsdom.env("", function(err, win) {
    if (err) {
        console.error(err);
        return;
    }

    $ = require("jquery")(win);
});

String.prototype.indexOfRegex = function(regex, fromIndex = 0){
  var str = fromIndex ? this.substring(fromIndex) : this;
  var match = str.match(regex);
  return match ? str.indexOf(match[0]) + fromIndex : -1;
}


const read = (path, onFile, final) => (
  new Promise((resolve, reject) => {
    if (fs.lstatSync(path).isDirectory()) {
      fs.readdir(path, (err, files) => {
        async.each(files, (file, cb) => {
          read(`${path}/${file}`, onFile)
          .then(cb);
        }, resolve);
      });
    } else {
      if (path.indexOf('DS_Store') < 0) {
        fs.readFile(path, 'utf8', (err, content) => {
          if (err) { console.log(err); }
          onFile(path, content).then(resolve);
        });
      } else {
        resolve();
      }
    }
  })
);

const urlFromPath = (path, full) => {
  let p = full.replace(path, '').split('.')
  return p[0].substr(1);
}

const loadGlobals = () => (
  new Promise((resolve, reject) => {
    const dir = `${base}global`;
    read(dir, (file, data) => (
      new Promise((resolve, reject) => {
        globals[urlFromPath(dir, file)] = addJsxBreaks(data, file);
        resolve();
      })
    )).then(() => { resolve(); });
  })
);

const loadConfig = () => (
  new Promise((resolve, rej) => {
    const path = `${base}config/`;
    const importPath = `${path}import.js`;
    if (fs.existsSync(importPath)) {
      fs.readFile(importPath, 'utf8', (err, content) => {
        config.import = content;
        resolve(config);
      });
    }
  })
);

const loadContent = () => (
  new Promise((resolve, reject) => {
    const contentDir = `${base}pages`;
    read(contentDir, (file, data) => (
      new Promise((resolve, reject) => {
        const bits = file.split('.');
        const url = urlFromPath(contentDir, file).replace('/', '$');
        content.push({
          url,
          content: data,
        });
        resolve();
      })
    )).then(() => { resolve(); });
  })
);

var setDeepValue = function(obj, path, value) {
    if (path.indexOf('.') === -1) {
      value.path = path;
      obj.push(value);
      return;
    }

    var dotIndex = path.indexOf('.');
    const nextPath = path.substr(dotIndex + 1);
    if (obj[path.substr(0, dotIndex)] === undefined) {
      obj[path.substr(0, dotIndex)] = nextPath.indexOf('.') === -1 ? [] : {};
    }
    obj = obj[path.substr(0, dotIndex)];
    return setDeepValue(obj, path.substr(dotIndex + 1), value);
};
const loadVariables = () => (
  new Promise((resolve, reject) => {
    const dir = `${base}variables`;
    read(dir, (file, data) => (
      new Promise((resolve, reject) => {
        let json = '';
        let content = '';
        let on = 'json';
        const lines = data.split('\n');
        lines.forEach((v, i) => {
          if (v.length) {
            if (on === 'json' && v === '---') {
              on = 'content';
            } else {
              if (on === 'json') {
                json += `${v}\n`;
              }
              if (on === 'content') {
                content += `${v}\n`;
              }
            }
          }
        });
        json = (json.indexOf('[') === 0 || json.indexOf('{') === 0) ? JSON.stringify(JSON.parse(json)) : `{${json}}` ;
        const obj = eval(`(${json})`);
        if (content.length) {
          obj.autocontent = content;
        }
        const f = file.replace('../content/variables/', '').replace(/\.(.+)/, '').replace(/\//g, '.').replace('-', '__');
        setDeepValue(variables, f, obj);
        resolve();
      })
    )).then(() => { resolve(); });
  })
);

const saveVariables = () => (
  new Promise((resolve, reject) => {
    const core = `${outDir}../core/`
    let final = `export default ${JSON.stringify(variables)};`;
    fs.writeFile(`${core}vars.js`, final, (err) => {
      if (err) { reject(err) }
      else { resolve(); }
    })
  })
);

const processContent = () => (
  new Promise((resolve, reject) => {
    content.forEach((page, inx) => {
      let pre = '';
      let main = '';
      if (page.content.indexOf('</Script') > -1) {
        const parts = page.content.split('</Script>');
        pre = parts[0].replace('<Script>', '').trim();
        main = parts[1];
      } else {
        main = page.content.trim();
      }
      main = doImports(addJsxBreaks(main, page.url));
      content[inx].content =
  `${config.import}
  ${pre}
  const Page = () => (
    <div>
      ${main}
    </div>
  );

  export default Page;
`;
    })
    resolve();
  })
);

const processGlobalComponents = () => (
  new Promise((resolve, reject) => {
    Object.keys(globals).forEach((inx) => {
      let pre = '';
      let main = '';
      const page = globals[inx];
      if (page.indexOf('</Script') > -1) {
        const parts = page.split('</Script>');
        pre = parts[0].replace('<Script>', '').trim();
        main = parts[1];
      } else {
        main = page.trim();
      }
      const file = inx
        .replace(/-([a-z])/g, g => g[1].toUpperCase())
        .replace(/^[a-z]/, g => g[0].toUpperCase());
      main = doImports(addJsxBreaks(main, file));
      const imports = config.import.replace(/\'..\//g, "\'../../");
      const content =
  `${imports}
  ${pre}
  const Component = () => (
    <div>
      ${main}
    </div>
  );

  export default Component;
`;
    globalComponents.push({file, content});
    })
    resolve();
  })
);

const doImports = (str) => {
  let out = '';
  const lines = str.split("\n");
  let block = 0;
  lines.forEach((line) => {
    let l = line;
    if (line.indexOf('<Import') > -1) {
      const elm = $(line.replace('Import', 'div'))
      const id = elm.attr('id');
      if (globals[id] !== undefined) {
        l = globals[id];
      } else {
        l = '';
      }
    }
    out += `${l}\n`;
  });
  return out;
};

const addJsxBreaks = (str, file) => {
  let out = '';
  const lines = str.split("\n");
  let block = 0;
  let parentIsBlock = [];
  let inTagDef = 0;
  let preload = {};
  lines.forEach((line) => {
    let l = line;
    let isTag = false;

    // Only continue if this block doesn't self-close
    if (line.indexOfRegex(/\<[A-Za-z](.+)((\s{0,1})\/>)/gi) < 0) {

      // console.info('doesnt selfclose')
      // If it's a block, mark parent as true
      if (line.indexOf('<Block') > -1 || line.indexOf('<Tab') > -1) {
        isTag = true;
        parentIsBlock.push(true);
      // console.info('block start (push true)')

      // If not a block, mark as false
      } else if (line.indexOfRegex(/\<[A-Za-z](.+)/ig) > -1) {
        isTag = true;
        parentIsBlock.push(false);
      // console.info('block not in a block (push false)')
      }

      // If closing a block, remove last parent (to revert to parent above)
      if (line.indexOfRegex(/\<\/[A-Za-z](.+)\>/gi) > -1) {
        isTag = true;
        parentIsBlock.pop()
      // console.info('block close (pop)')
      }
    } else {
      // console.info('self-closer')
    }
    if (line.indexOf('src') > -1 || line.indexOf('headerImage') > -1) {
      const srcMatch = line.match(/(["'])(?:(?=(\\?))\2.)*?\1/)
      preload.src = srcMatch[0].replace(/\"/g, '');
    }
    if (line.indexOf('preload') > -1) {
      preload.shouldPreload = true;
    }
    if (preload.shouldPreload && preload.src) {
      if (variables.preloads === undefined) { variables.preloads = [] }
      variables.preloads.push(preload.src);
    }
    inTagDef += (line.match(/\</g) || []).length;
    inTagDef -= (line.match(/\>/g) || []).length;
    if (inTagDef < 1) {
      preload = {shouldPreload: false, src: false};
    }
    if (!isTag && inTagDef < 1 &&
        parentIsBlock[parentIsBlock.length - 1] !== undefined &&
        parentIsBlock[parentIsBlock.length - 1] &&
        line.trim().length
    ) {
      l = `${line}{'\\n'}`;
    } else if (isTag) {
    } else if (inTagDef) {
    } else if (parentIsBlock[parentIsBlock.length - 1] !== undefined && parentIsBlock[parentIsBlock.length - 1]) {
      // console.log('>>> '+line);
    } else {
      // console.log('otr', line)
      // console.log('is tag', isTag);
      // console.log('is tdf', inTagDef < 1);
      // console.log('is blk',parentIsBlock[parentIsBlock.length - 1]);
    }
    out += `${l}\n`;
  });
  return out;
};

const chopFile = (full) => {
  const lastSlash = full.lastIndexOf('/');
  return full.substr(0, lastSlash);
}

const saveContent = () => (
  new Promise((resolve, reject) => {
    async.each(content, (page, cb) => {
      const path = `${outDir}/${page.url}.js`;
      fs.writeFile(path, page.content, (err) => {
        if (err) return console.log(err);
        cb();
      });
    }, resolve);
  })
)

const saveGlobalComponents = () => (
  new Promise((resolve, reject) => {
    console.log('saveglobal')
    async.each(globalComponents, (page, cb) => {
      console.log(page);
      const path = `${outDir}/components/${page.file}.js`;
      fs.writeFile(path, page.content, (err) => {
        if (err) return console.log(err);
        cb();
      });
    }, resolve);
  })
)

const saveRoutes = () => (
  new Promise((resolve, reject) => {
    const core = `${outDir}../core/`
    fs.readFile(`${core}pages.tpl.js`, 'utf8', (err, tpl) => {
      let imports = '';
      let pages = '';
      let final = tpl;
      content.forEach((page) => {
        const full = page.url;
        const clean = full.replace(/\//g, '$').replace('-', '__');
        const path = `../reflected/${full}.js`;
        imports += `import ${clean} from '${path}';\n`;
        pages += `pages.${clean} = ${clean};\n`;
      })
      final = final.replace('%imports%', imports);
      final = final.replace('%pages%', pages);
      fs.writeFile(`${core}pages.js`, final, (err) => {
        if (err) { reject(err); }
        else { resolve(); }
      })
    });
  })
)
const saveGlobal = () => (
  new Promise((resolve, reject) => {
    const core = `${outDir}../core/`
    fs.readFile(`${core}pages.tpl.js`, 'utf8', (err, tpl) => {
      let imports = '';
      let pages = '';
      let final = tpl;
      content.forEach((page) => {
        const full = page.url;
        const clean = full.replace(/\//g, '$').replace('-', '__');
        const path = `../reflected/${full}.js`;
        imports += `import ${clean} from '${path}';\n`;
        pages += `pages.${clean} = ${clean};\n`;
      })
      final = final.replace('%imports%', imports);
      final = final.replace('%pages%', pages);
      fs.writeFile(`${core}pages.js`, final, (err) => {
        if (err) { reject(err); }
        else { resolve(); }
      })
    });
  })
)
const rebuild = () => (
  new Promise((resolve, reject) => {
    console.info("Reflected, now rebuilding...");
    const cmd = "node run build";
    exec(cmd, {cwd: "../site"}, (error, stdout, stderr) => {
      if (error) { reject(error) }
      else {console.info(stdout); resolve(); }
    });
  })
)

// const synced = (req, res) => {
//   res.send(content);
// }

const tasks = new Map(); // The collection of automation tasks ('clean', 'build', 'publish', etc.)
tasks.set('sync', () => (
  new Promise((resolve, reject) => {
    content = [];
    loadConfig()
    .then(loadGlobals)
    .then(loadVariables)
    .then(loadContent)
    .then(processContent)
    .then(saveVariables)
    .then(saveContent)
    .then(saveRoutes)
    .then(processGlobalComponents)
    .then(saveGlobalComponents)
    .then(resolve);
  })
));
tasks.set('build', () => (
  new Promise((resolve, reject) => {
    content = [];
    loadConfig()
    .then(loadGlobals)
    .then(loadContent)
    .then(loadVariables)
    .then(processContent)
    .then(saveVariables)
    .then(saveContent)
    .then(saveRoutes)
    .then(processGlobalComponents)
    .then(saveGlobalComponents)
    .then(rebuild)
    .then(resolve);
  })
));

function run(task) {
  const start = new Date();
  console.log(`Starting '${task}'...`);
  return Promise.resolve().then(() => tasks.get(task)()).then(() => {
    console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`);
  }, err => console.error(err.stack));
}
// Execute the specified task or default one. E.g.: node run build
run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start' /* default */);
