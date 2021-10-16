// packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// component
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profil from './components/Profil';
import Dashboard from "./components/Dashboard";
/*
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
      <Route path="/mon-compte">
        <Profil />
      </Route>
      <Route path="/tableau-de-bord">
        <Dashboard />
      </Route>
      <Route path="/">
          <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
