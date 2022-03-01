import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import styles from './Transfer.css';
import types from '../../utils/types';
import actions from '../../actions';
import auth from '../../utils/auth';
import Button from '../Button/Button';
import Address from '../Address/Address';
import Form from '../Form/Form';
import Input from '../Input/Input';
import FormRow from '../FormRow/FormRow';
import FormWrap from '../FormWrap/FormWrap';
import api from '../../utils/api';


class Transfer extends React.Component {
  static propTypes = {
    title: types.stringOrBool,
    act: types.actions,
  };

  static defaultProps = {
    title: 'Transfer Your Ticket',
    onSuccess: () => {},
    onError: () => {},
    redirect: false,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      username: '',
      pw: '',
    };
  }

  doTransfer(elm) {
    const { first_name: firstName, last_name: lastName } = elm.state.form;
    // api('post tickettransfer', { data: _.defaults(elm.state.form, { country: 'US' }) }).then((rsp) => {
    //   console.log(rsp);
    //   browserHistory.push('/transferred');
    // });
    this.props.act.setProduct({
      code: 'xfer',
      product: 'WDS Ticket Transfer',
      description: `Transfer to ${firstName} ${lastName}`,
      data: _.defaults(elm.state.form, { country: 'US' }),
      price: 10000,
      redirect: 'transferred',
    });
    browserHistory.replace('/cart');
  }

  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  render() {
    let btnStr = 'Transfer';
    if (this.props.auth.status === 'loading') {
      btnStr = 'Preparing...';
    } else if (this.props.auth.status === 'error') {
      btnStr = this.props.auth.error;
    }
    return (
      <div className="modal-section" styleName="shell">
        {this.props.title ? <h2>{this.props.title}</h2> : ''}
        {this.props.children}
        <Form
          onSubmit={this.doTransfer}
          className="loginForm"
          styleName="form"
          buttonStart="Continue"
        >
          <h3>New Attendee's Contact Info</h3>
          <FormRow>
            <FormWrap
              style={{ float: 'left', width: '48%', marginRight: '4%' }}
            >
              <label>Their First Name</label>
              <Input type="text" id="first_name" onChange={this.change} />
            </FormWrap>
            <FormWrap style={{ float: 'left', width: '48%' }}>
              <label>Their Last Name</label>
              <Input type="text" id="last_name" onChange={this.change} />
            </FormWrap>
          </FormRow>
          <FormRow>
            <FormWrap style={{ float: 'left', width: '48%' }}>
              <label>Their E-Mail</label>
              <Input type="text" id="email" onChange={this.change} />
            </FormWrap>
          </FormRow>
          <div className="clear" />
          <h3>New Attendee's Address</h3>
          <Address />
        </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  cssmodules(Transfer, styles)
);
