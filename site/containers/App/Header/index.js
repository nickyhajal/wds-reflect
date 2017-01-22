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
        <Link to="/story" onClick={scrollTo} styleName="link">Story</Link>
        <Link to="/schedule" onClick={scrollTo} styleName="link">Schedule</Link>
        <Link to="/location" onClick={scrollTo} styleName="link">Location</Link>
        <Link to="/academies" onClick={scrollTo} styleName="link">Academies</Link>
        <Link to="/foundation" onClick={scrollTo} styleName="link">Foundation</Link>
        <Link to="/local" onClick={scrollTo} styleName="link">WDS Local</Link>
      </nav>
      <TicketStub onClick={ticketClick} />
    </div>
  </header>
);

const mobileHeader = (ticketClick, scrollTo) => (
  <header styleName="header">
    <div styleName="row">
      <Link styleName="logo" to="/"></Link>
    </div>
    <div styleName="hiddenNav">
      <nav styleName="nav">
        <Link to="/#overview" onClick={scrollTo} styleName="link">2016 Highlights</Link>
        <Link to="/#activities" onClick={scrollTo} styleName="link">Activities</Link>
        <Link to="/#tickets" onClick={scrollTo} styleName="link">Tickets</Link>
        <Link to="/#contact" onClick={scrollTo} styleName="link">Contact Us</Link>
      </nav>
    </div>
  </header>
);

console.log(is.mobile())
const Header = ({
  ticketClick, scrollTo,
}) => (
  (
    is.mobile() ?
    mobileHeader(ticketClick, scrollTo) :
    desktopHeader(ticketClick, scrollTo)
  )
);
export default CSSModules(Header, styles);
