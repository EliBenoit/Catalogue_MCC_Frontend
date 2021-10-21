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

/**
 * 
 * To connect with the API we need to use an async function, with a fetch() method 
 * with then step to execute instruction in order. 
 * 
 * The fetch method have option to precise a header informations,
 * where i can put method to use and headers. 
 * 
 * We need to use a try/catch method() around the promise to handle the error situation.  * 
 * 
 * Since I use react, I need to make this call inside a useEffect 
 * to render the component when the fetch method is completed. 
 * 
 * */

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
      <Route path="/">
          <Home />
      </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
