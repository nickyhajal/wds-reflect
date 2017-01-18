import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import cx from 'classnames';
import _ from 'lodash';
import Slider from 'react-slick';
import styles from './SpeakerList.css';
import Image from '~/components/Image';
import colorize from '~/utils/colorize';
import Block from '../Block/Block';

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
};

const SpeakerList = (props) => {
  return (<div/>);
};

export default CSSModules(SpeakerList, styles);
