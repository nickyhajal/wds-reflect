import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App/';
import People from '../containers/People/';
import Person from '../containers/Person/';
import Claim from '../containers/Claim/Claim';
import Communities from '../containers/Hub/Communities/Communities';
import Community from '../containers/Hub/Community/Community';
import Welcome from '../containers/Welcome/Welcome';
import Settings from '../containers/Hub/Settings/Settings';
import Pageloader from '../containers/Pageloader/';
import TicketPurchase from '../containers/TicketPurchase/TicketPurchase';
import Reset from '../containers/Reset';
import SpeakerPage from '../containers/SpeakerPage/SpeakerPage';
import Hub from '../containers/Hub/Hub';
import YourSchedule from '../containers/Hub/YourSchedule/YourSchedule';
import Events from '../containers/Hub/Events';
import EnsureLoggedIn from '../containers/EnsureLoggedIn/EnsureLoggedIn';
import Event from '../containers/Event';
import Purchase from '../containers/Purchase/Purchase';
import HashLogin from '../containers/HashLogin';
import EventListing from '../containers/Hub/EventListing';
import Schedule from '../containers/Hub/Schedule';
import EnsureAttendingAndHasProfile from '../containers/EnsureAttendingAndHasProfile/EnsureAttendingAndHasProfile';
import Transfer from '../components/Transfer/Transfer';
import CompleteBooking from '../containers/CompleteBooking';
import Logout from '../containers/Logout';
import AwardeePage from '../containers/SpeakerPage/AwardeePage';
import Billing from '../containers/Hub/Billing';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Pageloader} />
    <Route path="/main" component={Pageloader} />
    <Route path="/people" component={People} />
    <Route path="/person/:id" component={Person} />
    <Route path="/assign/:id" component={Claim} />
    <Route path="/reset/:id" component={Reset} />
    <Route path="/propose-a-meetup/:loginhash" component={HashLogin} />
    <Route path="/academies/:loginhash" component={HashLogin} />
    <Route path="/transfer/:loginhash" component={HashLogin} />
    <Route path="/login/:loginhash" component={HashLogin} />
    <Route path="/logout" component={Logout} />
    <Route path="/speaker/:id" component={SpeakerPage} />
    <Route path="/awardee/:id" component={AwardeePage} />
    <Route path="/welcome/:id" component={Welcome} />
    <Route path="/academy/:id" component={Event} />
    <Route path="/be-there" component={TicketPurchase} />
    <Route path="/side-hustlers-only" component={TicketPurchase} />
    <Route path="/checkout" component={Purchase} />
    <Route path="/id" component={Person} />
    <Route path="/picnic-preorder/:loginhash" component={HashLogin} />
    <Route path="/trex/:loginhash" component={HashLogin} />
    <Route path="/events/meetups/:loginhash" component={HashLogin} />
    <Route path="/title/:loginhash" component={HashLogin} />
    <Route path="/wds-day/meetups/:loginhash" component={HashLogin} />
    <Route path="/events/academies/:loginhash" component={HashLogin} />
    <Route path="/events/expeditions/:loginhash" component={HashLogin} />
    <Route path="/events/activities/:loginhash" component={HashLogin} />
    <Route path="/events/registration/:loginhash" component={HashLogin} />
    <Route path="/hotel/:loginhash" component={HashLogin} />
    <Route path="/billing/:loginhash" component={HashLogin} />
    <Route path="/your-schedule/:loginhash" component={HashLogin} />
    <Route path="/hub/:loginhash" component={HashLogin} />
    <Route path="/something-special/:loginhash" component={HashLogin} />
    <Route path="/activity/:id" component={Event} />
    <Route path="/activity/:id/:loginhash" component={HashLogin} />
    <Route component={EnsureLoggedIn}>
      <Route path="/assign" component={Claim} />
      <Route path="/registration/:id" component={Event} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/complete-booking" component={CompleteBooking} />
      <Route component={EnsureAttendingAndHasProfile}>
        <Route path="/communities" component={Communities} />
        <Route path="/meetup/:id" component={Event} />
        <Route path="/expedition/:id" component={Event} />
        <Route path="/program/:id" component={Event} />
        <Route path="/hub" component={Hub} />
        <Route path="/settings" component={Settings} />
        <Route path="/events" component={Events} />
        <Route path="/billing" component={Billing} />
        <Route path="/your-schedule" component={Schedule} />
        <Route path="/events/meetups" component={EventListing} />
        <Route path="/wds-day/meetups" component={EventListing} />
        <Route path="/events/academies" component={EventListing} />
        <Route path="/events/expeditions" component={EventListing} />
        <Route path="/events/activities" component={EventListing} />
        <Route path="/community/:id" component={Community} />
        <Route path="/events/registration" component={EventListing} />
      </Route>
    </Route>
    <Route path="/events/:loginhash" component={HashLogin} />
    <Route path="*" component={Pageloader} />
  </Route>
);

export default routes;
