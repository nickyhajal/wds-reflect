import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import styles from './Login.css';
import actions from '../../actions';
import auth from '../../utils/auth';
import Button from '../Button/Button';

class Login extends React.Component {

  static propTypes = {
    auth: PropTypes.object,
    action: PropTypes.object,
    goTo: PropTypes.func,
    title: PropTypes.string,
    backLink: PropTypes.string,
    onSuccess: PropTypes.func,
    onBack: PropTypes.func,
  };

  static defaultProps = {
    title: 'Login to Your WDS Account',
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      email: '',
      pw: '',
    };
  }

  login(e) {
    if (e !== undefined) {
      e.stopPropagation();
      e.preventDefault();
    }
    auth.login(this.state.email, this.state.pw);
  }

  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  forgotPw(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.goTo('reset');
  }

  back(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.goTo('');
  }

  render() {
    let btnStr = 'Login';
    console.info(this.props.auth);
    if (this.props.auth.status === 'loading') {
      btnStr = 'Logging In...';
    } else if (this.props.auth.status === 'error') {
      btnStr = this.props.auth.error;
    } else if (this.props.auth.me) {
      btnStr = 'Success!';
    }
    return (
      <div className="modal-section">
        <h2>{this.props.title}</h2>
        <p>
          Use the email and password you used when you created your WDS account.
        </p>
        <p>
          <Link
            styleName="link"
            to="/reset-password"
          >
            Forgot your password?
          </Link>
        </p>
        <form onSubmit={this.login}>
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
              <label>Password</label>
              <input type="password" name="pw" onChange={this.change} placeholder="Your Password" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-box">
              <Button styleName="button">{btnStr}</Button>
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
