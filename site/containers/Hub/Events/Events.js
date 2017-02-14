import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import actions from '../../../actions';
import types from '../../../utils/types';
import styles from './Events.css';
import angler from '../../../utils/angler';
import Section from '../../../components/Section/Section';
import Block from '../../../components/Block/Block';
// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

export class Hub extends Component {

  static scrollTo() {
  }
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
    autoBind(Object.getPrototypeOf(this));
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
      <div styleName="shell">
        <Section headerSize="thin" headerClip="br:0%,-10%;" headerImage="hero/green.jpg" color="canvas">
          <Block cols="8" background="transparent" styleName="contentShell">
            <h2 style={headcss} >WDS Event Listing</h2>
            <Block width="100%" background="white" type="padded">
              <Block cols="4">
                <h3>Check back here for a complete listing of all the events during WDS!</h3>
                <p className="bigger">
                  In addition to the main-stage experience, WDS is jam-packed with academies,
                  spark sessions, parties, attendee-hosted meetups (last year we had over 150)!
                </p>
                <p>
                  Once we get closer to July, you'll be able to see everything that's available
                  here and RSVP to the events you're interested in!
                </p>
              </Block>
            </Block>
          </Block>
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

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Hub, styles));
