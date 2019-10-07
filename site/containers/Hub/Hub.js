import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import styled from 'styled-components';
import actions from '../../actions';
import types from '../../utils/types';
import styles from './styles.css';
import Dispatch from '../../components/Dispatch/Dispatch';
import angler from '../../utils/angler';
import Section from '../../components/Section/Section';
import Block from '../../components/Block/Block';
import Link from '../../components/Link/Link';

// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';


const SideBtn = styled(Link)`
  width: 280px;
  height: 187px;
  background-size: cover;
  display: block;
  margin-bottom: 20px;
`

export class Hub extends Component {

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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '280px', background: 'transparent', marginRight: '20px', marginTop: '-35px' }}>
              <SideBtn style={{ backgroundImage: 'url(https://s3.amazonaws.com/el-files-wds/images/photos/when-to-arrive-wds-2019.png)'}} to="/when-to-arrive-in-portland-for-wds-2019" />
              <SideBtn style={{ backgroundImage: 'url(https://files.wds.fm/images/how-wds-works.png)'}} to="/wds-how-it-works" />
              <SideBtn style={{ backgroundImage: 'url(https://s3.amazonaws.com/el-files-wds/images/wds-portlandia.png)'}} to="/a-wds-guide-of-portlandia" />
            </div>
              <Block cols="6" background="transparent" styleName="contentShell">
                <h2 style={headcss} >The Dispatch</h2>
                <Block width="100%" background="white" type="padded">
                    <Dispatch {...this.state.dispatch} />
                </Block>
              </Block>
            </div>
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
