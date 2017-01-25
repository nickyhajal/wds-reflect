import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import styles from './Video.css';
import Image from '../Image/Image';
import Block from '../Block/Block.js';
import widther from '../../utils/widther';
import unitize from '../../utils/unitize';
import is from '../../utils/is';

class Video extends Component {
  constructor() {
    super();
    this.state = {
      playing: false,
    };
    autoBind(Object.getPrototypeOf(this));
  }
  play() {
    this.setState({ playing: true });
  }
  renderVideo(width, height) {
    let w = width;
    let h = height;
    if (is.mobile()) {
      w = window.screen.width - 40;
      h = (9 / 16) * w;
    }
    return (
      <iframe
        className="modal-remove"
        src={`//player.vimeo.com/video/${this.props.videoId}?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1`}
        width={w}
        height={h}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
  renderPlaceholder(w, h) {
    return (
      <div styleName="placeholder-shell" onClick={this.play}>
        <Image src="icon/play.png" width="78" height="79" styleName="play" />
        <Image src={this.props.placeholder} width={w} height={h} styleName="img" />
      </div>
    );
  }
  render() {
    const width = unitize(widther(this.props));
    const height = unitize((9 / 16) * parseInt(width, 10));
    return (
      <Block width={width} height={height} styleName="shell">
        {(
          this.state.playing ?
          this.renderVideo(width, height) :
          this.renderPlaceholder(width, height)
        )}
        <div className="clear" />
      </Block>
    );
  }
}

Video.defaultProps = {
  playInModal: false,
};

Video.propTypes = {
  videoId: PropTypes.string,
  placeholder: PropTypes.string,
};

export default CSSModules(Video, styles);
