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
import UpdateCard from '../UpdateCard/UpdateCard';

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

export class Hub extends Component {
  static scrollTo() {}
  static subNav = [
    ['The Hub', 'hub'],
    ['Communities', 'communities'],
    ['Updates', 'updates'],
    // ['Your Schedule', 'your-schedule'],
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
    return (
      <div>
        <Section
          headerSize="thin"
          headerClip="br:0%,-10%;"
          headerImage="hero/green.jpg"
          color="canvas"
        >
          <Shell cols="8" background="transparent">
            <h2>Billing Settings</h2>
            <Block width="100%" background="white">
              <Block width="580px" background="white" padding="50px 0">
              <UpdateCard />
              </Block>
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
