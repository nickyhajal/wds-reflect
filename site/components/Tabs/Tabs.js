import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import $ from 'jquery';
import autoBind from 'react-autobind';
import Markdown from 'react-remarkable';
import _ from 'lodash';
import styles from './Tabs.css';
import Image from '../Image/Image';
import Block from '../Block/Block';
import Grid from '../Grid/Grid';
import TabButton from '../TabButton/TabButton';
import colorize from '../../utils/colorize';
import angler from '../../utils/angler';
import is from '../../utils/is';
import unitize from '../../utils/unitize';

class Tabs extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      active: 0,
      tabWidths: false,
    };
  }
  componentDidMount() {
    if (!this.state.tabWidths) {
      const shell = $(this.shell);
      const w = $('.tab-controls', shell).outerWidth();
      const tabWidths = [];
      $('.tab-button', shell).each((i, tab) => {
        tabWidths[i] = $(tab).outerWidth();
      });
      const tabWidth = tabWidths.reduce((a, b) => (a + b), 0);
      const diff = w - tabWidth;
      const add = +((diff / tabWidths.length).toFixed(1)) - 0.1;
      $('.tab-button', shell).each((i) => {
        tabWidths[i] += add;
      });
      let lineW = (tabWidths.reduce((a, b) => a + b, 0));
      lineW -= ((tabWidths[0] / 2) + (_.last(tabWidths) / 2));
      $('.dots-controls .image-unanchored', shell).css({ width: `${lineW}px` });
      this.setState({ tabWidths });
    }
  }
  selectTab(id) {
    this.setState({ active: id });
  }
  prev() {
    const len = this.state.tabWidths.length;
    let active = this.state.active;
    if (active) {
      active -= 1;
    } else {
      active = len - 1;
    }
    this.setState({ active });
  }
  next() {
    const len = this.state.tabWidths.length - 1;
    let active = this.state.active;
    if (active === len) {
      active = 0;
    } else {
      active += 1;
    }
    this.setState({ active });
  }
  renderButtons(tabs) {
    const out = [];
    const angles = [
      'tl:0,12%;tr:0,1%;',
      'tl:0,6%;tr:0,17%;',
      'tl:0,12%;tr:0,10%;',
      'tl:0,6%;tr:0,12%;',
      'tl:0,6%;tr:0,1%;',
      'tl:0,8%;tr:0,2%;',
      'tl:0,2%;tr:0,1%;',
      'tl:0,6%;tr:0,12%;',
      'tl:0,2%;tr:0,9%;',
    ];
    if (this.props.style === 'dots') {
      out.push(
        <div key="dotscontrols" styleName="dots-controls" className="dots-controls">
          <button key="btn-arrow-left" styleName="arrow-prev" onClick={() => { this.prev(); }} />
          <button key="btn-arrow-right" styleName="arrow-next" onClick={this.next} />
          <Image key="button-line" src="icon/stroke-white.png" styleName="dots-line" width="794" height="4" />
        </div>
      );
    }
    tabs.forEach((t, i) => {
      const css = _.clone(this.props.tabCss);
      if (this.props.style !== 'dots') {
        css.background = colorize(t.props.color);
      }
      const active = (this.state.active === i);
      const key = `tabButton-${i}`;
      if (this.state.tabWidths && this.state.tabWidths[i] !== undefined) {
        css.width = `${this.state.tabWidths[i]}px`;
      }
      if (active) {
        if (this.props.style !== 'dots') {
          css.background = `${colorize(this.props.color)}`;
        }
      }
      if (this.props.style !== 'dots') {
        const angle = t.props.clip !== undefined ? t.props.clip : angles[i];
        const finalClip = angler(angle);
        css.clipPath = finalClip;
        css.WebkitClipPath = finalClip;
      }
      const tab = (
        <TabButton
          key={key}
          active={active}
          css={css}
          style={this.props.style}
          tabId={i}
          onClick={() => this.selectTab(i)}
        >
          {t.props.title}
        </TabButton>
      );
      out.push(tab);
    });
    return out;
  }
  renderForPhone() {
    const finalClip = angler('br:0,-6%;');
    const headCss = {};
    headCss.clipPath = finalClip;
    headCss.WebkitClipPath = finalClip;
    return (
      <div>
        {this.props.children.map(tab => (
          <div styleName="phoneTab">
            <div style={_.merge({ backgroundColor: colorize(tab.props.color ? tab.props.color : 'blue') }, headCss)} styleName="phoneTitle">
              {tab.props.title}
            </div>
            <div styleName="phoneContent">
              <Markdown>{tab.props.children}</Markdown>
            </div>
          </div>
        ))}
      </div>
    );
  }
  renderStandard() {
    const tabs = this.props.children;
    const css = this.props.css;
    const background = colorize(this.props.color);
    const contentWidth = unitize(this.props.contentWidth);
    css.width = unitize(this.props.width);
    return (
      <div style={css}>
        <div styleName="buttons" className="tab-controls">
          {this.renderButtons(tabs)}
        </div>
        <div className="clear" />
        <div styleName="content" style={{ width: contentWidth, background }}>
          <Markdown>{tabs[this.state.active].props.children}</Markdown>
          <div className="clear" />
        </div>
      </div>
    );
  }
  render() {
    let style = 'tabs-normal';
    if (this.props.style.length) {
      style = `tabs-${this.props.style}`;
    }
    return (
      <div styleName="shell" className={style} ref={(shell) => { this.shell = shell; }}>
        {(is.phone() ? this.renderForPhone() : this.renderStandard())}
      </div>
    );
  }
}

Tabs.propTypes = {
  style: PropTypes.string,
  contentWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.string,
  color: PropTypes.string,
  css: PropTypes.objectOf(PropTypes.string),
  tabCss: PropTypes.objectOf(PropTypes.string),
};

Tabs.defaultProps = {
  style: '',
  contentWidth: '996px',
  width: '996',
  color: 'canvas',
  css: {},
  tabCss: {},
};

export default CSSModules(Tabs, styles);
