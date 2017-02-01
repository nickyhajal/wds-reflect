import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import actions from '../../actions';
import auth from '../../utils/auth';
import types from '../../utils/types';

class EnsureLoggedIn extends React.Component {
  componentDidMount() {
    const { currentURL } = this.props;

    if (!this.props.auth.me) {
      if (!this.props.auth.checked) {
        auth.getMe();
      } else {
        this.props.act.setLoginRedirect(currentURL);
        browserHistory.replace('/login');
      }
    }
  }

  render() {
    if (this.props.auth.me) {
      return this.props.children;
    }
    return null;
  }
}

EnsureLoggedIn.propTypes = {
  dispatch: PropTypes.string,
  currentURL: PropTypes.string,
  auth: types.auth,
  act: types.actions,
  children: types.children,
};

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth.toJS(),
    currentURL: ownProps.location.pathname,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);
