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
import Input from '../Input/Input';


class Username extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
  }
  change(e) {
    if (e.target !== undefined) {
      let name = e.target.value;
      name = name.replace('http://', '').replace('https://', '');
      name = name.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-]/g, '').replace(/-+/g, '-');
      name = name.toLowerCase();
      this.props.act.updateMe('user_name', name);
    }
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
  render() {
    const props = _.omit(this.props, ['className', 'styleName', 'styles']);
    return (
      <FormRow {...props}>
        <Input id="user_name" postChange={this.change} />
        {this.renderSample()}
      </FormRow>
    );
  }
}

Username.propTypes = {
  auth: types.auth,
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
