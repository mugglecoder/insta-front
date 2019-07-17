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
import Fullmap from "../Routes/Fullmap";
import FullmapDivide from "../Routes/FullmapDivide";
import { withRouter } from "react-router-dom";

const LoggedInRoutes = withRouter((props, { match }) => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/new/1" />} />
    <Route exact path="/new" render={() => <Redirect to="/new/1" />} />
    <Route exact path="/new/search" component={Search} />
    <Route exact path="/new/searching" component={Search} />
    <Route exact path="/new/:page" component={LinkPage} />
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
));

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
