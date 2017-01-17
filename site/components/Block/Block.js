import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Markdown from 'react-remarkable';
import cx from 'classnames';
import _ from 'lodash';
import styles from './Block.css';
import Image from '../Image/Image';
import widther from '../../utils/widther';
import colorize from '../../utils/colorize';
import angler from '../../utils/angler';
import unitize from '../../utils/unitize';

const Block = (props) => {
  const {
    type, height, imageClip, src, children, className, align,
    clip, label, title, anchor, margin, background, icon,
  } = props;
  const classes = [className];
  const css = _.defaults(colorize(props).css, {});
  let textAlign = props.textAlign;
  css.width = widther(props);
  let content = '';

  // IMAGE BLOCK
  if (type === 'image') {
    content = (
      <div>
        <Image styleName="image" width="100%" height="275px" src={src} clip="imageBlock" />
        <div styleName="content"><Markdown>{children}</Markdown></div>
      </div>
    );
    css.width = '472px';
    textAlign = 'left';

  // NARROW IMAGE BLOCK
  } else if (type === 'image-narrow') {
    content = (
      <div>
        <Image styleName="image" width="100%" height="275px" src={src} clip="imageBlock" />
        <div styleName="content"><Markdown>{children}</Markdown></div>
      </div>
    );
    css.width = '300px';
    textAlign = 'center';

  // OVERLAYED IMAGE BLOCK
  } else if (type === 'image-overlay') {
    const divCss = {};
    if (clip) {
      const finalClip = angler(clip);
      css.clipPath = finalClip;
      css.WebkitClipPath = finalClip;
    }
    css.float = anchor;
    content = (
      <div styleName={`overlay-${anchor}`}>
        <div styleName="image-shell">
          <Image styleName="image" width="475px" height="340px" src={src} clip={imageClip} />
          {(icon ? <Image styleName="icon" icon={icon} /> : '')}
        </div>
        <div styleName="content" style={divCss}><Markdown>{children}</Markdown></div>
        <div className="clear" />
      </div>
    );
    css.width = '850px';
    textAlign = 'center';

  // COLOR HEADER BLOCK
  } else if (type === 'color') {
    css.padding = '50px';
    content = (
      <div>
        <div styleName="heading">{title}</div>
        <Markdown>{children}</Markdown>
      </div>
    );

  // PADDED BLOCK
  } else if (type === 'padded') {
    css.padding = '50px';
    content = (<Markdown>{children}</Markdown>);
  } else if (type === 'caption') {
    content = (
      <div>
        {(props.label === undefined ? '' : <div styleName="label">{label}</div>)}
        <Image styleName="image" width="100%" height="222" src={src} clip="captionBlock" />
        <div styleName="content"><Markdown>{children}</Markdown></div>
      </div>
    );
    css.width = '306px';
    textAlign = 'left';

  // STANDARD TEXT BLOCK
  } else {
    content = (<Markdown>{children}</Markdown>);
  }

  // Post process
  if (type === 'padded' || type === 'text') {
    if (margin) {
      css.margin = margin;
    }
    if (align === 'center') {
      css.marginRight = 'auto';
      css.marginLeft = 'auto';
    }
  }
  if (anchor === 'left') {
    css.float = anchor;
  }

  if (clip && type !== 'image-overlay') {
    const finalClip = angler(clip);
    css.clipPath = finalClip;
    css.WebkitClipPath = finalClip;
  }
  classes.push(`textalign-${textAlign}`);
  if (props.background !== 'auto') {
    classes.push(`block-color-${background}`);
  }
  if (height.length) {
    css.height = unitize(height);
  }
  css.background = colorize(background);
  return (
    <div
      className={cx(classes, `block block-${type}`)}
      styleName={`block-${type}`}
      style={css}
    >
      {content}
    </div>
  );
};

Block.propTypes = {
  type: PropTypes.string,
  css: PropTypes.objectOf(React.PropTypes.string),
  align: PropTypes.string,
  src: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  anchor: PropTypes.string,
  clip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  icon: PropTypes.string,
  imageClip: PropTypes.string,
};
Block.defaultProps = {
  type: 'text',
  align: 'center',
  clip: false,
  textAlign: 'center',
  padding: false,
  height: '',
  title: '',
  background: 'auto',
};

export default CSSModules(Block, styles);
