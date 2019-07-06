import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import RoomsDetail from "../Routes/RoomsDetail";
import Loading from "../Routes/Loading";
import LinkPage from "../Routes/LinkPage";
import EditPost from "../Routes/EditPost";
import WritePost from "../Routes/WritePost";

const LoggedInRoutes = ({ match }) => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/new/1" />} />
    <Route exact path="/new" render={() => <Redirect to="/new/1" />} />
    <Route exact path="/new/:page" component={LinkPage} />
    <Route exact path="/edit/:id" component={EditPost} />
    <Route path="/roomsdetail/:id/new/:page" component={RoomsDetail} />
    <Route path="/writeboard/:id" component={WritePost} />
    <Route path="/upload" component={Explore} />
    <Route path="/board" component={Feed} />
    <Route path="/uploading" component={Loading} />
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
