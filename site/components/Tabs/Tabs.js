import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import $ from 'jquery';
import autoBind from 'react-autobind';
import styles from './Tabs.css';
import TabButton from '../TabButton/TabButton';
import colorize from '../../utils/colorize';

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
      const add = Math.floor(diff / tabWidths.length);
      $('.tab-button', shell).each((i) => {
        tabWidths[i] += add;
      });
      this.setState({ tabWidths });
    }
  }
  selectTab(id) {
    this.setState({ active: id });
  }
  renderButtons(tabs) {
    const out = [];
    tabs.forEach((t, i) => {
      const css = { background: colorize(t.props.color) };
      const active = (this.state.active === i);
      const key = `tabButton-${i}`;
      if (this.state.tabWidths && this.state.tabWidths[i] !== undefined) {
        css.width = `${this.state.tabWidths[i]}px`;
      }
      const tab = (
        <TabButton
          key={key}
          active={active}
          css={css}
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
    return (
      <div styleName="shell" ref={(shell) => { this.shell = shell; }}>
        {this.renderButtons(tabs)}
        <div className="clear"></div>
        <div styleName="content">
          {tabs[this.state.active].props.children}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
};
Tabs.defaultProps = {
};

export default CSSModules(Tabs, styles);
