import { Route, Router, Switch } from "react-router";
import Header from "../components/container/header";
import history from '../utils/history';

import Home from '../views/home';
import World from "../views/world";

const Routes = (props) => {
  return (
    <div className="router">
      <Router history={history}>
                <Header />
            <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact  path='/world' component={World} />
            </Switch>
      </Router>
    </div>
  );
};

export default Routes;
