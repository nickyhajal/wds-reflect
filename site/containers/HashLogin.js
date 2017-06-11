import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import auth from '../utils/auth';

class HashLoginComponent extends Component {
  componentDidMount() {
    this.checkHash();
  }
  componentDidUpdate() {
    this.checkHash();
  }
  checkHash() {
    if (this.props.auth.me) {
      this.redirect();
    }
    if (!this.props.auth.me && this.props.routeParams.id !== undefined) {
      auth.loginWithHash(this.props.routeParams.id).then(() => {
        this.redirect();
      });
    }
  }
  redirect() {
    browserHistory.replace(
      this.props.location.pathname.replace(`/${this.props.routeParams.id}`, '')
    );
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
