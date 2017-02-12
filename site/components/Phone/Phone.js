import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import countryData from 'country-data';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './Phone.css';
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
  getCountries() {
    if (!this.countries) {
      const countries = [];
      const byId = {};
      countryData.countries.all.forEach((c) => {
        const code = c.countryCallingCodes[0];
        if (code !== undefined && code.length) {
          const value = `${parseInt(code, 10)}-${c.alpha2}`;
          const country = {
            value, label: `${code} - ${c.name}`,
          };
          countries.push(country);
          byId[c.alpha2] = country;
        }
      });
      this.countries = {
        byId,
        list: countries,
      };
    }
    return this.countries;
  }
  changeSelect(name, e) {
    this.props.onChange({ target: _.defaults({ name }, e) });
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
    let code = props.values.calling_code !== undefined && props.values.calling_code ? props.values.calling_code : '1';
    if (code === '1' && props.values.country !== undefined && props.values.country) {
      code += `-${props.values.country}`;
    } else if (code === '1') {
      code += '-US';
    } else {
      countryData.countries.all.forEach((c) => {
        if (`${parseInt(c.countryCallingCodes[0], 10)}` === code) {
          code += `-${c.alpha2}`;
        }
      });
    }
    return (
      <FormRow {...props}>
        <label>Country Code</label>
        <Select
          ref={(elm) => { this.countrySelect = elm; }}
          name="region"
          onChange={(e) => { this.changeSelect('calling_code', e); }}
          clearable={false}
          placeholder="Search Countries..."
          value={code}
          styleName="code"
          options={this.getCountries().list}
        />
        <label>Your Phone Number</label>
        <Input id="phone" placeholder="Your Phone Number" required="You didn't enter your phone number!" />
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
