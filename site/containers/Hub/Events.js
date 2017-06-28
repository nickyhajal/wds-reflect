import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Link } from 'react-router';
import actions from '../../actions';
import types from '../../utils/types';
import angler from '../../utils/angler';
import Section from '../../components/Section/Section';
import Block from '../../components/Block/Block';
import C from '../../constants';

// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

const Shell = styled(Block)`
  margin-top: -220px;
  background: transparent;

  h2 {
    background: ${C.color.blue};
    color: ${C.color.white};
    padding: 26px 40px 19px;
    margin-bottom: 0;
    font-size: 34px;
    text-align: left;
  }
  h3 {
    font-size: 24px;
    font-family: Vitesse;
    line-height: 28px;
    font-weight: normal;
    margin-bottom: 32px;
    color: ${C.color.blue};
   }
}
`;

const EventButton = styled(Link)`
  width: 100%;
  background-size: cover;
  height: 350px;
  margin-right: 1px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: block;

  &:hover:before {
    opacity: 0.85;
  }

  &:before {
    transition: all 0.2s;
    opacity: 0.8;
    background: linear-gradient(10deg, rgba(0, 0, 0, 0) -20%,rgba(0, 0, 0, 1) 1%,rgba(0,0,0,0.09) 70%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  h3 {
    font-family: VitesseBold;
    color: white;
    text-shadow: 1px 1px 10px rgb(0, 0, 0);
    position: absolute;
    left: 60px;
    font-size: 52px;
    bottom: 90px;
    opacity: 0.9;
  }
  h4 {
    font-family: KarlaItalic;
    font-size: 20px;
    position: absolute;
    width: 320px;
    left: 60px;
    top: 246px;
    line-height: 135%;
    opacity: 0.9;
    color: white;
    text-shadow: 1px 1px 10px rgb(0, 0, 0);
    text-align: left;
  }
`;

export class Hub extends Component {
  static scrollTo() {}
  static subNav = [
    ['The Hub', 'hub'],
    ['Communities', 'communities'],
    ['Updates', 'updates'],
    ['Your Schedule', 'your-schedule'],
    ['Events', 'events'],
  ];
  constructor(props) {
    super(props);
    this.preloads = [];
    this.state = {
      dispatch: {},
    };
  }
  render() {
    const headcss = {};
    const clip = angler('tr:0,18%');
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    return (
      <div>
        <Section
          headerSize="thin"
          headerClip="br:0%,-10%;"
          headerImage="hero/green.jpg"
          color="canvas"
        >
          <Shell cols="8" background="transparent">
            <h2 style={headcss}>WDS Events</h2>
            <Block width="100%" background="white">
              <EventButton
                to="/events/meetups"
                style={{
                  backgroundImage:
                    'url(https://files.wds.fm/images/photos/tile_meetups.jpg)',
                }}
              >
                <h3>Meetups</h3>
                <h4>Informal hangouts and attendee-led gathering</h4>
              </EventButton>
              <EventButton
                to="/events/activities"
                style={{
                  backgroundImage:
                    'url(https://files.wds.fm/images/photos/tile_activities.jpg)',
                }}
              >
                <h3>Activities</h3>
                <h4>Special activities to share with your fellow attendees</h4>
              </EventButton>
              <EventButton
                to="/events/expeditions"
                style={{
                  backgroundImage:
                    'url(https://files.wds.fm/images/photos/tile_expedition.jpg)',
                }}
              >
                <h3>Expeditions</h3>
                <h4>Unique adventures crafter just for WDS</h4>
              </EventButton>
              <EventButton
                to="/events/academies"
                style={{
                  backgroundImage:
                    'url(https://files.wds.fm/images/photos/tile_academies.jpg)',
                }}
              >
                <h3>Academies</h3>
                <h4>
                  Half-day workshops taught by alumni speakers and other experts
                </h4>
              </EventButton>
            </Block>
          </Shell>
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

Hub.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hub);
