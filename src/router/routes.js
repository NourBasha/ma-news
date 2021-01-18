import { Route, Router, Switch } from "react-router";
import Header from "../components/container/header";
import history from '../utils/history';

import DevelopingNews from '../views/developingNews';
import FirstStylePage from '../views/firstStylePage';
import SecondStylePage from "../views/secondStylePage";

const Routes = (props) => {
  return (
    <div className="router">
      <Router history={history}>
                <Header />
            <Switch>
                      <Route exact path='/' component={DevelopingNews} />
                      <Route exact  path='/top-stories/:name' render={(target)=> <FirstStylePage target={target}  /> }/>
                      <Route exact  path='/topStories/:name' render={(target)=> <SecondStylePage target={target}  /> }/>
            </Switch>
      </Router>
    </div>
  );
};

export default Routes;
