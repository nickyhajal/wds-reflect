import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import s from 'underscore.string';
import Slider from 'react-slick';
import styles from './SpeakerList.css';
import Image from '../Image/Image';
import Block from '../Block/Block';
import vars from '../../core/vars';
import is from '../../utils/is';

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: is.phone() ? 2 : 4,
  slidesToScroll: 2,
  rtl: false,
  centerPadding: "200px",
};

let slider;

const passesFilter = (speaker, { year }) => {
  console.log(year);
  if (year !== undefined) {
    if (
      (!year.length) ||
      (year === 'alumni' && speaker.year.indexOf('2017') < 0) ||
      (speaker.year.indexOf(year) > -1)
    ) {
      return true;
    }
    return false;
  }
  return true;
};
const speakerBlocks = (props) => {
  const out = [];
  let c = 0;
  vars.speakers.forEach((v) => {
    const id = `speaker-${c}`;
    console.log(passesFilter(v, props));
    if (passesFilter(v, props)) {
      out.push(
        <Link to={`/speaker/${s.slugify(v.name)}`} styleName="box">
          <Image src="avatar-cutout.png" width="105" height="105" styleName="cutout" />
          <Image src={v.photo} width="105" height="105" styleName="avatar" />
          <div styleName="name">{v.name}</div>
        </Link>
      );
      c += 1;
    }
  });
  return out;
};

const renderTitle = title => (
  (title !== undefined && title.length ? (
    <Block styleName="title" width="100%">##{title}</Block>
  ) : '')
);

const SpeakerList = ({ title, listSet, year }) => {
  return (
    <Block cols="8" bleed={false} styleName="speakerList" background="canvas">
      {renderTitle(title)}
      <div styleName="controls" className="dots-controls">
        <button styleName="arrow-prev" onClick={() => { slider.slickPrev(); }} />
        <button styleName="arrow-next" onClick={() => { slider.slickNext(); }} />
      </div>
      <Block cols="6">
        <Slider ref={c => slider = c } {...settings}>
          {speakerBlocks({ listSet, year })}
        </Slider>
      </Block>
    </Block>
  );
};

SpeakerList.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  listSet: PropTypes.string,
};

export default CSSModules(SpeakerList, styles);
