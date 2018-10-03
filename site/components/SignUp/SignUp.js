import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import styles from './SignUp.css';
import actions from '../../actions';
import auth from '../../utils/auth';
import types from '../../utils/types';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FormWrap from '../FormWrap/FormWrap';
import FormRow from '../FormRow/FormRow';
import Button from '../Button/Button';
import C from '../../constants';

class SignUp extends React.Component {

  static propTypes = {
    auth: PropTypes.object,
    action: PropTypes.object,
    goTo: PropTypes.func,
    title: PropTypes.string,
    backLink: PropTypes.string,
    onSuccess: PropTypes.func,
    onBack: types.funcOrBool,
  };

  static defaultProps = {
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      email: '',
      pw: '',
      status: 'ready',
    };
  }
  setForm(form) {
    if (form !== null) {
      this.form = form;
    }
  }
  create(form) {
    return (new Promise((resolve, reject) => {
      auth.createUser(this.form.state.form)
      .then(resolve)
      .catch(reject);
    }));
  }
  render() {
    return (
      <div className="modal-section signupSection">
        <h2>{this.props.title}</h2>
        <p>
          Enter your name and email address
          to create your very own WDS Account!
        </p>
        <Form
          ref={this.setForm}
          onSubmit={this.create}
          onSuccess={this.props.onSuccess}
          buttonStart="Create Account"
          buttonProgress="Creating..."
          buttonSuccess="Success!"
          className="signupForm"
          buttonStyle={{backgroundColor: C.color.orange}}
        >
          <FormRow>
            <FormWrap style={{ float: 'left', width: '48%', marginRight: '4%', marginBottom: '0' }}>
              <label>First Name</label>
              <Input id="first_name" placeholder="Your First Name" />
            </FormWrap>
            <FormWrap style={{ float: 'left', width: '48%', marginBottom: '0' }}>
              <label>Last Name</label>
              <Input id="last_name" placeholder="Your Last Name" />
            </FormWrap>
          </FormRow>
          <FormRow>
            <FormWrap>
              <label>Email Address</label>
              <Input type="email" id="email" placeholder="Your E-mail Address" />
            </FormWrap>
          </FormRow>
          </Form>
          <div className="form-row">
            {(this.props.backLink !== undefined || this.props.onBack !== undefined ?
              <Link styleName="back" className="formBack" to={this.props.backLink} onClick={this.props.onBack} >◂ Back</Link> :
              ''
            )}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(cssmodules(SignUp, styles));
