import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import $ from 'jquery';
import { Link } from 'react-router';
import Modals from '../../components/Modals/Modals';
import actions from '../../actions';
import vars from '../../core/vars';
import preloader from '../../utils/preloader';


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
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.act.openMenu(false);
      $('html,body').animate({ scrollTop:0 },0);
    }
  }
  menuClick() {
    this.props.act.openMenu(!this.props.app.navOpen);
  }
  ticketClick() {
    this.props.act.openModal('joinUs');
  }
  render() {
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
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  auth: PropTypes.shape({
    me: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]).isRequired,
  }).isRequired,
  app: PropTypes.shape({
    navOpen: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(App, styles));
