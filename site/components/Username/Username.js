import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './Username.css';
import types from '../../utils/types';
import C from '../../constants';
import actions from '../../actions';
import Button from '../Button/Button';
import api from '../../utils/api';
import FormRow from '../FormRow/FormRow';
import FormWrap from '../FormWrap/FormWrap';
import Input from '../Input/Input';


class Username extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.timo = 0;
  }
  changeUsername(e) {
    if (e.target !== undefined) {
      let name = e.target.value;
      name = name.replace('http://', '').replace('https://', '');
      name = name.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-]/g, '').replace(/-+/g, '-');
      name = name.toLowerCase();
      this.props.act.updateMe('user_name', name);
      clearTimeout(this.timo);
      this.timo = setTimeout(() => {
        this.props.act.checkUsername(name);
      }, 300);
    }
  }
  changePW(e) {
    this.props.act.updateMe('password', e.target.value);
  }
  renderSample() {
    let uname = this.props.auth.me.user_name;
    if (uname === undefined || !uname.length || (uname.length && uname.length === 40)) {
      uname = 'enter-a-name';
    }
    return (
      <div styleName="namesample">{`worlddominationsummit.com/~${uname}`}</div>
    );
  }
  renderPW() {
    const me = this.props.auth.me;
    if (me.has_pw === undefined || !me.has_pw) {
      return (
        <FormWrap style={{ margin: '30px 0 0' }}>
          <label>Set a Password</label>
          <Input id="new_password" type="password" postChange={this.changePW} />
        </FormWrap>
      );
    }
    return '';
  }
  renderStatus(status) {
    if (status) {
      let msg = 'That url isn\'t available!';
      if (status === 'available') {
        msg = 'That url is available!';
      }
      return (
        <div styleName="usernameStatus">{msg}</div>
      );
    }
    return '';
  }
  render() {
    const status = this.props.auth.usernameStatus;
    const props = _.omit(this.props, ['className', 'styleName', 'styles']);
    return (
      <FormRow {...props} styleName="shell">
        <Input id="user_name" className={`usernameInp ${status}`} postChange={this.changeUsername} />
        {this.renderSample()}
        {this.renderStatus(status)}
        {this.renderPW()}
      </FormRow>
    );
  }
}

Username.propTypes = {
  auth: types.auth,
  act: types.actions,
};

Username.displayName = 'Username';

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Username, styles));
