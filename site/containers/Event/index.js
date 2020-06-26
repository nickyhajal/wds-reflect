import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Markdown from 'react-remarkable';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import s from 'underscore.string';
import momentTimezone from 'moment-timezone';
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
import EventUtil from '../../utils/EventUtil';
import TimePicker, { getTimezoneProps } from '../../components/TimePicker';

const Grid = styled.div`
  display: flex;
  margin-top: 40px;

  @media (max-device-width: 800px) and (orientation: portrait) {
    flex-direction: column;
  }
`;
const Photo = styled.img`
  width: 110%;
  margin-bottom: 60px;
`;
const Side = styled.div`
  min-height: 666px;
  width: 340px;
  padding: 16px;
  @media (max-device-width: 800px) and (orientation: portrait) {
    order: -1;
    min-height: auto;
    width: 100%;
  }
`;

const Btn = styled(Button)`
  background: ${({ primary }) =>
    primary !== undefined && primary ? C.color.orange : C.color.canvas};
  color: ${({ primary }) =>
    primary !== undefined && primary ? '#fff' : C.color.orange};
  width: 100%;
  padding: 19px 16px 16px;
  font-size: 20px;
  margin-bottom: 16px;
`;

const Sub = styled.div`
  font-family: KarlaItalic;
  color: #908a86;
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 18px;
`;

const TimeShell = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
margin-bottom: 4rem;
label {
  font-size: 20px;
  position: relative;
  top: 1px;
}
> div {
  width: 70%;
}

`;

export class EventComponent extends Component {
  constructor() {
    super();
    this.state = {
      claiming: false,
      offset: 0,
      label: 'Pacific Time',
      timezone: momentTimezone.tz.guess(),
    };
    this.claimTimo = 0;
  }
  purchase = () => {
    const { type } = this.props.data.event;
    const purchData = { event_id: this.props.data.event.event_id };
    const params = {
      description: `Ticket for ${_.truncate(this.props.data.event.what, 130)}`,
      data: purchData,
    };
    if (type === 'academy') {
      params.code = 'academy';
      params.product = 'WDS Academy';
      params.price =
        this.props.auth.me !== undefined &&
        this.props.auth.me.attending19 !== undefined &&
        !_.isNull(this.props.auth.me.attending19) &&
        this.props.auth.me.attending19.toString() === '1'
          ? 2900
          : 5900;
      params.redirect = 'academy-purchased';
    } else {
      params.code = 'event';
      params.product = `WDS ${EventUtil.byId[type].single}`;
      params.price = this.props.data.event.price;
      params.redirect = 'event-purchased';
    }
    this.props.act.setProduct(params);
    browserHistory.push('/checkout');
  };
  claim = () => {
    clearTimeout(this.claimTimo);
    if (this.state.claiming) {
      const me = _.assign({}, this.props.auth.me);
      const { event_id } = this.props.data.event;
      api('post event/claim-academy', { event_id }).then(() => {
        me.rsvps = [...me.rsvps, event_id];
        me.academy = event_id;
        setTimeout(() => {
          this.props.data.refetch();
        }, 30);
        this.props.act.updateMe(me);
        this.setState({ claiming: false });
      });
    } else {
      this.setState({ claiming: true });
      this.claimTimo = setTimeout(() => {
        this.setState({ claiming: false });
      }, 2000);
    }
  };
  rsvp = () => {
    clearTimeout(this.claimTimo);
    if (this.state.claiming) {
      const me = _.assign({}, this.props.auth.me);
      const { event_id } = this.props.data.event;
      this.setState({ claiming: true });
      api('post event/rsvp', { event_id }).then(rsp => {
        switch (rsp.data.action) {
          case 'cancel': {
            me.rsvps = _.without(me.rsvps, event_id);
            break;
          }
          default: {
            if (+event_id === 1245) {
              browserHistory.replace('/picnic-preorder');
            }
            me.rsvps = [...me.rsvps, event_id];
            break;
          }
        }
        setTimeout(() => {
          this.props.data.refetch();
        }, 30);
        this.props.act.updateMe(me);
        this.setState({ claiming: false });
      });
    } else {
      this.setState({ claiming: true });
      this.claimTimo = setTimeout(() => {
        this.setState({ claiming: false });
      }, 2000);
    }
  };
  render() {
    const eventType = location.pathname.split('/')[1];
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
      photo,
      photo_dims,
      descr,
      price,
    } = E;
    let { hosts } = E;
    if (type === 'program')
      hosts = [{ first_name: 'WDS', last_name: 'Team', user_id: '10124' }];

    // LatLon for map with default set to PDX downtown
    let map = {};
    let { lat, lon } = E;
      let mapCenter = {
        lat: '45.523062',
        lon: '-122.676482',
      };
    if (
      lat !== undefined &&
      lat &&
      lat.length > 0 &&
      (lon !== undefined && lon && lon.length > 0)
    ) {
      mapCenter = { lat, lon };
    }
    // console.log(lat, lon);
    // lat = lat !== '' ? lat : '45.523062';
    // lon = lon !== '' ? lon : '-122.676482';

    const Me = new User(this.props.auth.me);
    const headcss = {};

    // Variable states based on the user's relation
    // to this event
    let count = num_rsvps;
    // count = count > 1 ? count : 2;
    const etype = EventUtil.byId[eventType];
    let action =
      (data.event !== undefined && E.isPurchase()) ||
      (E.price !== undefined && +E.price > 1)
        ? 'Attend'
        : 'RSVP to';
    let buttonText = `${action} this ${etype.single}`;
    let buttonClick = this.purchase;
    let buttonSubMsg = '';
    switch (eventType) {
      case 'academy': {
        buttonSubMsg =
          'Academies cost $29 for WDS Attendees and are available to those not attending WDS for $59. Academies are not transferable or refundable.';
        break;
      }
      case 'registration': {
        buttonSubMsg =
          "By RSVPing to a registration time, we'll be able to make the process smoother for everyone!";
        break;
      }
      case 'meetup':
      case 'activity':
        buttonSubMsg = (E.price !== undefined && +E.price > 1)
        ? `This a paid ${etype.single.toLowerCase()} that costs $${E.price/100} to participate in. Click above to purchase.`
        : `This ${etype.single} is free but please only RSVP if you're sure you'll attend.`;
        break;
      default:
        buttonSubMsg = '';
        break;
    }
    if (Me.isAttending(event_id)) {
      buttonText = "unRSVP";
      buttonSubMsg =
        "You'll be there! Click above to unRSVP if you can't make it.";
      buttonClick = () => {};
      if (E.isCancelable()) {
        buttonClick = this.rsvp;
      }
    } else if (eventType === 'registration') {
      buttonText = 'RSVP to this Session';
      buttonClick = this.rsvp;
    } else if (eventType === 'academy' && Me.hasUnclaimedAcademy()) {
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
    } else if (!E.isPurchase()) {
      buttonClick = this.rsvp;
    }
    if (!Me.isAttending(event_id) && max > 0 && num_rsvps >= max) {
      buttonText = `This ${etype.single} is Full`;
      buttonClick = () => {};
    }
    if (this.state.claiming) {
      buttonText = 'Click Again to Confirm';
    }
    let hasSidebar =
      ((this.props.auth.me !== undefined && this.props.auth.me) ||
        type === 'academy') &&
      type !== 'program';
    if (hasSidebar) {
      hasSidebar = ![1593, 1594].includes(+event_id)
    }
    return (
      <div>
        <Section
          headerSize="thin"
          headerClip="br:0%,-10%;"
          headerImage="hero/green.jpg"
          color="white"
          // headerMap={mapCenter}
          // headerMapRef={map}
          width={hasSidebar ? '1096px' : '866px'}
        >
          <Grid>
            <Content>
              <h2>
                {what}
              </h2>
              <div className="details">
                <div>
                  {E.dateStr(this.state.offset, this.state.label)}
                  <TimeShell>
                    <label>Change Timezone</label>
                    <TimePicker
                      guess // this will fill the input with user's timezone guessed by moment. A "value" prop has always bigger priority than guessed TZ
                      onChange={(val) => {
                        const timezoneProps = getTimezoneProps(val, +new Date())
                        this.setState({offset: timezoneProps.offset, label: timezoneProps.abbr })
                      }} 
                    />
                  </TimeShell>
                </div>
                <div className="sub">
                  {[1593, 1594].includes(+event_id) ? place :
                  'Zoom meeting links will be emailed once you RSVP for a meetup'}
                </div>
                <div className="sub">
                  {address}
                </div>
              </div>
              {photo && <Photo src={photo} /> }
              <div className="descr section">
                <Markdown>
                  {descr}
                </Markdown>
              </div>
              <div className="section">
                <h3>
                  {type === 'academy' ? "You'll Learn:" : `${etype.noun} for: `}
                </h3>
                <Markdown>
                  {s.capitalize(who)}
                </Markdown>
              </div>
              <div className="section">
                <h3>{`Your Host${hosts.length > 1 ? 's' : ''}`}</h3>
                {hosts.map(h => {
                  return (
                    <a href={`/~${h.user_name}`} target="_blank" style={{ textDecoration: 'none' }}>
                      <Host>
                        <div className="name">
                          <Avatar user={h.user_id} />
                          <span>{`${h.first_name} ${h.last_name}`}</span>
                        </div>
                        {type === 'academy'
                          ? <div className="about">
                              <Markdown>
                                {bios[h.user_id]}
                              </Markdown>
                            </div>
                          : ''}
                      </Host>
                    </a>
                  );
                })}
              </div>
            </Content>
            {hasSidebar
              ? <Side>
                  <Btn onClick={buttonClick} primary>
                    {buttonText}
                  </Btn>
                  {buttonSubMsg.length
                    ? <Sub>
                        {buttonSubMsg}
                      </Sub>
                    : ''}
                  <Btn>
                    {count} WDSers Attending
                  </Btn>
                </Side>
              : ''}
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
