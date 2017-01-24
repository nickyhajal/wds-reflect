import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import Markdown from 'react-remarkable';
import $ from 'jquery';
import cx from 'classnames';
import _ from 'lodash';
import _s from 'underscore.string';
import styles from './Block.css';
import Image from '../Image/Image';
import widther from '../../utils/widther';
import colorize from '../../utils/colorize';
import angler from '../../utils/angler';
import unitize from '../../utils/unitize';
import vars from '../../core/vars';
import is from '../../utils/is';
import mobilize from '../../utils/mobilize';


class Block extends Component {

  constructor() {
    super();
    this.state = {
      needsContent: false,
      currentContent: '',
      contentTimo: 0,
    };
    autoBind(Object.getPrototypeOf(this));
  }
  componentDidMount() {
    if (this.props.feed !== undefined && vars[this.props.feed] !== undefined) {
      this.getContent();
    }
  }
  getContent() {
    let refreshTime = '12';
    let id = '';
    if (this.props.feed !== undefined && vars[this.props.feed] !== undefined) {
      const all = vars[this.props.feed][0];
      let content = false;
      while (!content || content === this.currentContent || (content.tweet !== undefined && content.tweet.length > 110)) {
        content = _.sample(all);
      }
      id = _s.slugify(content.tweet).substr(0, 32);
      content = (
        <div key={id} styleName="block-dynamic-content">
          <div styleName="block-tweet" className="block-tweet">{content.tweet}</div>
          <div styleName="block-tweeter" className="block-tweeter">@{content.tweeter}</div>
        </div>
      );
      if (this.props.refresh !== undefined) {
        refreshTime = this.props.refresh;
      }
      clearTimeout(this.state.contentTimo);
      this.setState({
        currentContent: content,
        contentTimo: setTimeout(() => {
          this.getContent();
        }, +(refreshTime) * 1000),
      });
    }
  }
  renderDynamicContent() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="tweet"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.currentContent}
        </ReactCSSTransitionGroup>
        <Image styleName="icon" icon={this.props.feed} />
      </div>
    );
  }
  render() {
    const props = this.props;
    const {
      type, height, imageClip, src, children, className, align, feed,
      clip, label, title, anchor, margin, background, icon, color,
    } = props;
    const classes = [className];
    let css = _.defaults(colorize(props).css, {});
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
      css.width = '308px';
      textAlign = 'left';
      css.float = 'left';
      const headerCss = {};
      const finalClip = angler('br:0,-17%;');
      headerCss.clipPath = finalClip;
      headerCss.WebkitClipPath = finalClip;
      headerCss.backgroundColor = colorize(color);
      content = (
        <div>
          <div styleName="heading" style={headerCss}>{title}</div>
          <div styleName="content" className={`block-colored-${color}`}>
            <Markdown>{children}</Markdown>
          </div>
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
      textAlign = 'left';

    // 4Col Block
    } else if (type === '4col') {
      content = (
        <div>
          <div styleName="content"><Markdown>{children}</Markdown></div>
        </div>
      );
      css.width = '210px';
      textAlign = 'left';
      css.float = 'left';
      css.margin = '0 16px 0 0';


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
    if (anchor !== undefined && anchor) {
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
    if (feed !== undefined) {
      classes.push('block-dynamic');
    }
    if (is.mobile()) {
      css = mobilize(props.mobile, css);
      if (is.phone()) {
        if (!is.set('width', props.mobile)) {
          css.width = '100%';
        }
      }
      if (is.tablet()) {
        if (type === '4col') {
          css.width = '46%';
        } else if (type === 'image') {
          css.width = '80%';
          css.marginLeft = 'auto';
          css.marginRight = 'auto';
          css.float = 'none';
        } else if (type === 'text' || type === 'padded') {
          if (!is.set('width', props.mobile)) {
            css.width = '100%';
          }
        }
      }
    }
    return (
      <div
        ref={(shell) => { this.shell = shell; }}
        className={cx(classes, `block block-${type}`)}
        styleName={`block-${type}`}
        style={css}
      >
        {(this.state.currentContent ? this.renderDynamicContent() : content)}
      </div>
    );
  }
}

Block.propTypes = {
  type: PropTypes.string,
  css: PropTypes.objectOf(React.PropTypes.string),
  align: PropTypes.string,
  src: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  anchor: PropTypes.string,
  mobile: PropTypes.objectOf(PropTypes.string),
  color: PropTypes.string,
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
  color: '',
  height: '',
  title: '',
  mobile: { all: {}, phone: {}, tablet: {} },
  background: 'auto',
};

export default CSSModules(Block, styles);
