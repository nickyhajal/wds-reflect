import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import styles from './PhotoUpload.css';
import Image from '../Image/Image';
import types from '../../utils/types';
import C from '../../constants';
import actions from '../../actions';


class PhotoUpload extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      progress: false,
    };
  }
  uploadPhoto(file) {
    const data = new FormData();
    data.append('pic', file[0]);

    const config = {
      withCredentials: true,
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      },
    };
    axios.post(`https://${C.url}/upload-avatar`, data, config)
    .then((res) => {
      const me = this.props.auth.me;
      this.props.act.updateMe('pic', `https://avatar.wds.fm/${me.user_id}?${_.random(0, 100)}`);
    })
    .catch((err) => {
    });
  }
  renderPic(pic) {
    if (pic) {
      return (
        <Image styleName="photo" src={pic} width="125" height="125" />
      );
    }
    return '';
  }
  render() {
    let pic = false;
    if (this.props.auth.me.pic !== undefined && this.props.auth.me.pic.length) {
      pic = `https://avatar.wds.fm/${this.props.auth.me.user_id}?width=250&${_.random(0, 100)}`;
    }
    return (
      <div>
        {this.renderPic(pic)}
        <Dropzone accept="image/*" className={(pic ? 'hasPic' : 'noPic')} multiple={false} onDrop={this.uploadPhoto} styleName="dropzone">
          <div>Click or drag a photo here to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

PhotoUpload.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  values: PropTypes.objectOf(PropTypes.string),
  key: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

PhotoUpload.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(PhotoUpload, styles));
