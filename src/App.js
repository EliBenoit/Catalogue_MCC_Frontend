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
import PrivateRoute from "./components/PrivateRoute";
import {Toaster } from "react-hot-toast";

// style
import 'rsuite/styles/index.less';

const App = () => {
  return (
    <>
    <div><Toaster/></div>
    <Router>
    <div className="App">
      <Switch>
     <Route path="/connexion">
        <Login />
      </Route>
      <Route path="/inscription">
        <Register />
      </Route>
      <PrivateRoute path="/mon-compte">
        <Profil />
      </PrivateRoute>
      <PrivateRoute admin path="/tableau-de-bord">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/">
          <Home />
      </PrivateRoute>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
