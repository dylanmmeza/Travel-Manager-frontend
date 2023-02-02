// @flow
import React from 'react';
import { Route, Switch } from 'fusion-plugin-react-router';
import { Helmet } from 'react-helmet';

import AuthWrapper from './initial-data'
import Header from './headerBar';

import Home from './pages/home';
import TripsPage from './pages/trips';
import TripDetailsPage from './pages/TripDetails';
import AccountPage from './pages/Account';
import ExplorePage from './pages/Explore';
import PageNotFound from './pages/pageNotFound.js';
// import AuthorizationPage from './pages/AuthorizationPage';

const root = (
  <div style={{ height: '100%', width: '100%', whiteSpace: 'nowrap', overflowY: 'hidden' }}>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
    </Helmet>

    <AuthWrapper>
      <Header></Header>
      <Switch >
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/AuthorizationPage" component={AuthorizationPage} /> */}
        <Route exact path="/trips" component={TripsPage} />
        <Route exact path="/trips/:trip_uuid" component={TripDetailsPage} />
        <Route exact path="/AccountPage" component={AccountPage} />
        <Route exact path="/ExplorePage" component={ExplorePage} />
        <Route component={PageNotFound} />
      </Switch>
    </AuthWrapper >
  </div>
);

export default root;
