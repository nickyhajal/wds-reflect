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
import EventList from '../../components/EventList';
import EventUtil from '../../utils/EventUtil';

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

export class EventListing extends Component {
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
    const pathtype = window.location.pathname.replace('/events/', '');
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    const type = EventUtil.byPlural[pathtype];
    const id = type.id;
    return (
      <div>
        <Section
          headerClip="br:0%,-10%;"
          headerImage={`photos/tile_${type.plural.toLowerCase()}.jpg`}
          headerPosition={type.headerPosition}
          color="canvas"
        >
          <Shell cols="8" background="transparent">
            <h2 style={headcss}>{`WDS ${type.plural}`}</h2>
            <EventList year="19" type={id} title={false} format="contained" />
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

EventListing.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListing);
