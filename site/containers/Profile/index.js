import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import Markdown from 'react-remarkable';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import Section from '../../components/Section/Section';
import Avatar from '../../components/Avatar/Avatar';
import Block from '../../components/Block/Block';
import api from '../../utils/api';
import Link from '../../components/Link/Link';
import actions from '../../actions';
import _ from 'lodash';
import angler from '../../utils/angler';
import types from '../../utils/types';
import Image from '../../components/Image/Image';
import styles from './styles.css';
import is from '../../utils/is';
// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

const LocationMap = withGoogleMap(props => {
  if (props.center.lat === undefined) return (<div />);
  return (<GoogleMap
    defaultZoom={13}
    onMapLoad={props.onLoad}
    options={{ scrollwheel: false, draggable: false }}
    defaultCenter={{ lat: +props.center.lat, lng: +props.center.lon }}
  >
    <Marker
      position={{ lat: props.center.lat, lng: props.center.lon }}
    />
  </GoogleMap>);
});

export class Profile extends Component {

  static scrollTo() {
  }
  constructor(props) {
    super(props);
    this.preloads = [];
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      user: {
        first_name: '░░░░░░░░░',
        last_name: '░░░░░░░',
        user_name: '░░░░░░░',
        distanceStr: '░░░░░░░░░░ ░░░░░░░ ░░░░ ░░░░░░ ░░░░░ ░░░░ ░░░ ░░░░░░░ ░░░░░,░░',
      },
    };
    this.user = false;
    this.map = false;
  }
  componentWillMount() {
    this.user = window.location.pathname.replace('/~', '');
    this.loadUser();
  }
  componentDidMount() {
    this.user = window.location.pathname.replace('/~', '');
    this.loadUser();
  }
  componentDidUpdate() {
    const qnas = $('.qnas > div');
    const hs = [];
    qnas.each((i, $t) => {
      const mod = i % 2;
      const inx = i - mod;
      const h = Math.ceil($($t).outerHeight());
      if (hs[inx] === undefined) {
        hs[inx] = h;
      } else if (h > hs[inx]) {
        hs[inx] = h;
      }
    });
    qnas.each((i, $t) => {
      const mod = i % 2;
      const inx = i - mod;
      $($t).css('height', `${hs[inx]}px`);
    });
  }
  mapLoad(map) {
    this.map = map;
  }
  loadUser() {
    if (
        !this.state.user ||
        (
          this.state.user.user_name !== undefined &&
          this.state.user.user_name !== this.user
        )
      ) {
      this.doLoadUser();
    }
  }
  doLoadUser() {
    api('get user', { user_name: this.user })
    .then((rsp) => {
      const user = rsp.data.user;
      let units = 'miles';
      const distance = Math.ceil(user.distance);
      if (distance === 1) {
        units = 'mile';
      }
      user.distanceStr = `${user.first_name} is traveling ${distance} ${units} to WDS from ${user.location}.`;
      this.setState({ user: rsp.data.user });
    });
  }
  renderAnswers() {
    const assets = this.props.app.assets;
    const answers = this.state.user.answers;
    if (assets.questions !== undefined && answers !== undefined) {
      const qnas = [];
      const theAs = [];
      JSON.parse(this.state.user.answers).forEach((v) => {
        const a = v;
        const block = [16, 17];
        if (block.indexOf(+a.question_id) === -1) {
          a.wc = a.answer.split(' ').length;
          if (a.answer.indexOf('[\"') > -1) {
            a.answer = JSON.parse(a.answer).join(', ')
          }
          theAs.push(a);
        }
      });
      _.sortBy(theAs, 'wc').forEach((a) => {
        assets.questions.forEach((q) => {
          if (+q.question_id === +a.question_id && +q.question_id !== 20) {
            qnas.push(
              <div styleName="qna" key={`qna-${q.question_id}`}>
                <h4>{q.question}</h4>
                <Markdown>{a.answer}</Markdown>
              </div>
            );
          }
        });
      });
      return (
        <div className="qnas">
          <h3>A bit about {this.state.user.first_name}:</h3>
          {qnas}
        </div>
      );
    }
    return '';
  }
  renderConnect() {
    const { site, twitter, facebook, instagram } = this.state.user;
    const btns = [];
    if (site !== undefined && site && site.length) {
      btns.push(
        <Link key="btn-site" to={`http://${site}`}>{site}</Link>
      );
    }
    if (twitter !== undefined && twitter && twitter.length) {
      btns.push(
        <Link key="btn-twitter" to={`http://twitter.com/${twitter}`}>@{twitter}</Link>
      );
    }
    if (facebook !== undefined && facebook && facebook.length) {
      btns.push(
        <Link key="btn-fb" to={`http://facebook.com/${facebook}`}>fb/{facebook}</Link>
      );
    }
    if (instagram !== undefined && instagram && instagram.length) {
      btns.push(
        <Link key="btn-ig" to={`http://instagram.com/${instagram}`}>ig/{instagram}</Link>
      );
    }
    return (
      <div>{btns}</div>
    );
  }
  renderInterests() {
    const userInterests = this.state.user.interests;
    const ints = [];
    if (userInterests !== undefined && userInterests.length) {
      const interests = this.props.app.assets.interests;
      userInterests.forEach((u) => {
        interests.forEach((i) => {
          if (+u === +i.interest_id) {
            ints.push(
              <div key={`int-${u}`}>{i.interest}</div>
            );
          }
        });
      });
    }
    return (
      <div styleName="interests">
        <h3>{`${this.state.user.first_name} is interested in:`}</h3>
        {ints}
      </div>
    );
  }
  render() {
    const {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      distanceStr,
      lat, lon,
    } = this.state.user;
    const headcss = {};
    const clip = angler('tr:0,18%');
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    return (
      <div styleName="shell">
        <Section headerSize="thin" headerClip="br:0%,-10%;" headerImage="hero/green.jpg" color="canvas">
          <Block cols="8" background="transparent" styleName="profile">
            <h2 style={headcss}>{`${firstName} ${lastName}`}</h2>
            <Block width="100%" background="white" type="padded">
              <Avatar clip="tl:0,3%" user={userId} />
              <div styleName="map">
                <LocationMap
                  center={{ lat, lon }}
                  onLoad={this.mapLoad}
                  containerElement={
                    (is.phone() ?
                      <div style={{ height: '220px', width: '260px' }} /> :
                      <div style={{ height: '190px', width: '744px' }} />
                    )
                  }
                  mapElement={
                    (is.phone() ?
                      <div style={{ height: '220px', width: '260px' }} /> :
                      <div style={{ height: '190px', width: '744px' }} />
                    )
                  }
                />
              </div>
              <div styleName="content">
                <div styleName="connect">
                  {this.renderConnect()}
                </div>
                <div styleName="right">
                  <div styleName="location">
                    {distanceStr}
                  </div>
                  <Image width="100%" height="6px" src="underline-1.png" />
                  {this.renderInterests()}
                  <Image width="100%" height="6px" src="underline-1.png" margin="30px 0" />
                  {this.renderAnswers()}
                </div>
              </div>
              <div className="clear" />
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

Profile.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Profile, styles));
