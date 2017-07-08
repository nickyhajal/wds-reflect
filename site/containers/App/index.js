import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import 'react-select/dist/react-select.css';
import $ from 'jquery';
import _ from 'lodash';
import { Link, browserHistory } from 'react-router';
import Modals from '../../components/Modals/Modals';
import actions from '../../actions';
import vars from '../../core/vars';
import preloader from '../../utils/preloader';
import types from '../../utils/types';
import Header from './Header';
import auth from '../../utils/auth';
import styles from './styles.css';
// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

export class App extends Component {
  static scrollTo() {}
  constructor(props) {
    super(props);
    this.preloads = [];
    this.loadedProduct = false;
    autoBind(Object.getPrototypeOf(this));
  }
  componentDidMount() {
    $(window).resize(() => {
      this.forceUpdate();
    });
    if (vars.preloads !== undefined && vars.preloads.length) {
      vars.preloads.forEach(v => {
        preloader(v);
      });
    }
    this.props.act.syncAssets();
    auth.getMe();
    this.props.act.startListeningToSettings();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      if (
        nextProps.location.pathname.indexOf('welcome') > -1 &&
        this.props.location.pathname.indexOf('claim') > -1
      ) {
        $('body').addClass('start-transition transition-orange-to-blue');
      }
      if (
        nextProps.location.pathname.indexOf('claim') > -1 &&
        this.props.location.pathname.indexOf('be-there') > -1
      ) {
        $('body').addClass('start-transition transition-green-to-orange');
      }
      // this.props.act.openMenu(false);
      $('html,body').animate({ scrollTop: 0 }, 0);
    }
    if (
      !this.loadedProduct &&
      this.props.auth !== undefined &&
      this.props.auth.me &&
      window.localStorage.getItem('productAction')
    ) {
      this.loadedProduct = true;
      const action = JSON.parse(window.localStorage.getItem('productAction'));
      this.props.act.setProduct(action);
    }
  }
  menuClick() {
    this.props.act.openMenu(!this.props.app.navOpen);
  }
  ticketClick() {
    if (window.location.pathname.indexOf('join-us') > -1) {
      // browserHistory.replace('/be-there');
      browserHistory.replace('/join-us');
    } else {
      browserHistory.replace('/join-us');
      // this.props.act.openModal('joinUs');
    }
  }
  pathHas(c) {
    const checks = _.isArray(c) ? c : [c];
    let found = false;
    checks.forEach(v => {
      if (this.props.location.pathname.indexOf(v) === 0) {
        found = true;
      }
    });
    return found;
  }
  subNav() {
    const uri = window.location.pathname.substr(1);
    let nav = false;
    const subNavs = {
      hub: [
        'guide',
        'communities',
        'your-schedule',
        'events',
        'your-profile',
        'settings',
      ],
      schedule: ['schedule', 'speakers'],
    };
    Object.keys(subNavs).forEach(parent => {
      if (uri === parent || subNavs[parent].indexOf(uri) > -1) {
        nav = parent;
      }
    });
    if (
      uri.includes('~') ||
      uri.includes('events/') ||
      uri.includes('community/') ||
      uri.includes('activity/') ||
      uri.includes('program/') ||
      uri.includes('meetup/') ||
      uri.includes('academy/') ||
      uri.includes('expedition/')
    ) {
      nav = 'hub';
    }
    if (uri.indexOf('speaker/') > -1) {
      // || uri.includes('academy/')) {
      nav = 'schedule';
    }
    if (nav) {
      nav = [nav].concat(subNavs[nav]);
    }
    return nav;
  }
  renderSiteMode() {
    console.log('SITE');
    const status = this.props.auth.me ? 'logged-in' : 'logged-out';
    const subNav = this.subNav();
    const className = `${status} ${subNav ? 'hasSubNav' : 'noSubNav'}`;
    return (
      <div className={className}>
        <Header
          scrollTo={this.scrollTo}
          ticketClick={this.ticketClick}
          onMenuClick={this.menuClick}
          navOpen={this.props.app.navOpen}
          auth={this.props.auth}
          subNav={subNav}
        />
        <main>
          {this.props.children}
        </main>
        <div styleName="footer" className="footer">
          <div styleName="links">
            <Link to="/faq">FAQ</Link>
            <Link to="/story">Our Story</Link>
          </div>
          <div styleName="sub">© World Domination Summit 2011-2017</div>
        </div>
        <Modals />
      </div>
    );
  }
  renderFocusMode() {
    console.log('FOCUS');
    return (
      <main>
        {this.props.children}
        <Modals />
      </main>
    );
  }
  renderSocialMode() {
    console.log('SOCIAL');
    return (
      <main>
        {this.props.children}
        <Modals />
      </main>
    );
  }
  render() {
    const focus = ['/claim', '/welcome', '/be-there'];
    if (this.pathHas(focus)) {
      return this.renderFocusMode();
    }
    return this.renderSiteMode();
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

App.propTypes = {
  children: types.children,
  app: types.app,
  auth: types.auth,
  location: types.location,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(App, styles)
);
