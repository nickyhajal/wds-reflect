import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import TicketStub from '../../../components/TicketStub/TicketStub';
import styles from './Header.css';
import is from '../../../utils/is';

const desktopHeader = (ticketClick, scrollTo) => (
  <header styleName="header">
    <div styleName="row">
      <Link styleName="logo" to="/" alt="WDS Home" />
      <nav styleName="nav">
        <Link to="/story" onClick={scrollTo} activeClassName="active" styleName="link">Story</Link>
        <Link to="/schedule" onClick={scrollTo} activeClassName="active" styleName="link">Schedule</Link>
        <Link to="/location" onClick={scrollTo} activeClassName="active" styleName="link">Location</Link>
        <Link to="/academies" onClick={scrollTo} activeClassName="active" styleName="link">Academies</Link>
        <Link to="/foundation" onClick={scrollTo} activeClassName="active" styleName="link">Foundation</Link>
        <Link to="/local" onClick={scrollTo} activeClassName="active" styleName="link">WDS Local</Link>
      </nav>
      <TicketStub onClick={ticketClick} />
    </div>
  </header>
);

const mobileHeader = (ticketClick, scrollTo, navOpen, onMenuClick) => (
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
        <Link to="/story" onClick={scrollTo} activeClassName="active" styleName="link">Story</Link>
        <Link to="/schedule" onClick={scrollTo} activeClassName="active" styleName="link">Schedule</Link>
        <Link to="/location" onClick={scrollTo} activeClassName="active" styleName="link">Location</Link>
        <Link to="/academies" onClick={scrollTo} activeClassName="active" styleName="link">Academies</Link>
        <Link to="/foundation" onClick={scrollTo} activeClassName="active" styleName="link">Foundation</Link>
        <Link to="/local" onClick={scrollTo} activeClassName="active" styleName="link">WDS Local</Link>
      </nav>
    </div>
  </header>
);

const Header = ({
  ticketClick, scrollTo, navOpen, onMenuClick,
}) => (
  (
    is.mobile() ?
    mobileHeader(ticketClick, scrollTo, navOpen, onMenuClick) :
    desktopHeader(ticketClick, scrollTo)
  )
);
export default CSSModules(Header, styles);
