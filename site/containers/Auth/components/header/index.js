import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';
import actions from '~/actions/index';
import styles from './styles.css';


const Header = ({ className }) => (
  <div styleName="shell" className={cx(className)}>
    <Link styleName="logo">WDS 2017</Link>
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Header, styles));

