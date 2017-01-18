import React, { PropTypes } from 'react';
import _ from 'lodash';
import cx from 'classnames';
import CSSModules from 'react-css-modules';
import $ from 'jquery';
import styles from './Image.css';
import angler from '../../utils/angler';
import unitize from '../../utils/unitize';

const icons = {
  outline_beers: {
    src: 'icon/outline-beers.png',
    w: '105px',
    h: '126px',
  },
  outline_bike: {
    src: 'icon/outline-bike.png',
    w: '158px',
    h: '100px',
  },
  outline_camera: {
    src: 'icon/outline-camera.png',
    w: '109px',
    h: '78px',
  },
  outline_eye: {
    src: 'icon/outline-eye.png',
    w: '122px',
    h: '65px',
  },
};

const Image = (props) => {
  // Setup props and variables
  let css = props.css;
  console.info(props);
  css = _.defaults(css, {
    width: unitize(props.width),
    height: unitize(props.height),
  });
  console.info(css);
  const {
    tag, onClick, onMouseOver, onMouseOut, className, styleName,
    icon, anchor, preload
  } = props;
  let { src } = props;
  const newProps = {
    onClick, onMouseOver, onMouseOut, styleName, className: cx(className),
  };

  if (icon) {
    const i = icons[icon.replace('-', '_')];
    src = i.src;
    css.width = i.w;
    css.height = i.h;
  }

  // Auto link to our WDS files
  if (src.indexOf('http') < 0) {
    src = `https://files.wds.fm/images/${src}`;
  }

  // Settings dependent on tag type
  if (tag === 'img') {
    newProps.src = src;
  } else {
    css.backgroundImage = `url(${src})`;
    css.backgroundSize = 'cover';
    css.backgroundRepeat = 'no-repeat';
    css.backgroundPosition = props.position;
  }

  if (props.clip) {
    const clip = angler(props.clip);
    css.clipPath = clip;
    css.WebkitClipPath = clip;
  }
  if (anchor === 'left') {
    css.float = anchor;
  }

  if (props.margin !== undefined) {
    css.margin = props.margin;
    newProps.className = cx(`image-${anchor}`, newProps.className);
  }
  // Centered alignment
  if (props.align === 'center') {
    css.marginLeft = 'auto';
    css.marginRight = 'auto';
  }
  newProps.style = css;
  if (preload) {
    $(() => {
      const slug = src.replace(/\//g, '__').replace(/\./g, '___');
      if (!$(`#${slug}`).length) {
        const loads = $('#preloads');
        loads.append($('<img/>').attr('src', src));
      }
    });
  }
  return React.createElement(tag, newProps);
};

Image.propTypes = {
  css: PropTypes.objectOf(PropTypes.string),
  src: PropTypes.string,
  tag: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  width: PropTypes.string,
  clip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  position: PropTypes.string,
  align: PropTypes.string,
  anchor: PropTypes.string,
  icon: PropTypes.string,
  height: PropTypes.string,
  preload: PropTypes.bool,
};

Image.defaultProps = {
  clip: false,
  icon: '',
  preload: false,
  tag: 'div',
  position: 'center',
  anchor: 'unanchored',
  margin: false,
};

export default CSSModules(Image, styles);
