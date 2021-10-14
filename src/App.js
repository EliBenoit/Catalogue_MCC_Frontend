// packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// component
import Login from './components/Login';
import Register from './components/Register';
/*import Home from './Home';
import Profil from './Profil';
import PrivateRoute from "./PrivateRoute/PrivateRoute";*/

// style
import 'rsuite/styles/index.less';

/*
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/mon-compte">
            <Profil />
          </PrivateRoute>
          */

const App = () => {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/connexion">
            <Login />
          </Route>
          <Route path="/inscription">
            <Register />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
