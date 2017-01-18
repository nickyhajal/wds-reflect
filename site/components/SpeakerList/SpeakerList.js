import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Slider from 'react-slick';
import styles from './SpeakerList.css';
import Image from '../Image/Image';
import Block from '../Block/Block';
import vars from '../../core/vars';

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  rtl: true,
};

const speakerBlocks = () => {
  const out = [];
  let c = 0;
  vars.speakers.forEach((v) => {
    const id = `speaker-${c}`;
    out.push(
      <div styleName="box" key={id}>
        <Image src="avatar-cutout.png" width="105" height="105" styleName="cutout" />
        <Image src={v.photo} width="105" height="105" styleName="avatar" />
        <div styleName="name">{v.name}</div>
      </div>
    );
    c += 1;
  });
  return out;
};

const SpeakerList = (props) => {
  return (
    <Block cols="8" bleed={false} styleName="speakerList" background="canvas">
      <Slider {...settings}>
        {speakerBlocks()}
      </Slider>
    </Block>
  );
};

export default CSSModules(SpeakerList, styles);
