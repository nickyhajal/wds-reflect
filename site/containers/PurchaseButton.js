import React, {PropTypes } from 'react';
import { connect } from 'react-redux';
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
    return (
      <Button onClick={this.purchase} style={this.props.style}>{this.props.children}</Button>
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
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseButton)