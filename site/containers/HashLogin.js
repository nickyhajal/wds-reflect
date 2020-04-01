import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import auth from '../utils/auth';

class HashLoginComponent extends Component {
  constructor() {
    super()
    this.count = 0
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.checkHash();
  }
  componentDidUpdate() {
    if (this.count < 5) {
      this.checkHash();
    }
    this.count += 1;
  }
  checkHash() {
    if (this.props.auth.me) {
      this.redirect();
    }
    if (!this.props.auth.me && this.props.routeParams.loginhash !== undefined) {
      auth.loginWithHash(this.props.routeParams.loginhash).then(() => {
        this.redirect();
      });
    }
  }
  redirect() {
    const path = this.props.location.pathname.includes('login') ? '/hub' : this.props.location.pathname.replace(`/${this.props.routeParams.loginhash}`, '')
    browserHistory.replace(path);
  }
  render() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

export default connect(mapStateToProps)(HashLoginComponent);
