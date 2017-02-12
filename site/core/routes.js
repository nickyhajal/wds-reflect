import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App/';
import People from '../containers/People/';
import Person from '../containers/Person/';
import Claim from '../containers/Claim/Claim';
import Welcome from '../containers/Welcome/Welcome';
import Pageloader from '../containers/Pageloader/';
import TicketPurchase from '../containers/TicketPurchase/TicketPurchase';
import EnsureLoggedIn from '../containers/EnsureLoggedIn/EnsureLoggedIn';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Pageloader} />
    <Route path="/main" component={Pageloader} />
    <Route path="/people" component={People} />
    <Route path="/person/:id" component={Person} />
    <Route path="/claim/:id" component={Claim} />
    <Route path="/welcome/:id" component={Welcome} />
    <Route path="/be-there" component={TicketPurchase} />
    <Route path="/id" component={Person} />
    <Route component={EnsureLoggedIn}>
      <Route path="/claim" component={Claim} />
      <Route path="/welcome" component={Welcome} />
    </Route>
    <Route path="*" component={Pageloader} />
  </Route>
);

export default routes;
