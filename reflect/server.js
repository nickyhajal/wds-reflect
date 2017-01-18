const fs = require('fs');
const app = require('express')();
const async = require('async');
const jsdom = require('jsdom');
const execFile = require('child_process').execFile;
let $;
const base = '../content/';
const outDir = '../site/reflected/';
let content = [];
const config = {};
const globals = {};
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
        globals[urlFromPath(dir, file)] = addJsxBreaks(data);
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
    const contentDir = `${base}content`;
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

const processContent = () => (
  new Promise((resolve, reject) => {
    content.forEach((page, inx) => {
      let pre = '';
      let main = '';
      if (page.content.indexOf('</Pre') > -1) {
        const parts = page.content.split('</Pre>');
        pre = parts[0].replace('<Pre>', '').trim();
        main = parts[1];
      } else {
        main = page.content.trim();
      }
      main = doImports(addJsxBreaks(main));
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

const addJsxBreaks = (str) => {
  let out = '';
  const lines = str.split("\n");
  let block = 0;
  let parentIsBlock = [];
  lines.forEach((line) => {
    let l = line;
    let isTag = false;

    // Only continue if this block doesn't self-close
    if (line.indexOfRegex(/\<[A-Z][a-z](.+)\/>/gi) < 0) {

      // If it's a block, mark parent as true
      if (line.indexOf('<Block') > -1) {
        isTag = true;
        parentIsBlock.push(true);

      // If not a block, mark as false
      } else if (line.indexOfRegex(/\<[A-Za-z](.+)/ig) > -1) {
        isTag = true;
        parentIsBlock.push(false);
      }

      // If closing a block, remove last parent (to revert to parent above)
      if (line.indexOfRegex(/\<\/[A-Za-z](.+)\>/gi) > -1) {
        isTag = true;
        parentIsBlock.pop()
      }
    }
    if (!isTag &&
        parentIsBlock[parentIsBlock.length - 1] !== undefined &&
        parentIsBlock[parentIsBlock.length - 1] &&
        line.trim().length
    ) {
      l = `${line}{'\\n'}`;
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

const saveRoutes = () => (
  new Promise((resolve, reject) => {
    const core = `${outDir}../core/`
    fs.readFile(`${core}pages.tpl.js`, 'utf8', (err, tpl) => {
      let imports = '';
      let pages = '';
      let final = tpl;
      content.forEach((page) => {
        const full = page.url;
        const clean = full.replace(/\//g, '$');
        const path = `../reflected/${full}.js`;
        imports += `import ${clean} from '${path}';\n`;
        pages += `pages.${clean} = ${clean};\n`;
      })
      final = final.replace('%imports%', imports);
      final = final.replace('%pages%', pages);
      fs.writeFile(`${core}pages.js`, final, (err) => {
        resolve();
      })
    });
  })
)
const rebuild = () => {
  console.info("REBUILD");
}

const synced = (req, res) => {
  res.send(content);
}

app.get('/webhook81928181994019',  (req, res) => {
  execFile('wds-reflect-sync', (err, stdout, stderr) => {
    res.send('synced');
  });
});
app.get('/sync', function (req, res) {
  content = [];
  execFile('wds-reflect-sync', (err, stdout, stderr) => {
    loadConfig()
    .then(loadGlobals)
    .then(loadContent)
    .then(processContent)
    .then(saveContent)
    .then(saveRoutes)
    .then(rebuild)
    .then(() => synced(req, res));
});
app.listen(8128);