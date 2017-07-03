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

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Pageloader} />
    <Route path="/main" component={Pageloader} />
    <Route path="/people" component={People} />
    <Route path="/person/:id" component={Person} />
    <Route path="/claim/:id" component={Claim} />
    <Route path="/reset/:id" component={Reset} />
    <Route path="/propose-a-meetup/:id" component={HashLogin} />
    <Route path="/academies/:id" component={HashLogin} />
    <Route path="/transfer/:id" component={HashLogin} />
    <Route path="/speaker/:id" component={SpeakerPage} />
    <Route path="/welcome/:id" component={Welcome} />
    <Route path="/academy/:id" component={Event} />
    <Route path="/be-there" component={TicketPurchase} />
    <Route path="/checkout" component={Purchase} />
    <Route path="/id" component={Person} />
    <Route path="/events/meetups/:id" component={HashLogin} />
    <Route path="/events/academies/:id" component={HashLogin} />
    <Route path="/events/expeditions/:id" component={HashLogin} />
    <Route path="/events/activities/:id" component={HashLogin} />
    <Route path="/your-schedule/:id" component={HashLogin} />
    <Route component={EnsureLoggedIn}>
      <Route path="/claim" component={Claim} />
      <Route path="/communities" component={Communities} />
      <Route path="/meetup/:id" component={Event} />
      <Route path="/expedition/:id" component={Event} />
      <Route path="/activity/:id" component={Event} />
      <Route path="/events/meetups" component={EventListing} />
      <Route path="/events/academies" component={EventListing} />
      <Route path="/events/expeditions" component={EventListing} />
      <Route path="/events/activities" component={EventListing} />
      <Route path="/community/:id" component={Community} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/hub" component={Hub} />
      <Route path="/settings" component={Settings} />
      <Route path="/events" component={Events} />
      <Route path="/your-schedule" component={Schedule} />
    </Route>
    <Route path="/events/:id" component={HashLogin} />
    <Route path="*" component={Pageloader} />
  </Route>
);

export default routes;
