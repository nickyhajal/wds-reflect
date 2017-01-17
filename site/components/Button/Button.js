import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import cx from 'classnames';
import { Link } from 'react-router';
import styles from './Button.css';
import colorize from '../../utils/colorize';

class Button extends React.Component {

  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    styling: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    href: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    fitToText: PropTypes.bool,
    align: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const {
      component, onClick, className, to, href, children, fitToText
    } = this.props;
    let {
      styling, style, width, align,
    } = this.props;
    width = (width !== undefined) ? width : '';
    styling = (styling !== undefined) ? styling : '';
    style = (style !== undefined) ? style : {};
    align = (align !== undefined) ? align : '';
    if (styling === 'dark') {
      style.backgroundColor = colorize('dark');
    }
    if (styling === 'white') {
      style.backgroundColor = colorize('white');
      style.color = colorize('orange');
    }
    if (width.length) {
      style.width = width;
    }
    if (align === 'center') {
      style.marginLeft = 'auto';
      style.marginRight = 'auto';
    }
    if (fitToText !== undefined && fitToText) {
      style.display = 'inline-block';
    }
    return React.createElement(
      component || (to ? Link : (href ? 'a' : 'button')), // eslint-disable-line no-nested-ternary
      {
        ref: node => (this.root = node),
        styleName: 'button',
        className: cx(
          className
        ),
        to,
        href,
        style,
        onClick,
      },
      children
    );
  }

}

export default CSSModules(Button, styles);
