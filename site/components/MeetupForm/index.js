import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Select from 'react-select';
import Section from '../../components/Section/Section';
import Avatar from '../../components/Avatar/Avatar';
import Block from '../../components/Block/Block';
import Link from '../../components/Link/Link';
import actions from '../../actions';
import angler from '../../utils/angler';
import types from '../../utils/types';
import is from '../../utils/is';
import { Events as EventsQuery } from '../../queries';
import Event from '../../models/Event';
import Button from '../../components/Button/Button';
import C from '../../constants';
import User from '../../models/User';
import EventRow from './EventRow';
import EventHead from './EventHead';
import InterestPicker from '../InterestPicker/InterestPicker';
import api from '../../utils/api';
import scrollTo from '../../utils/scrollTo';
import join from '../../utils/join';

const Btn = styled(Button)`
  background: ${({ primary }) => (primary !== undefined && primary ? C.color.orange : C.color.canvas)};
  color: ${({ primary }) => (primary !== undefined && primary ? C.color.canvas : C.color.orange)};
  width: 100%;
  padding: 19px 16px 16px;
  font-size: 20px;
  margin-bottom: 16px;
`;
const Label = styled.label`
   color: ${C.color.blue};
   font-family: Vitesse;
   font-size: 16pt;
`;
const FormSection = styled.div`
  margin-bottom: 32px;
  clear: both;
`;
const FormBox = styled.div`
  float: left;
`;
const Inp = styled.input`
  width: 400px;
  font-size: 16px;
  padding: 16px;
`;
const Text = styled.textarea`
  background: #eeefe9;
  border: 0px none;
  font-family: karla;
  height: 120px;
  padding: 12px 10px 10px;
  font-size: 16px;
  width: 400px;
`;
const Sub = styled.label`
  color: rgb(118, 118, 118) ! important;
  font-size: 10pt ! important;
  width: 430px;
  margin-bottom: 12px;
  p {
    color: rgb(118, 118, 118) ! important;
    font-size: 10pt ! important;
    width: 530px;
    line-height: 140%;
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 16px;
    }
  }
`;
const Success = styled.div`
  padding: 40px;
  background: #b4bd49;
  margin-top: 40px;
  color: #fff;
  h3 {
    font-family: Vitesse;
  }
  h3, p {
    color: #fff;
  }
`;
const Errors = styled.div`
  margin-top: 32px;
  padding: 32px;
  background: #d23f35;
  p {
    color: #fff;
    font-family: KarlaItalic;
    font-size: 16px;
    line-height: 150%;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export class MeetupForm extends Component {
  constructor() {
    super();
    this.defaultState = {
      status: 'ready',
      format: 'discover',
      date: '11',
      hour: '12',
      minute: '00',
      pm: '12',
      end_date: '11',
      end_hour: '12',
      end_minute: '00',
      end_pm: '12',
      what: '',
      place: '',
      outline: '',
      who: '',
      max: '',
      address: '',
      descr: '',
      venue_note: '',
      missing: [],
    };
    this.params = {
      what: "it's name",
      place: 'a venue',
      venue_note: 'a venue note',
      descr: 'a description',
      who: "who it's for",
      address: "it's address",
      max: 'the max number of attendees',
      format: "it's format",
      date: 'a starting date',
      hour: 'a starting time',
      minute: 'a starting time',
      pm: 'a starting time',
      end_date: 'an ending date',
      end_hour: 'an ending time',
      end_minute: 'an ending time',
      end_pm: 'an ending time',
      interests: 'related interests',
      outline: 'an outline',
    };
    this.state = Object.assign({}, this.defaultState);
  }
  submit = async e => {
    e.stopPropagation();
    e.preventDefault();
    const valid = this.validate();
    if (valid) {
      const params = _.pick(this.state, Object.keys(this.params));
      params.interests = params.interests.join(',');
      this.setState({ status: 'loading' });
      const rsp = await api('post event', params);
      this.setState({ status: 'loaded' });
      setTimeout(() => {
        scrollTo('meetupProposalSuccess');
      }, 100);
    }
  };
  change = (e, id) => {
    let t = {};
    if (id !== undefined && typeof id === 'string') {
      t = e;
    } else {
      t = e.target;
      id = t.name;
    }
    if (this.state.end_date === '28' && id === 'end_hour' && +t.value > 8 && this.state.end_pm === '12') {
      t.value = '08';
    } else if (this.state.date === '28' && id === 'hour' && +t.value > 8 && this.state.pm === '12') {
      t.value = '08';
    }
    const state = {};
    state[id] = t.value;
    this.setState(state);
  };
  reset = () => {
    this.setState(this.defaultState);
    setTimeout(() => {
      scrollTo('meetupProposalForm');
    }, 100);
  };
  validate = () => {
    const optional = ['venue_note', 'place', 'interests', 'address'];
    const params = this.params;
    const req = _.without(Object.keys(params), ...optional);
    const missing = req.reduce((result, i) => {
      /* if (i === 'date' && this.state[i] === '11') {
        result.push(this.params[i])
      } */
      if (this.state[i] === undefined || this.state[i].toString().length < 1) {
        result.push(this.params[i]);
      }
      return result;
    }, []);
    this.setState({ missing });
    if (missing.length) {
      return false;
    }
    return true;
  };
  renderErrors = () => {
    const errors = [];
    const { missing } = this.state;
    if (missing.length) {
      errors.push(
        `Looks like your meetup is missing ${join(missing, ', ', ' & ')}`,
      );
    }
    if (errors.length) {
      return <Errors>{errors.map(err => <p>{err}</p>)}</Errors>;
    }
    return '';
  };
  renderForm() {
    let btnText = '';
    switch (this.state.status) {
      case 'ready':
        btnText = 'Submit Your Meetup Proposal!';
        break;
      case 'loading':
        btnText = 'Sending...';
        break;
      case 'loaded':
        btnText = 'Success!';
        break;
      default:
    }
    return (
      <form onSubmit={this.submit} id="meetupProposalForm">
        <FormSection>
          <Label>What's the name of your meetup?</Label>
          <Sub>Be clear, specific, and catchy</Sub>
          <Inp name="what" onChange={this.change} value={this.state.what} />
        </FormSection>
        <FormSection>
          <Label>What type of meetup will this be?</Label>
          <Sub>
            We use these general categories to help attendees find meetups they&apos;ll enjoy.
          </Sub>
          <div style={{ width: '400px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'format')}
              options={[
                // { value: 'service', label: 'Service (Contribute Together)' },
                // { value: 'discover', label: 'Discover (Class/Workshop)' },
                { value: 'network', label: 'Network (Hangout/Collaborate)' },
                {
                  value: 'experience',
                  label: 'Experience (Adventure/Activity)',
                },
              ]}
              name="format"
              clearable={false}
              searchable={false}
              value={this.state.format}
              className="onWhite"
            />
          </div>
        </FormSection>
        <FormSection>
          <Label>Your Meetup Description:</Label>
          <Sub>
            Let attendees know what to expect and why they should sign-up.
          </Sub>
          <Text name="descr" onChange={this.change} value={this.state.descr} />
        </FormSection>
        {/* <FormSection>
          <Label>Where will it be hosted? (venue/location name)</Label>
          <Sub>
            Your meetup is much more likely to be accepted if you have a venue planned in advance.
          </Sub>
          <Inp name="place" onChange={this.change} value={this.state.place} />
        </FormSection> */}
        {/* <FormSection>
          <Label>
            Venue Address (please enter the actual physical address)
          </Label>
          <Sub>
            Make sure this is an address that can be found using Google maps. If your meetup is on the move, this is the meeting point.
          </Sub>
          <Inp
            name="address"
            onChange={this.change}
            value={this.state.address}
          />
        </FormSection> */}
        {/* <FormSection>
          <Label>
            Any Special Notes About the Venue/Location
          </Label>
          <Sub>
            Anything attendees should know about where to find your meetup (i.e. the room behind the bar, at the umbrella man statue in Pioneer Square, etc.)
          </Sub>
          <Inp
            name="venue_note"
            onChange={this.change}
            value={this.state.venue_note}
          />
        </FormSection> */}
        <FormSection>
          <Label>
            What kind of person might enjoy this? Who&apos;s this for?
          </Label>
          <Sub>
            This is a meetup for...
          </Sub>
          <Inp name="who" onChange={this.change} value={this.state.who} />
        </FormSection>
        {/* <FormSection>
          <Label>
            What interests might be associated with your meetup?
          </Label>
          <Sub>
            We'll use this to suggest meetups to attendees with similar interests. (Please select at least 3)
          </Sub>
          <InterestPicker
            format="meetupInterests"
            name="interests"
            className="onWhite"
            onChange={interests => {
              this.setState({ interests });
            }}
          />
        </FormSection> */}
        <FormSection>
          <Label style={{ width: '330px' }}>
            When will your meetup start?
          </Label>
          <Sub>
            Please enter your start time in Pacific Time - <a href="https://www.worldtimebuddy.com/?pl=1&lid=5746545" target="_blank">Use this tool to translate times</a>
          </Sub>
          <FormBox style={{ width: '280px', marginRight: '16px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'date')}
              options={[
                { value: '27', label: 'Saturday, June 27th' },
                { value: '28', label: 'Sunday, June 28th' },
              ]}
              name="date"
              clearable={false}
              searchable={false}
              value={this.state.date}
              className="onWhite"
            />
          </FormBox>
          <FormBox style={{ width: '120px', marginRight: '4px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'hour')}
              options={[
                { value: '01', label: '01' },
                { value: '02', label: '02' },
                { value: '03', label: '03' },
                { value: '04', label: '04' },
                { value: '05', label: '05' },
                { value: '06', label: '06' },
                { value: '07', label: '07' },
                { value: '08', label: '08' },
                { value: '09', label: '09' },
                { value: '10', label: '10' },
                { value: '11', label: '11' },
                { value: '12', label: '12' },
              ]}
              name="hour"
              clearable={false}
              searchable={false}
              value={this.state.hour}
              className="onWhite"
            />
          </FormBox>
          <FormBox style={{ width: '120px', marginRight: '4px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'minute')}
              options={[
                { value: '00', label: '00' },
                { value: '15', label: '15' },
                { value: '30', label: '30' },
                { value: '45', label: '45' },
              ]}
              name="minute"
              clearable={false}
              searchable={false}
              value={this.state.minute}
              className="onWhite"
            />
          </FormBox>
          <FormBox style={{ width: '120px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'pm')}
              options={[
                { value: '0', label: 'am' },
                { value: '12', label: 'pm' },
              ]}
              name="pm"
              clearable={false}
              searchable={false}
              value={this.state.pm}
              className="onWhite"
            />
          </FormBox>
          <div className="clear" />
        </FormSection>
        <FormSection>
          <Label>
            When will your meetup end?
          </Label>
          <Sub>
            Please enter your end time in Pacific Time - <a href="https://www.worldtimebuddy.com/?pl=1&lid=5746545" target="_blank">Use this tool to translate times</a>
          </Sub>
          <FormBox style={{ width: '280px', marginRight: '16px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'end_date')}
              options={[
                { value: '27', label: 'Saturday, June 27th' },
                { value: '28', label: 'Sunday, June 28th' },
              ]}
              name="end_date"
              clearable={false}
              searchable={false}
              value={this.state.end_date}
              className="onWhite"
            />
          </FormBox>
          <FormBox style={{ width: '120px', marginRight: '4px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'end_hour')}
              options={[
                { value: '01', label: '01' },
                { value: '02', label: '02' },
                { value: '03', label: '03' },
                { value: '04', label: '04' },
                { value: '05', label: '05' },
                { value: '06', label: '06' },
                { value: '07', label: '07' },
                { value: '08', label: '08' },
                { value: '09', label: '09' },
                { value: '10', label: '10' },
                { value: '11', label: '11' },
                { value: '12', label: '12' },
              ]}
              name="end_hour"
              clearable={false}
              searchable={false}
              value={this.state.end_hour}
              className="onWhite"
            />
          </FormBox>
          <FormBox style={{ width: '120px', marginRight: '4px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'end_minute')}
              options={[
                { value: '00', label: '00' },
                { value: '15', label: '15' },
                { value: '30', label: '30' },
                { value: '45', label: '45' },
              ]}
              name="end_minute"
              clearable={false}
              searchable={false}
              value={this.state.end_minute}
              className="onWhite"
            />
          </FormBox>
          <FormBox style={{ width: '120px' }}>
            <Select
              onChange={e => this.change.call(this, e, 'end_pm')}
              options={[
                { value: '0', label: 'am' },
                { value: '12', label: 'pm' },
              ]}
              name="end_pm"
              clearable={false}
              searchable={false}
              value={this.state.end_pm}
              className="onWhite"
            />
          </FormBox>
          <div className="clear" />
        </FormSection>
        <FormSection>
          <Label>
            How many people can attend? (Max: 50)
          </Label>
          <Sub>
            We'll close your event after it has this many RSVPs
          </Sub>
          <Inp
            type="number"
            name="max"
            min="1"
            max="50"
            style={{ width: '90px' }}
            onChange={this.change}
            value={this.state.max}
          />
        </FormSection>
        <FormSection>
          <Label>
            Provide a brief outline of the agenda for this event:
          </Label>
          <Sub>
            <p>
              This is for review purposes only and will not be displayed publicly.
            </p>
            <p>
              Please include the names and affiliations of any presenters, the general points to be discussed or questions to be asked, and allot an estimated time for each activity.
            </p>
            <p>
              Refer to the
              {' '}
              <a
                href="https://el-files-wds.s3.amazonaws.com/docs/WDS-Virtual-Meetup-Guide-2020.pdf"
                target="_blank"
              >
                WDS Meetup Guidelines
              </a>
              {' '}
              to ensure it’s as awesome as possible.
            </p>
            <Text
              name="outline"
              onChange={this.change}
              value={this.state.outline}
            />
          </Sub>
        </FormSection>
        <Button>{btnText}</Button>
        {this.renderErrors()}
      </form>
    );
  }
  renderSuccess() {
    return (
      <Success id="meetupProposalSuccess">
        <h3>Success!</h3>
        <p>
          Your meetup was submitted! You&apos;ll receive a response back from the WDS Team soon.
        </p>
        <p>Thanks for helping make WDS an amazing experience!</p>
        <Button onClick={this.reset}>Submit another meetup</Button>
      </Success>
    );
  }
  render() {
    return this.state.status === 'loaded'
      ? this.renderSuccess()
      : this.renderForm();
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

MeetupForm.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
  auth: types.auth,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetupForm);
