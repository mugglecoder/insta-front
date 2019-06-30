import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";
import BoardMain from "../Routes/BoardMain";
import RoomsDetail from "../Routes/RoomsDetail";
import WritePost from "../Routes/WritePost";
import Loading from "../Routes/Loading";
import LinkPage from "../Routes/LinkPage";

const LoggedInRoutes = ({ match }) => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/new/1" />} />
    <Route exact path="/new" render={() => <Redirect to="/new/1" />} />
    <Route exact path="/new/:page" component={LinkPage} />
    <Route path="/roomsdetail/:id/new/:page" component={RoomsDetail} />
    <Route path="/upload" component={Explore} />
    <Route path="/board" component={Feed} />
    <Route path="/uploading" component={Loading} />
    <Route path="/writeboard/:id" component={WritePost} />
    <Route path="/search" component={Search} />
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
