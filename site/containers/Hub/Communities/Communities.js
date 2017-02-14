import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import s from 'underscore.string';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import actions from '../../../actions';
import types from '../../../utils/types';
import styles from './Communities.css';
import Link from '../../../components/Link/Link';
import angler from '../../../utils/angler';
import Section from '../../../components/Section/Section';
import Block from '../../../components/Block/Block';
// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

export class Communities extends Component {

  constructor(props) {
    super(props);
    this.preloads = [];
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      dispatch: {},
    };
  }
  communityList() {
    const assets = this.props.app.assets;
    const mine = [];
    const others = [];
    if (assets.interests !== undefined) {
      const ints = assets.interests;
      const me = this.props.auth.me;
      const myInts = me.interests !== undefined ? me.interests : [];
      ints.forEach((int) => {
        const btn = this.renderCommunityButton(int);
        if (myInts.indexOf(int.interest_id) > -1) {
          mine.push(btn);
        } else {
          others.push(btn);
        }
      });
    }
    return (
      <div>
        <h3>Your Communities</h3>
        {mine}
        <div className="clear" />
        <h3 style={{ marginTop: '40px' }}>Other Communities</h3>
        {others}
      </div>
    );
  }
  renderCommunityButton(int) {
    const slug = s.slugify(int.interest);
    return (
      <Link styleName="btn" to={`/community/${slug}`}>
        {int.interest}
        <span>{`${int.members} members`}</span>
      </Link>
    );
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
            <h2 style={headcss} >Communities</h2>
            <Block width="100%" background="white" type="padded">
              {this.communityList()}
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

Communities.propTypes = {
  children: types.children,
  auth: types.auth,
  app: types.app,
  location: types.location,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Communities, styles));
