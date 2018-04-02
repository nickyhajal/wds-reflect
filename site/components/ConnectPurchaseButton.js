import React from 'react';
import PurchaseButton from '../containers/PurchaseButton';

const ConnectPurchaseButton = ({children, style}) => (
  <PurchaseButton
    code="connect"
    product="WDS 2018 Connect"
    price="17900"
    fee="1000"
    redirect="welcome"
    description=""
    to="be-there"
    style={style}
    fitToText
  >
    {children}
  </PurchaseButton>
);

export default ConnectPurchaseButton;
