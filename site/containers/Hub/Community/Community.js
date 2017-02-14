import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import s from 'underscore.string';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import actions from '../../../actions';
import types from '../../../utils/types';
import styles from './Community.css';
import Link from '../../../components/Link/Link';
import angler from '../../../utils/angler';
import Dispatch from '../../../components/Dispatch/Dispatch';
import Section from '../../../components/Section/Section';
import Block from '../../../components/Block/Block';
// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

export class Community extends Component {

  constructor(props) {
    super(props);
    this.preloads = [];
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      dispatch: {},
      interest: false,
    };
  }
  componentWillMount() {
    this.loadInterest();
  }
  loadInterest() {
    const assets = this.props.app.assets;
    if (assets.interests !== undefined) {
      let interest = false;
      let dispatch = {};
      assets.interests.forEach((int) => {
        if (s.slugify(int.interest) === this.props.routeParams.id) {
          interest = int;
          dispatch = {
            channelType: 'interest',
            channelId: int.interest_id,
            placeholder: `Share a message with the WDS ${interest.interest} Community`,
          };
        }
      });
      this.setState({
        interest,
        dispatch,
      });
    }
  }
  render() {
    const headcss = {};
    const clip = angler('tr:0,8%');
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    return (
      <div styleName="shell">
        <Section headerSize="thin" headerClip="br:0%,-10%;" headerImage="hero/green.jpg" color="canvas">
          <Block cols="8" background="transparent" styleName="contentShell">
            <h2 style={headcss} >WDS {this.state.interest.interest} Community</h2>
            <Block width="100%" background="white" type="padded">
              <Dispatch {...this.state.dispatch} />
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

Community.propTypes = {
  children: types.children,
  auth: types.auth,
  app: types.app,
  location: types.location,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Community, styles));
