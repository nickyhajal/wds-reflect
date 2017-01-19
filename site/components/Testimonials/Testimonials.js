import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import styles from './Testimonials.css';
import Image from '../Image/Image';
import Block from '../Block/Block';
import vars from '../../core/vars';
import Section from '../Section/Section';

class Testimonials extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      active: 0,
      shiftedTo: 0,
    };
  }
  next() {
    const max = vars.testimonials.length - 1;
    let active = this.state.active + 1;
    if (active > max) {
      active = 0;
    }
    this.shift(active);
  }
  shift(active) {
    let { shiftedTo } = this.state;
    if (Math.abs(active - shiftedTo) > 2) {
      shiftedTo = active - 4;
    }
    if (vars.testimonials.length - shiftedTo < 9) {
      shiftedTo = vars.testimonials.length - 9;
    }
    shiftedTo = shiftedTo < 0 ? 0 : shiftedTo;
    this.setState({
      active,
      shiftedTo,
    });
  }
  prev() {
    let active = this.state.active - 1;
    if (active < 0) {
      active = vars.testimonials.length - 1;
    }
    this.shift(active);
  }
  goto(active) {
    this.shift(active);
  }
  renderAvatars() {
    const out = [];
    vars.testimonials.forEach((v, i) => {
      const id = `test-${i}`;
      const x = {};
      let className = '';
      if (this.state.active === i) {
        className = 'active';
      }
      if (v.avatarPosition !== undefined) {
        x.position = v.avatarPosition;
      }
      out.push(
        <button key={id} styleName="avatar" onClick={() => this.goto(i)}>
          <Image src={v.photo} width="97" height="97" className={className} {...x} />
        </button>
      );
    });
    return out;
  }
  renderTestimonial(active) {
    return (
      <Block width="840">
        <h2 styleName="title">{this.props.title}</h2>
        <div styleName="quote">{active.content}</div>
        <div styleName="name">{active.name}</div>
      </Block>
    );
  }
  render() {
    const x = {};
    const active = vars.testimonials[this.state.active];
    if (active.avatarPosition !== undefined) {
      x.position = active.avatarPosition;
    }
    const width = vars.testimonials.length * 113;
    const left = `${(this.state.shiftedTo * 105 * -1)}px`;
    return (
      <Section color="white" bound={false} clip="bl:0,-3%;">
        <div styleName="controls">
          <button styleName="arrow-prev" onClick={this.prev} />
          <button styleName="arrow-next" onClick={this.next} />
        </div>
        <Image width="100%" height="100%" src={active.photo} styleName="bigphoto" {...x} />
        <Block width="945" styleName="avatarShell">
          <div styleName="avatars" style={{ width: `${width}px`, left }}>
            {this.renderAvatars()}
          </div>
        </Block>
        {this.renderTestimonial(active)}
      </Section>
    );
  }
}

Testimonials.propTypes = {
  title: PropTypes.string,
  listSet: PropTypes.string,
};
Testimonials.defaultProps = {
  title: '1 of 10,000 Stories',
}

export default CSSModules(Testimonials, styles);
