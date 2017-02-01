import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './TwitterConnect.css';
import types from '../../utils/types';
import C from '../../constants';
import actions from '../../actions';
import Button from '../Button/Button';
import api from '../../utils/api';


class TwitterConnect extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.twitTimo = 0;
    this.wnd = false;
  }
  disconnect(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.act.updateMe('twitter', '');
    api('delete user/twitter');
  }
  twitterCheck() {
    clearTimeout(this.twitTimo);
    api('get me/twitter')
    .then((rsp) => {
      if (rsp !== undefined && rsp.data !== undefined) {
        if (rsp.data.twitter !== undefined && rsp.data.twitter.length) {
          if (this.wnd) {
            this.wnd.close();
          }
          this.props.act.updateMe('twitter', rsp.data.twitter);
        } else {
          this.twitTimo = setTimeout(() => {
            this.twitterCheck();
          }, 800);
        }
      }
    });
  }
  connect(e) {
    e.preventDefault();
    e.stopPropagation();
    const url = `http://${C.url}/api/user/twitter/connect`;
    this.wnd = window.open(url, 'myWindow', 'status = 1, height = 500, width = 680, resizable = 0');
    this.twitterCheck();
  }
  renderConnect() {
    return (
      <div styleName="shell">
        <div styleName="connectStr">Integrate Your Twitter Account</div>
        <Button onClick={this.connect} style={{ margin: '28px auto 10px', width: '180px', display: 'block', float: 'none' }}>Connect to Twitter</Button>
        <div className="clear" />
      </div>
    );
  }
  renderExisting() {
    return (
      <div styleName="shell">
        <div styleName="connectedStr">Connected to @{this.props.auth.me.twitter}</div>
        <Button onClick={this.connect}>Use Different Account</Button>
        <Button onClick={this.disconnect}>Disconnect</Button>
        <div className="clear" />
      </div>
    );
  }
  render() {
    if (this.props.auth.me !== undefined && this.props.auth.me.twitter !== undefined) {
      if (this.props.auth.me.twitter.length) {
        return this.renderExisting();
      } else {
        return this.renderConnect();
      }
    }
    return '';
  }
}

TwitterConnect.propTypes = {
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

TwitterConnect.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(TwitterConnect, styles));
