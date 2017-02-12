import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Avatar.css';
import angler from '../../utils/angler';

const Avatar = ({ user, width, css, clip }) => {
  // Setup props and variables
  const shellCss = css;
  const avatarCss = {};
  const url = `https://avatar.wds.fm/${user}?width=${width}`;
  if (clip) {
    const theClip = angler(clip);
    shellCss.clipPath = theClip;
    shellCss.WebkitClipPath = theClip;
    avatarCss.clipPath = theClip;
    avatarCss.WebkitClipPath = theClip;
    console.log(theClip);
  }
  avatarCss.backgroundImage = `url(${url})`;
  avatarCss.backgroundSize = 'cover';
  avatarCss.backgroundPosition = 'center';
  return (
    <div className="avatarShell" style={shellCss} >
      <div styleName="avatar" className="avatar" style={avatarCss} />
    </div>
  );
};

Avatar.propTypes = {
  css: PropTypes.objectOf(PropTypes.string),
  width: PropTypes.string,
  user: PropTypes.string,
  clip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Avatar.defaultProps = {
  clip: false,
  tag: 'div',
  position: 'center',
  mobile: { all: {}, phone: {}, tablet: {} },
  margin: false,
  width: '400',
  css: {},
};

export default CSSModules(Avatar, styles);
