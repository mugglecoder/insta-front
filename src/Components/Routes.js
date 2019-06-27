import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";
import BoardMain from "../Routes/BoardMain";
import RoomsDetail from "../Routes/RoomsDetail";
import WritePost from "../Routes/WritePost";

const LoggedInRoutes = ({ history }) => (
  <Switch>
    <Route exact path="/" component={BoardMain} />
    <Route path="/upload" component={Explore} />
    <Route path="/board" component={Feed} />
    <Route path="/roomsdetail/:id" component={RoomsDetail} />
    <Route path="/writeboard/:id" component={WritePost} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const LoggedOutRoutes = ({ history }) => (
  <Switch>
    {console.log(history)}
    <Route exact path="/" component={Auth} />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
