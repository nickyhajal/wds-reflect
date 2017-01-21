import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import styles from './Modals.css';
import VideoModal from './modals/VideoModal.js';
import TellAFriend from './modals/TellAFriend.js';
import actions from '../../actions';

class Modals extends React.Component {

  static propTypes = {
    modals: PropTypes.objectOf(PropTypes.string),
    act: PropTypes.objectOf(PropTypes.func),
  };

  constructor() {
    super();
    this.state = {
      open: false,
      visibility: 'hidden',
    };
    autoBind(Object.getPrototypeOf(this));
  }

  componentDidMount() {
    this.setHiddenState();
  }
  componentDidUpdate() {
    this.setHiddenState();
  }

  setHiddenState() {
    // If hiding, we want it to completely be gone in 300ms
    if (this.props.modals.visibility === 'hiding') {
      setTimeout(() => {
        this.props.act.setModalVisibility('hidden');
      }, 400);

      // Once we've told it to hide completely, we don't want another timer
      this.props.act.setModalVisibility('will-be-hidden');
    }

    // We have to turn off the display:block a few ms before
    // changing opacity
    if (this.props.modals.visibility === 'unhide') {
      setTimeout(() => {
        this.props.act.setModalVisibility('visible');
      }, 40);
      this.props.act.setModalVisibility('will-unhide');
    }
  }

  close(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.act.closeModal();
  }

  render() {
    const vis = this.props.modals.visibility;
    return (
      <div styleName="modals" className={vis}>
        <button
          onClick={this.close}
          styleName="overlay"
        />
        <VideoModal close={this.close} visible={this.props.modals.open === 'video' ? vis : 'hidden'} />
        <TellAFriend close={this.close} visible={this.props.modals.open === 'tellafriend' ? vis : 'hidden'} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    modals: state.modals.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Modals, styles));
