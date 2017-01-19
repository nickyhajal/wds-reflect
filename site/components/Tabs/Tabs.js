import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import $ from 'jquery';
import autoBind from 'react-autobind';
import styles from './Tabs.css';
import Image from '../Image/Image';
import TabButton from '../TabButton/TabButton';
import colorize from '../../utils/colorize';
import angler from '../../utils/angler';

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
      const w = shell.outerWidth();
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
      $('.dots-controls .image-unanchored', shell).css({ width: `${((tabWidths[0] * tabWidths.length) - tabWidths[0])}px` });
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
    ];
    if (this.props.style === 'dots') {
      out.push(
        <div key="dotscontrols" styleName="dots-controls" className="dots-controls">
          <button key="btn-arrow-left" styleName="arrow-prev" onClick={() => { this.prev() }} />
          <button key="btn-arrow-right" styleName="arrow-next" onClick={this.next} />
          <Image key="button-line" src="icon/stroke-white.png" styleName="dots-line" width="794" height="4" />
        </div>
      );
    }
    tabs.forEach((t, i) => {
      const css = { background: colorize(t.props.color) };
      const active = (this.state.active === i);
      const key = `tabButton-${i}`;
      if (this.state.tabWidths && this.state.tabWidths[i] !== undefined) {
        css.width = `${this.state.tabWidths[i]}px`;
      }
      const angle = t.props.clip !== undefined ? t.props.clip : angles[i];
      const finalClip = angler(angle);
      css.clipPath = finalClip;
      css.WebkitClipPath = finalClip;
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
  render() {
    const tabs = this.props.children;
    let style = 'tabs-normal';
    if (this.props.style.length) {
      style = `tabs-${this.props.style}`;
    }
    return (
      <div styleName="shell" className={style} ref={(shell) => { this.shell = shell; }}>
        <div styleName="buttons">
          {this.renderButtons(tabs)}
        </div>
        <div className="clear" />
        <div styleName="content">
          {tabs[this.state.active].props.children}
          <div className="clear" />
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  style: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Tabs.defaultProps = {
  style: '',
};

export default CSSModules(Tabs, styles);
