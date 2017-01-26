import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import autoBind from 'react-autobind';
import styles from './ResetPass.css';
import actions from '../../actions';
import auth from '../../utils/auth';
import Button from '../Button/Button';

class Login extends React.Component {

  static propTypes = {
    auth: PropTypes.object,
    action: PropTypes.object,
    backLink: PropTypes.string,
    onBack: PropTypes.func,
    // goTo: PropTypes.func,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      email: '',
    };
  }

  reset(e) {
    if (e !== undefined) {
      e.stopPropagation();
      e.preventDefault();
    }
    auth.reset(this.state.email);
  }

  back(e) {
    e.stopPropagation();
    e.preventDefault();
    // this.props.goTo('login');
  }


  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  render() {
    let btnStr = 'Send Reset E-Mail';
    if (this.props.auth.resetStatus === 'sending') {
      btnStr = 'Sending...';
    } else if (this.props.auth.resetError) {
      btnStr = this.props.auth.resetError;
    } else if (this.props.auth.resetStatus === 'success') {
      btnStr = 'Success, check your email!';
    }
    return (
      <div className="modal-section">
        <h2>Reset Your WDS Password</h2>
        <p>
          Enter the email address on your account and
          we'll send you an email to reset your password.
        </p>
        <form onSubmit={this.reset}>
          <div className="form-row">
            <div className="form-box">
              <label>E-Mail Address</label>
              <input
                type="text"
                name="email" onChange={this.change}
                placeholder="Your E-mail Address"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-box">
              <Button styleName="button" onClick={this.reset}>{btnStr}</Button>
              {(this.props.backLink !== undefined ?
                <Link styleName="back" to={this.props.backLink} onClick={this.props.onBack} >◂ Back</Link> :
                ''
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(cssmodules(Login, styles));
