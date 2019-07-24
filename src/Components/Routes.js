import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Search from "../Routes/Search";
import RoomsDetail from "../Routes/RoomsDetail";
import Loading from "../Routes/Loading";
import WritePost from "../Routes/WritePost";
import Fullmap from "../Routes/Fullmap";
import FullmapDivide from "../Routes/FullmapDivide";
import { withRouter } from "react-router-dom";
import Main from "../Routes/Main";
const LoggedInRoutes = withRouter((props, { match }) => {
  return (
    <Switch>
      <Route exact path="/" render={Main} />
      <Route
        exact
        path="/new/search"
        render={() => <Redirect to="/new/search/1" />}
      />
      <Route exact path="/new/search/:page" component={Search} />
      <Route
        path="/fullmap"
        render={() => <Redirect to="/fullmap" />}
        component={Fullmap}
      />
      <Route path="/fullmap/roomsdetail/:id" component={FullmapDivide} />
      <Route path="/roomsdetail/:id" component={RoomsDetail} />
      <Route exact path="/edit/:id" component={RoomsDetail} />
      <Route path="/writeboard/:id" component={WritePost} />
      <Route path="/board" component={Feed} />
      <Route path="/uploading" component={Loading} />
    </Switch>
  );
});

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
