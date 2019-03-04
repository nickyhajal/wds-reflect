import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import _s from 'underscore.string';
import Counter from '../../../components/Counter/Counter';
import TicketStub from '../../../components/TicketStub/TicketStub';
import styles from './Header.css';
import Navlink from '../Navlink/Navlink';
import is from '../../../utils/is';

const renderSubNav = (subNav, scrollTo, me) => {
  if (subNav && subNav !== 'False') {
    const links = [];
    subNav.forEach(nav => {
      let uri = nav;
      if (uri === 'your-profile') {
        uri = `~${me.user_name}`;
      }
      links.push(
        <Navlink to={`/${uri}`} onClick={scrollTo} key={`navto-${nav}`}>
          {_s.titleize(nav).replace('-', ' ')}
        </Navlink>
      );
    });
    return (
      <div styleName="subNav">
        {links}
      </div>
    );
  }
  return '';
};
const renderAlert = (subNav, scrollTo, me) => {
  if ((!subNav || subNav === 'False') && !me && 0) {
    return (
      <div styleName="subNav" className="alert">
        <span>Ticket sales to WDS 2019 end in </span>
        <Counter to="ticket-end" format="text" interval="1" />
      </div>
    );
  }
  return '';
};
const desktopHeader = (ticketClick, scrollTo, auth, subNav) =>
  <header styleName="header" className={subNav ? 'hasSubNav' : ''}>
    <div styleName="row">
      <Link styleName="logo" to="/" alt="WDS Home" />
      <nav styleName="nav">
        <Navlink
          to="/story"
          subNav={subNav}
          onClick={scrollTo}
          styleName="link"
        >
          Story
        </Navlink>
        <Navlink
          to="/schedule"
          subNav={subNav}
          onClick={scrollTo}
          styleName="link"
        >
          Schedule
        </Navlink>
        <Navlink
          to="/location"
          subNav={subNav}
          onClick={scrollTo}
          styleName="link"
        >
          Location
        </Navlink>
        <Navlink
          to="/academies"
          subNav={subNav}
          onClick={scrollTo}
          styleName="link"
        >
          Academies
        </Navlink>
        <Navlink
          to="/foundation"
          subNav={subNav}
          onClick={scrollTo}
          styleName="link"
        >
          Foundation
        </Navlink>
        <Navlink
          to="/local"
          subNav={subNav}
          onClick={scrollTo}
          styleName="link"
        >
          WDS Local
        </Navlink>
      </nav>
      <nav styleName="rightNav">
        {auth.me
          ? <Navlink
              to="/hub"
              subNav={subNav}
              onClick={scrollTo}
              styleName="link"
            >
              The Hub
            </Navlink>
          : <Navlink
              to="/login"
              subNav={subNav}
              onClick={scrollTo}
              styleName="link"
            >
              Login
            </Navlink>}
      </nav>
      {auth.me ? '' : <TicketStub onClick={ticketClick} />}
    </div>
    {renderSubNav(subNav, scrollTo, auth.me)}
    {renderAlert(subNav, scrollTo, auth.me)}
  </header>;

const mobileHeader = (
  ticketClick,
  scrollTo,
  navOpen,
  onMenuClick,
  auth,
  subNav
) => {
  return (
    <header styleName="header">
      <div styleName="row">
        <Link styleName="logo" to="/" />
        <button
          styleName="hamburger"
          className={navOpen ? 'open' : ''}
          onClick={onMenuClick}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div styleName="hiddenNav" className={navOpen ? 'open' : ''}>
        <nav styleName="nav">
          <Link
            to="/story"
            onClick={scrollTo}
            activeClassName="active"
            styleName="link"
          >
            Story
          </Link>
          <Link
            to="/schedule"
            onClick={scrollTo}
            activeClassName="active"
            styleName="link"
          >
            Schedule
          </Link>
          <Link
            to="/location"
            onClick={scrollTo}
            activeClassName="active"
            styleName="link"
          >
            Location
          </Link>
          <Link
            to="/academies"
            onClick={scrollTo}
            activeClassName="active"
            styleName="link"
          >
            Academies
          </Link>
          <Link
            to="/foundation"
            onClick={scrollTo}
            activeClassName="active"
            styleName="link"
          >
            Foundation
          </Link>
          <Link
            to="/local"
            onClick={scrollTo}
            activeClassName="active"
            styleName="link"
          >
            WDS Local
          </Link>
        </nav>
      </div>
      {renderSubNav(subNav, scrollTo, auth.me)}
    </header>
  );
};

const Header = ({
  ticketClick,
  scrollTo,
  navOpen,
  onMenuClick,
  auth,
  subNav,
}) => {
  console.log(is.mobile());
  return is.mobile()
    ? mobileHeader(ticketClick, scrollTo, navOpen, onMenuClick, auth, subNav)
    : desktopHeader(ticketClick, scrollTo, auth, subNav);
};
export default CSSModules(Header, styles);
