import React from 'react';
import PurchaseButton from '../containers/PurchaseButton';
import auth from '../utils/auth';

const ConnectPurchaseButton = ({children, style}) => (
  <PurchaseButton
    code="connect"
    product="WDS 2018 Connect"
    price="17900"
    fee="1000"
    allowedQuantity={3}
    redirect="assign"
    description=""
    to="be-there"
    style={style}
    fitToText
  >
    {children}
  </PurchaseButton>
);

export default ConnectPurchaseButton;
