import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import 'react-select/dist/react-select.css';
import $ from 'jquery';
import { Link } from 'react-router';
import Modals from '../../components/Modals/Modals';
import actions from '../../actions';
import vars from '../../core/vars';
import preloader from '../../utils/preloader';
import types from '../../utils/types';


const preloads = [];
// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';
import Header from './Header';
import styles from './styles.css';

export class App extends Component {

  static scrollTo() {
  }
  constructor(props) {
    super(props);
    this.preloads = [];
    autoBind(Object.getPrototypeOf(this));
  }
  componentDidMount() {
    $(window).resize(() => {
      this.forceUpdate();
    });
    if (vars.preloads !== undefined && vars.preloads.length) {
      vars.preloads.forEach((v) => {
        preloader(v);
      });
    }
    this.props.act.syncAssets();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      if (nextProps.location.pathname.indexOf('welcome') > -1 && this.props.location.pathname.indexOf('claim') > -1) {
        $('body').addClass('start-transition transition-orange-to-blue');
      }
      this.props.act.openMenu(false);
      $('html,body').animate({ scrollTop:0 }, 0);
    }
  }
  menuClick() {
    this.props.act.openMenu(!this.props.app.navOpen);
  }
  ticketClick() {
    this.props.act.openModal('joinUs');
  }
  renderSiteMode() {
    return (
      <div>
        <Header
          scrollTo={this.scrollTo}
          ticketClick={this.ticketClick}
          onMenuClick={this.menuClick}
          navOpen={this.props.app.navOpen}
        />
        <main>
          { this.props.children }
        </main>
        <div styleName="footer">
          <div styleName="links">
            <Link to="/faq">FAQ</Link>
            <Link to="/story">Our Story</Link>
          </div>
          <div styleName="sub">
            © World Domination Summit 2011-2017
          </div>
        </div>
        <Modals />
      </div>
    );
  }
  renderFocusMode() {
    return (
      <main>
        { this.props.children }
        <Modals />
      </main>
    );
  }
  renderSocialMode() {
    return (
      <main>
        { this.props.children }
        <Modals />
      </main>
    );
  }
  render() {
    const path = this.props.location.pathname;
    if (path.indexOf('/claim') > -1 || path.indexOf('/welcome') > -1) {
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
  auth: types.auth,
  app: types.app,
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(App, styles));
