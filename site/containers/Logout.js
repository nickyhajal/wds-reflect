import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../utils/auth';

class Logout extends Component {
  componentDidMount() {
    auth.logout();
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

export default connect(mapStateToProps)(Logout);
