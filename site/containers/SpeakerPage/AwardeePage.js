import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Markdown from 'react-remarkable';
import CSSModules from 'react-css-modules';
import s from 'underscore.string';
import autoBind from 'react-autobind';
import _ from 'lodash';
import Section from '../../components/Section/Section';
import Avatar from '../../components/Avatar/Avatar';
import Block from '../../components/Block/Block';
import api from '../../utils/api';
import Link from '../../components/Link/Link';
import actions from '../../actions';
import angler from '../../utils/angler';
import types from '../../utils/types';
import Image from '../../components/Image/Image';
import styles from './styles.css';
import vars from '../../core/vars';
import is from '../../utils/is';
import Video from '../../components/Video/Video';


export class AwardeePage extends Component {

  static scrollTo() {
  }
  constructor(props) {
    super(props);
    this.preloads = [];
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      awardee: false,
    };
    this.awardee = false;
  }
  componentWillMount() {
    this.awardee = window.location.pathname.replace('/awardee/', '');
    this.loadUser();
  }
  componentDidUpdate(props) {
    this.loadUser();
  }
  componentDidMount() {
    this.loadUser();
  }
  loadUser() {
    if (!this.state.awardee) {
      const filtered = vars.awardees.filter(
        obj => s.slugify(obj.name) === this.props.routeParams.id
      );
      if (filtered[0] !== undefined) {
        this.setState({ awardee: filtered[0] });
      }
    }
  }
  render() {
    const {
      name,
      year,
      video,
      autocontent: content,
    } = this.state.awardee;
    let {
      quote,
      headerPhotos,
      headerPhoto,
      headerPosition,
      videoPlaceholder,
    } = this.state.awardee;
    console.log(this.state.awardee)
    headerPhotos = headerPhotos.split(',');
    if (headerPosition === undefined) {
      headerPosition = 'top';
    }
    if (headerPhoto === undefined && headerPhotos !== undefined) {
      headerPhoto = headerPhotos[0];
    }
    if (videoPlaceholder === undefined && headerPhotos !== undefined) { 
      videoPlaceholder = headerPhotos[1]; 
    }
    quote = quote.replace(/^["']/, '').replace(/["']$/, '');
    return (
      <div styleName="shell">
        <Section headerClip="br:0%,-10%;" headerImage={headerPhoto} color="white" headerPosition={headerPosition || 'top'}>
          <Block cols="8" background="transparent" margin="0 0 50px">
            <h2>{name}</h2>
            <h3>{year} Awardee</h3>
            {quote !== undefined && quote.length ? (<h4>{`"${quote}"`}</h4>) : ''}
          </Block>
          {video !== undefined && video.length ? (<Video placeholder={videoPlaceholder} url={video} cols="8" />) : ''}
          <Block cols="6" background="transparent" margin="50px 0 0">
            <Markdown>{content.replace('\n', '\n\n')}</Markdown>
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

AwardeePage.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,

};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(AwardeePage, styles));
