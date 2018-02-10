import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import Section from '../../components/Section/Section';
import Block from '../../components/Block/Block';
import actions from '../../actions';
import types from '../../utils/types';
import { Event as EventQuery } from '../../queries';
import BookingDetails from '../../components/BookingDetails';

export class CompleteBooking extends Component {
  constructor() {
    super();
    this.state = {
      claiming: false,
    };
    this.claimTimo = 0;
  }

  render() {
    return (
      <div>
        <Section
          color="blue"
          css={{ marginBottom: '-2px' }}
        >
          <Block width="768px" bleed={true} type="padded" background="gray" textAlign="left" margin="60px 0 80px" clip="tr:0,1%;">
            <Block width="100%" margin="40px 0 0 0" textAlign="center">## Payment Complete! Now Complete Your Booking:</Block>
            <p>We just need a few details to complete your booking:</p>
            <BookingDetails />
          </Block>
        </Section>
      </div>
    );
  }
}

CompleteBooking.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
  auth: types.auth,
};

export default CompleteBooking;
