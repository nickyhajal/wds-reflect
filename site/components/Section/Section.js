import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import styles from './Section.css';
import Image from '../Image/Image';
import widther from '../../utils/widther';
import colorize from '../../utils/colorize';
import angler from '../../utils/angler';


const renderHeader = ({ headerImage, headerVideo, headerClip, headerSize, headerPosition }) => {
  let out = '';
  if (headerImage !== undefined) {
    let height = '524px';
    if (headerSize !== undefined) {
      if (headerSize === 'thin') {
        height = '300px';
      }
    }
    const position = (headerPosition === undefined) ? 'bottom' : headerPosition;
    out = (
      <Image src={headerImage} clip={headerClip} width="100%" height={height} position={position} styleName="headerImage" />
    );
  }
  if (headerVideo !== undefined) {

  }
  return out;
};

const Section = (props) => {
  const p = colorize(props);
  let shellCss = {
    backgroundColor: p.color,
  };
  const contentCss = {
    width: widther(props),
  };
  if (props.clip) {
    const clip = angler(props.clip);
    shellCss.clipPath = clip;
    shellCss.WebkitClipPath = clip;
  }
  if (props.margin) {
    shellCss.margin = props.margin;
  }
  shellCss = _.defaults(props.css, shellCss);
  return (
    <section className={`section-${props.color}`} styleName="shell" style={shellCss}>
      {renderHeader(p)}
      {(props.bound ?
        (<div className="contentainer" style={contentCss}>
          {p.children}
        </div>) : (p.children)
      )}
    </section>
  );
};

Section.propTypes = {
  color: PropTypes.string,
  clip: PropTypes.string,
  margin: PropTypes.string,
  css: PropTypes.objectOf(PropTypes.string),
  bound: PropTypes.bool,
};
Section.defaultProps = {
  color: 'white',
  bound: true,
};

export default CSSModules(Section, styles);
