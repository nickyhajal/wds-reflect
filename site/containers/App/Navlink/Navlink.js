import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import cx from 'classnames';
import types from '../../../utils/types';

const Navlink = (props) => {
  const addProps = _.omit(props, ['children', 'className']);
  const sub = props.subNav;
  let className = props.className;
  if (sub !== undefined && sub) {
    if (sub[0] === props.to.substr(1)) {
      className = cx(className, 'active');
    }
  }
  return (
    <Link {...addProps} className={className} activeClassName="active">{props.children}</Link>
  );
};

Navlink.propTypes = {
  children: types.children,
  subNav: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};

export default Navlink;
