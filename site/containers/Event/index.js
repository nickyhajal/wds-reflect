import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Markdown from 'react-remarkable';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import moment from 'moment';
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
  color: ${({ primary }) => (primary !== undefined && primary ? C.color.canvas : C.color.orange) };
  width: 100%;
  padding: 19px 16px 16px;
  font-size: 20px;
  margin-bottom: 16px
`;

export class EventComponent extends Component {
  render() {
    const { data } = this.props;
    const E = new Event(data.event !== undefined ? data.event : {});
    const {
      type,
      start,
      end,
      num_rsvps,
      num_free,
      max,
      bios,
      free_max,
      lat,
      lon,
      what,
      address,
      who,
      place,
      descr,
      hosts,
    } = E;
    const headcss = {};
    const clip = angler('tr:0,18%');
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    let map = {};
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
                <div>{`${moment(start).format('MMMM Do YYYY [from] h:mm a')} until ${moment(end).format('h:mm a')}`}</div>
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
                  return (<Host>
                    <div className="name">
                      <Avatar user={h.user_id} />
                      <span>{`${h.first_name} ${h.last_name}`}</span>
                    </div>
                    <div className="about">
                      <Markdown>{bios[h.user_id]}</Markdown>
                    </div>
                  </Host>
                )})}
              </div>
            </Content>
            <Side>
              <Btn primary>Attend this Academy</Btn>
              <Btn>{num_rsvps + num_free} WDSers Attending</Btn>
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
};

export default graphql(EventQuery, {
  options: props => {
    return {
      variables: {
        event_id: props.params.id,
      },
    };
  },
})(connect(mapStateToProps, mapDispatchToProps)(EventComponent));
