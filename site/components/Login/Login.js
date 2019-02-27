import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import styles from './Login.css';
import types from '../../utils/types';
import actions from '../../actions';
import auth from '../../utils/auth';
import Button from '../Button/Button';

class Login extends React.Component {

  static propTypes = {
    auth: PropTypes.object,
    action: PropTypes.object,
    goTo: PropTypes.func,
    title: types.stringOrBool,
    backLink: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onBack: types.funcOrBool,
    redirect: PropTypes.bool,
    onForgot: types.funcOrBool,
  };

  static defaultProps = {
    title: 'Login to Your WDS Account',
    onSuccess: () => {},
    onError: () => {},
    redirect: false,
    onForgot: false,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      username: '',
      pw: '',
    };
  }

  login(e) {
    if (e !== undefined) {
      e.stopPropagation();
      e.preventDefault();
    }
    auth.login(this.state.username, this.state.pw)
    .then(this.success)
    .then(this.props.onSuccess)
    .catch(this.props.onError);
  }

  success() {
    if (this.props.redirect) {
      browserHistory.replace('/hub');
    }
  }
  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  onForgot(e) {
    if (this.props.onForgot) {
      e.stopPropagation();
      e.preventDefault();
      this.props.onForgot(e);
    }
  }

  back(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.goTo('');
  }


  render() {
    let btnStr = 'Login';
    if (this.props.auth.status === 'loading') {
      btnStr = 'Logging In...';
    } else if (this.props.auth.status === 'error') {
      btnStr = this.props.auth.error;
    } else if (this.props.auth.me) {
      btnStr = 'Success!';
    }
    return (
      <div className="modal-section">
        {this.props.title ? (<h2>{this.props.title}</h2>) : ''}
        <p>
          Use the email and password you used when you created your WDS account.&nbsp;
          <br />
          <Link
            className="forgotPwLink"
            styleName="link"
            to="/reset-password"
            onClick={this.onForgot}
          >
            Forgot your password?
          </Link>
        </p>
        <form onSubmit={this.login} className="loginForm" styleName="form">
          <div className="form-row">
            <div className="form-box">
              <label>E-Mail Address</label>
              <input
                type="email"
                name="username" onChange={this.change}
                placeholder="Your E-mail Address"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-box">
              <label>Password</label>
              <input type="password" name="pw" onChange={this.change} placeholder="Your Password" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-box">
              <Button styleName="button">{btnStr}</Button>
              {(this.props.backLink !== undefined || this.props.onBack ?
                <Link styleName="back" className="formBack" to={this.props.backLink} onClick={this.props.onBack} >◂ Back</Link> :
                ''
              )}
            </div>
          </div>
          <div className="clear" />
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
