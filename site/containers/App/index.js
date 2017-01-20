import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import Modals from '../../components/Modals/Modals';


// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';
import Header from './Header';
import styles from './styles.css';

export class App extends Component {

  static scrollTo() {
  }
  static ticketClick() {
  }
  constructor(props) {
    super(props);
    autoBind(Object.getPrototypeOf(this));
  }
  render() {
    return (
      <div>
        <Header scrollTo={this.scrollTo} ticketClick={this.openCheckout} />
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

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
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
};

export default connect(mapStateToProps)(CSSModules(App, styles));
