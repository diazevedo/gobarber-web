import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import DashboardProvider from '~/pages/Dashboard/Provider';
import DashboardCustomer from '~/pages/Dashboard/Customer';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route
        path="/dashboard/provider"
        exact
        component={DashboardProvider}
        isPrivate
      />

      <Route
        path="/dashboard/customer"
        exact
        component={DashboardCustomer}
        isPrivate
      />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>This page does not exist.</h1>} />
    </Switch>
  );
}
