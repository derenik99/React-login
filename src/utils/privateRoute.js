import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({children: Component, ...props}) => {
    
      const isLogedIn = localStorage.getItem("id");
        return <Route {...props}>
          {isLogedIn? [Component]: <Redirect to='/Login'/>}
      </Route>
   }