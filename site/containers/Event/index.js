import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Markdown from 'react-remarkable';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import Section from '../../components/Section/Section';
import Avatar from '../../components/Avatar/Avatar';
import Block from '../../components/Block/Block';
import Link from '../../components/Link/Link';
import actions from '../../actions';
import angler from '../../utils/angler';
import types from '../../utils/types';
import Image from '../../components/Image/Image';
import is from '../../utils/is';
import { Event as EventQuery } from '../../queries';
import Event from '../../models/Event';
import Button from '../../components/Button/Button';
import C from '../../constants';
import Content from './Content';
import Host from './Host';
import User from '../../models/User';
import api from '../../utils/api';

const Grid = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Side = styled.div`
  min-height: 666px;
  width: 340px;
  padding: 16px;
`;

const Btn = styled(Button)`
  background: ${({ primary }) => (primary !== undefined && primary ? C.color.orange : C.color.canvas)};
  color: ${({ primary }) => (primary !== undefined && primary ? '#fff' : C.color.orange)};
  width: 100%;
  padding: 19px 16px 16px;
  font-size: 20px;
  margin-bottom: 16px
`;

const Sub = styled.div`
  font-family: KarlaItalic;
  color: #908a86;
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 18px;
`;

export class EventComponent extends Component {
  constructor() {
    super();
    this.state = {
      claiming: false,
    };
    this.claimTimo = 0;
  }
  purchase = () => {
    const purchData = { event_id: this.props.data.event.event_id };
    this.props.act.setProduct({
      code: 'academy',
      product: 'WDS Academy',
      description: `Ticket for ${_.truncate(this.props.data.event.what, 130)}`,
      data: purchData,
      price: this.props.auth.me.attending17 === '1' ? 2900 : 5900,
      redirect: 'academy-purchased',
    });
    browserHistory.push('/checkout');
  };
  claim = () => {
    clearTimeout(this.claimTimo);
    if (this.state.claiming) {
      const me = _.assign({}, this.props.auth.me);
      const { event_id } = this.props.data.event;
      console.log('claim');
      api('post event/claim-academy', { event_id }).then(() => {
        me.rsvps = [...me.rsvps, event_id];
        console.log(me.rsvps);
        this.props.act.updateMe(me);
      });
    } else {
      this.setState({ claiming: true });
      this.claimTimo = setTimeout(() => {
        this.setState({ claiming: false });
      }, 2000);
    }
  };
  render() {
    const { data } = this.props;
    const E = new Event(data.event !== undefined ? data.event : {});
    const {
      type,
      start,
      end,
      event_id,
      num_rsvps,
      num_free,
      max,
      bios,
      free_max,
      what,
      address,
      who,
      place,
      descr,
      hosts,
    } = E;

    // LatLon for map with default set to PDX downtown
    let map = {};
    let { lat, lon } = E;
    lat = lat > 0 ? lat : '45.523062';
    lon = lon > 0 ? lon : '-122.676482';

    const Me = new User(this.props.auth.me);
    const headcss = {};

    // Variable states based on the user's relation
    // to this event
    let count = num_rsvps + num_free;
    count = count > 1 ? count : 2;
    let buttonText = 'Attend this Academy';
    let buttonClick = this.purchase;
    let buttonSubMsg =
      'Academies cost $29 for WDS Attendees but are available to those not attending WDS for $59. Academies are not transferable or refundable.';
    if (Me.isAttending(event_id)) {
      buttonText = "You'll be there!";
      buttonClick = () => {};
      buttonSubMsg = '';
    } else if (Me.hasUnclaimedAcademy()) {
      if (num_free < free_max) {
        buttonText = this.state.claiming
          ? 'Click Again to Confirm'
          : 'Claim Free Academy';
        buttonClick = this.claim;
        buttonSubMsg =
          'WDS Attendees who pre-ordered their ticket can claim one free academy. Claiming is not reversable.';
      } else {
        buttonSubMsg =
          'You have one free academy to claim, however this academy no longer has free spots available.';
      }
    }
    if (num_rsvps >= max) {
      buttonText = 'This Academy is Full';
      buttonClick = () => {};
    }
    return (
      <div>
        <Section
          headerSize="thin"
          headerClip="br:0%,-10%;"
          headerImage="hero/green.jpg"
          color="white"
          headerMap={{ lat: +lat, lon: +lon }}
          headerMapRef={map}
          width="1200px"
        >
          <Grid>
            <Content>
              <h2>{what}</h2>
              <div className="details">
                <div>{E.dateStr()}</div>
                <div className="sub">{place}</div>
                <div className="sub">{address}</div>
              </div>
              <div className="descr section">
                <Markdown>{descr}</Markdown>
              </div>
              <div className="section">
                <h3>{type ? "You'll Learn:" : 'An event for: '}</h3>
                <Markdown>{who}</Markdown>
              </div>
              <div className="section">
                <h3>{`Your Host${hosts.length > 1 ? 's' : ''}`}</h3>
                {hosts.map(h => {
                  return (
                    <Host>
                      <div className="name">
                        <Avatar user={h.user_id} />
                        <span>{`${h.first_name} ${h.last_name}`}</span>
                      </div>
                      <div className="about">
                        <Markdown>{bios[h.user_id]}</Markdown>
                      </div>
                    </Host>
                  );
                })}
              </div>
            </Content>
            <Side>
              <Btn onClick={buttonClick} primary>{buttonText}</Btn>
              {buttonSubMsg.length ? <Sub>{buttonSubMsg}</Sub> : ''}
              <Btn>{count} WDSers Attending</Btn>
            </Side>
          </Grid>
        </Section>
      </div>
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

Event.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
  auth: types.auth,
};

export default graphql(EventQuery, {
  options: props => {
    return {
      variables: {
        slug: props.params.id,
      },
    };
  },
})(connect(mapStateToProps, mapDispatchToProps)(EventComponent));
