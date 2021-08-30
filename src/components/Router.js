import React, { useState } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";



const AppRouter = ({ isLoggedIn, userObj }) => {
   const [loggedId,setLoggedId] = useState("")
	
  const loggedChange = (id) => setLoggedId(id)
  
  
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
		  <>
		  <Redirect from="/login" to="/home" />
		  		  <Route exact path="/home">
                <Home userObj={userObj}/>
              </Route>
          </>) : (
            <>
              <Route exact path="/login">
                <Auth />
              </Route>
              <Redirect from="*" to="/login" />
            </>
          )
        }
      </Switch>
    </Router>
  )
}

export default AppRouter;