import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './Tweet.css';
import types from '../../utils/types';
import C from '../../constants';
import actions from '../../actions';
import Button from '../Button/Button';
import api from '../../utils/api';


class Tweet extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state  ={
      tweet: `Just setup my attendee profile for WDS! #WDS2019`,
      status: 'ready',
    };
  }
  componentDidMount(props) {
    this.setState({
      tweet: `Just setup my attendee profile for WDS! Check it out: http://wds.fm/~${this.props.auth.me.user_name} #WDS2019`,
    });
  }
  setInp(inp) {
    this.inp = inp;
  }
  send() {
    if (
      this.props.auth.me !== undefined &&
      this.props.auth.me.twitter !== undefined &&
      this.props.auth.me.twitter.length) {
      if (this.state.status !== 'sent' && this.state.status !== 'sending') {
        this.setState({ status: 'sending' });
        api('post user/tweet', { tweet: this.inp.value })
        .then(() => {
          this.setState({ status: 'sent' });
        });
      }
    } else {
      const url = `https://twitter.com/intent/tweet?text=${encodeURI(this.inp.value)}`;
      window.open(url, 'tweetWindow', 'status = 1, height = 500, width = 680, resizable = 0');
    }
  }
  change(e) {
    this.setState({
      tweet: e.target.value,
    });
  }
  render() {
    const count = 270 - this.state.tweet.length;
    let btn = 'Send Tweet!';
    if (this.state.status === 'sending') {
      btn = 'Sending...';
    } else if (this.state.status === 'sent') {
      btn = 'Sent!';
    }
    return (
      <div styleName="shell">
        <div styleName="count">{count}</div>
        <textarea styleName="tweet" ref={this.setInp} onChange={this.change} value={this.state.tweet} />
        <Button onClick={this.send}>{btn}</Button>
      </div>
    );
  }
}

Tweet.propTypes = {
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

Tweet.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Tweet, styles));
