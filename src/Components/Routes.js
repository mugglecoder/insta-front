import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Search from "../Routes/Search";
import Info from "../Routes/Info";
import Loading from "../Routes/Loading";
import WritePost from "../Routes/WritePost";
import Fullmap from "../Routes/Fullmap";

import Main from "../Routes/Main";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={Main} />

      <Route
        exact
        path="/new/search"
        render={() => <Redirect to="/new/search/:page" />}
      />
      <Route exact path="/new/search/:page" component={Search} />
      <Route
        path="/fullmap"
        render={() => <Redirect to="/fullmap" />}
        component={Fullmap}
      />
      <Route path="/new/detail/:id" component={Search} />
      <Route exact path="/new/edit/:id" component={Search} />
      <Route path="/writeboard/:id" component={WritePost} />
      <Route path="/board" component={Feed} />
      <Route path="/uploading" component={Loading} />
      <Route path="/info/:id" component={Info} />
    </Switch>
  );
};

const LoggedOutRoutes = ({ history }) => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
