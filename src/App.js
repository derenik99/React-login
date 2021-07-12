import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login';
import SignUp from "./signup";
import Welcome  from "./welcome";
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
        </Switch>
    </Router>
  )
}

export default App

