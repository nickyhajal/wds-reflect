import React, {PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Button from '../components/Button/Button';
import actions from '../actions';
import types from '../utils/types';

class PurchaseButton extends React.Component {
  purchase = () => {
    const params = {
      code: this.props.code,
      product: this.props.product,
      price: this.props.price,
      redirect: this.props.redirect,
      purchData: this.props.purchData,
      description: this.props.description,
    };
    this.props.act.setProduct(params);
    browserHistory.push('/checkout');
  }

  render() {
    let max = 0;
    let count = 0;
    let left = 0;
    let sellsOut = false;
    let onClick = this.purchase;
    let text = this.props.children;
    if (this.props.path) {
      sellsOut = true;
      max = get(this.props.app.settings, `${this.props.path}_max`);
      count = get(this.props.app.settings, `${this.props.path}_sales`);
      left = max - count;
    }
    if (sellsOut && left === 0) {
      text = 'Sold Out';
      onClick = () => {};
    }
    return (
      <Button onClick={onClick} style={this.props.style}>{text}</Button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

PurchaseButton.propTypes = {
  children: types.children,
  code: PropTypes.string,
  product: PropTypes.string,
  price: PropTypes.string,
  redirect: PropTypes.string,
  purchData: PropTypes.string,
  description: PropTypes.string,
  app: types.app,
  path: PropTypes.string,
  style: types.style,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseButton)