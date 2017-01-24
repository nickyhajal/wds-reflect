import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import styles from './VideoModal.css';

// Sections

class VideoModal extends React.Component {

  static propTypes = {
    close: PropTypes.func,
    modals: PropTypes.objectOf(PropTypes.object),
    visible: PropTypes.string,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      open: false,
      page: false,
    };
  }

  goTo(e, page) {
    if (page === 'close') {
      this.props.close(e);
    } else {
      page = e;
      this.setState({ page });
    }
  }

  videoFrame() {
    if (
      this.props.visible !== 'hidden' &&
      this.props.modals.data.video !== undefined && 
      this.props.modals.data.video.id !== undefined
    ) {
      return (
        <iframe
          className="modal-remove"
          src={`//player.vimeo.com/video/${this.props.modals.data.video.id}?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1`}
          width={800}
          height={450}
          frameBorder="0"
          allowFullScreen
        />
      );
   } else { return ''};
  }
  render() {
    let top = window.outerWidth < 1025 ? 0 : 88;
    if (window.outerHeight < 810) {
      top = 0;
    }
    return (
      <div styleName="modal" className="modal" style={{ top: `${top}px` }}>
        <button href="#" className="modal-close" onClick={this.props.close}>x</button>
        {this.videoFrame()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    modals: state.modals.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(VideoModal, styles));
