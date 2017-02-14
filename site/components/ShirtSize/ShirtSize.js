import React, { PropTypes } from 'react';
import _ from 'lodash';
import Select from 'react-select';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './ShirtSize.css';
import FormRow from '../FormRow/FormRow';
import FormWrap from '../FormWrap/FormWrap';

class ShirtSize extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
  }
  changeSelect(name, e) {
    this.props.onChange({ target: _.defaults({ name }, e) });
  }
  render() {
    const sizes = [
      { value: 'wxs', label: 'Woman\'s XS' },
      { value: 'ws', label: 'Woman\'s S' },
      { value: 'wm', label: 'Woman\'s M' },
      { value: 'wl', label: 'Woman\'s L' },
      { value: 'wxl', label: 'Woman\'s XL' },
      { value: 'w2xl', label: 'Woman\'s 2XL' },
      { value: 'ms', label: 'Men\'s S' },
      { value: 'mm', label: 'Men\'s M' },
      { value: 'ml', label: 'Men\'s L' },
      { value: 'mxl', label: 'Men\'s XL' },
      { value: 'm2xl', label: 'Men\'s 2XL' },
      { value: 'm3xl', label: 'Men\'s 3XL' },
    ];
    return (
      <FormRow>
        <label>TShirt Size</label>
        <Select
          value={this.props.values.size}
          name="size"
          options={sizes}
          clearable={false}
          onChange={(e) => { this.changeSelect('size', e); }}
        />
      </FormRow>
    );
  }
}

ShirtSize.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string),
};

export default CSSModules(ShirtSize, styles);
