import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import actions from '../../actions';
import auth from '../../utils/auth';
import types from '../../utils/types';

class EnsureAttendingAndHasProfile extends React.Component {
  componentDidMount() {
    if (this.props.auth.me) {
      const [section] = this.props.auth.me.intro.split(',').map(v => parseInt(v, 10));
      const ticketsToClaim = this.props.auth.me.tickets.find(({ status }) => status === 'unclaimed');
      if (+this.props.auth.me.attending20 !== 1) {
        // browserHistory.replace('/attendees-only');
      } else if (ticketsToClaim) {
        // browserHistory.replace('/assign');
      } else if (section < 4) {
        // browserHistory.replace('/welcome');
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

EnsureAttendingAndHasProfile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EnsureAttendingAndHasProfile);
