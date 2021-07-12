import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login';
import SignUp from "./signup";
import Welcome  from "./welcome";
import Home from "./home";
import './App.css';

function App () {
  return (
    <Router>
      <Switch>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/signup" exact={true}> 
            <SignUp />
          </Route>
          <Route path="/" exact={true}>
            <Welcome />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default App

