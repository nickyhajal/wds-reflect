import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import cx from 'classnames';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import autoBind from 'react-autobind';
import styles from './Button.css';
import colorize from '../../utils/colorize';
import actions from '../../actions';


class Button extends React.Component {

  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    act: PropTypes.objectOf(PropTypes.func),
    styling: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    href: PropTypes.string,
    className: PropTypes.string,
    beforeModal: PropTypes.func,
    width: PropTypes.string,
    fitToText: PropTypes.bool,
    align: PropTypes.string,
    modal: PropTypes.string,
    children: PropTypes.node,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
  }

  click(e) {
    if (this.props.modal !== undefined) {
      if (this.props.beforeModal !== undefined) {
        this.props.beforeModal(this.props.act);
      }
      this.props.act.openModal(this.props.modal);
    }
    if (this.props.onClick !== undefined) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      component, className, to, href, children, fitToText,
    } = this.props;
    let {
      styling, style, width, align, onClick,
    } = _.clone(this.props);
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
          'button', className
        ),
        to,
        href,
        style,
        onClick: this.click,
      },
      children
    );
  }

}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(null, mapDispatchToProps)(CSSModules(Button, styles));
