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
import { PrivateRoute } from "./utils/privateRoute";
import Profile from './profile';
import Users from "./users";
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
          <PrivateRoute path="/home" exact={true}>
            <Home />
          </PrivateRoute>
          <PrivateRoute path = '/profile' exact = {true}>
            <Profile />
          </PrivateRoute>
          <PrivateRoute path='/users' exact={true}>
            <Users />
          </PrivateRoute>
        </Switch>
    </Router>
  )
}

export default App

