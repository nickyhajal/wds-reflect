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
  rtl: false,
  centerPadding: "200px",
};

let slider;

const speakerBlocks = () => {
  const out = [];
  let c = 0;
  vars.speakers.forEach((v) => {
    const id = `speaker-${c}`;
    out.push(
      <div styleName="box">
        <Image src="avatar-cutout.png" width="105" height="105" styleName="cutout" />
        <Image src={v.photo} width="105" height="105" styleName="avatar" />
        <div styleName="name">{v.name}</div>
      </div>
    );
    c += 1;
  });
  return out;
};

const renderTitle = title => (
  (title !== undefined && title.length ? (
    <Block styleName="title" width="100%">##{title}</Block>
  ) : '')
);

const SpeakerList = ({ title, listSet }) => {
  return (
    <Block cols="8" bleed={false} styleName="speakerList" background="canvas">
      {renderTitle(title)}
      <div styleName="controls" className="dots-controls">
        <button styleName="arrow-prev" onClick={() => { slider.slickPrev() }} />
        <button styleName="arrow-next" onClick={() => { slider.slickNext() }} />
      </div>
      <Block cols="6">
        <Slider ref={c => slider = c } {...settings}>
          {speakerBlocks(listSet)}
        </Slider>
      </Block>
    </Block>
  );
};

SpeakerList.propTypes = {
  title: PropTypes.string,
  listSet: PropTypes.string,
};

export default CSSModules(SpeakerList, styles);
