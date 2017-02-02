import React, { PropTypes } from 'react';
import _ from 'lodash';
import Select from 'react-select';
import countryData from 'country-data';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './Address.css';
import Input from '../Input/Input';
import FormRow from '../FormRow/FormRow';
import FormWrap from '../FormWrap/FormWrap';

import provinces from '../../utils/provinces';


class Address extends React.Component {

  constructor() {
    super();
    this.state = {
      country: 'US',
    };
    autoBind(Object.getPrototypeOf(this));
    this.countries = false;
  }
  getCountries() {
    if (!this.countries) {
      const countries = [];
      const byId = {};
      countryData.countries.all.forEach((c) => {
        const country = {
          value: c.alpha2, label: c.name,
        };
        countries.push(country);
        byId[c.alpha2] = country;
      });
      this.countries = {
        byId,
        list: countries,
      };
    }
    return this.countries;
  }
  changeCountry(e) {
    this.setState({ country: e.value });
    this.changeSelect('country', e);
  }
  changeSelect(name, e) {
    this.props.onChange({ target: _.defaults({ name }, e) });
  }
  renderRegionRow() {
    let label = false;
    let data = false;
    const regions = [];
    const byId = {};
    const map = {
      US: ['State', 'short', 'name'],
      GB: ['Region', 'region', 'region'],
      CA: ['Province', 'name', 'name'],
      CN: ['Province', 'name', 'name'],
      AU: ['Province', 'name', 'name'],
      DE: ['Region', 'name', 'name'],
      MX: ['Region', 'name', 'name'],
    };
    if (map[this.state.country] !== undefined) {
      label = map[this.state.country][0];
      provinces[this.state.country].forEach((province, i) => {
        const p = {
          value: province[map[this.state.country][1]],
          label: province[map[this.state.country][2]],
        };
        byId[province[map[this.state.country][1]]] = p;
        regions.push(p);
      });
    }
    if (label) {
      return (
        <div>
          <label>{label}</label>
          <Select
            ref={(elm) => { this.countrySelect = elm; }}
            name="region"
            onChange={(e) => { this.changeSelect('region', e); }}
            clearable={false}
            value={this.props.values.region}
            options={regions}
          />
        </div>
      );
    }
    return '';
  }
  render() {
    const pushProps = _.omit(this.props, ['className']);
    const countries = this.getCountries();
    return (
      <FormWrap {...this.props} styleName="addrRow">
        <FormRow>
          <label>Country</label>
          <Select
            value={this.props.values.country}
            name="country"
            options={countries.list}
            clearable={false}
            onChange={this.changeCountry}
          />
        </FormRow>
        <FormRow>
          <FormWrap style={{ float: 'left', width: '48%', marginRight: '4%' }} {...pushProps}>
            <label>Address Line 1</label>
            <Input id="address" />
          </FormWrap>
          <FormWrap style={{ float: 'left', width: '48%' }} {...pushProps}>
            <label>Address Line 2</label>
            <Input id="address2" />
          </FormWrap>
        </FormRow>
        <FormRow>
          <FormWrap style={{ float: 'left', width: '48%', marginRight: '4%' }} {...pushProps}>
            <label>City</label>
            <Input id="city" />
          </FormWrap>
          <FormWrap style={{ float: 'left', width: '48%' }} {...pushProps}>
            {this.renderRegionRow()}
          </FormWrap>
        </FormRow>
        <FormRow>
          <FormWrap style={{ width: '48%' }} {...pushProps}>
          <label>Postal Code</label>
          <Input id="zip" />
          </FormWrap>
        </FormRow>
      </FormWrap>
    );
  }
}

Address.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  values: PropTypes.objectOf(PropTypes.string),
  key: PropTypes.string,
};

export default CSSModules(Address, styles);
