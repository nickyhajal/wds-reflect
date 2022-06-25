import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import types from '../utils/types';
import actions from '../actions';


class RedirIfNotLoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'ready',
      question: false,
      error: '',
    };
  }
  componentDidUpdate() {
    //
    if (this.props.auth.checked && !this.props.auth.me) {
      browserHistory.push('/login?live');
      // window.location.href = '/login?propose-a-meetup';
    }
  }
  render() {
    const { status, error } = this.state;
    return (
      <div />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

RedirIfNotLoggedIn.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedirIfNotLoggedIn);
