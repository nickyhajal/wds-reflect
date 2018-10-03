import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import s from 'underscore.string';
import Slider from 'react-slick';
import styles from './PersonScroller.css';
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


const passesFilter = (speaker, { year }) => {
  if (year !== undefined) {
    if (
      (!year.length) ||
      (year === 'alumni' && speaker.year.indexOf('2018') < 0) ||
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
  vars[props.personType].forEach((v) => {
    const id = `speaker-${c}`;
    if (passesFilter(v, props)) {
      out.push(
        <Link to={`/awardee/${s.slugify(v.name)}`} styleName="box">
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

const renderSlider = (listSet, year, personType) => {
  let slider;
  return (
    <div>
      <div styleName="controls" className="dots-controls">
        <button styleName="arrow-prev" onClick={() => { slider.slickPrev(); }} />
        <button styleName="arrow-next" onClick={() => { slider.slickNext(); }} />
      </div>
      <Slider ref={c => slider = c } {...settings}>
        {speakerBlocks({ listSet, year, personType })}
      </Slider>
    </div>
  );
};

const renderExpanded = (listSet, year, personType) => {
  return (
    <div styleName="expanded">
      {speakerBlocks({ listSet, year, personType })}
    </div>
  );
};

const PersonScroller = ({ title, listSet, year, type, personType }) => {
  let content = '';
  if (type === 'slider') {
    content = renderSlider(listSet, year, personType);
  } else if (type === 'expanded') {
    content = renderExpanded(listSet, year, personType);
  }
  return (
    <Block cols="8" bleed={false} styleName="speakerList" background="canvas">
      {renderTitle(title)}
      <Block cols="6">
        {content}
      </Block>
    </Block>
  );
};

PersonScroller.defaultProps = {
  type: 'slider',
};
PersonScroller.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  type: PropTypes.string,
  listSet: PropTypes.string,
};

export default CSSModules(PersonScroller, styles);
