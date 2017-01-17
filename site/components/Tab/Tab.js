import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import cx from 'classnames';
import _ from 'lodash';
import styles from './Tab.css';
import widther from '../../utils/widther';
import Image from '../Image/Image';
import colorize from '../../utils/colorize';

const Tab = (props) => {
  console.info(props.children);
  return (
  <div>
  hey
  {props.children}</div>
)};

export default CSSModules(Tab, styles);
