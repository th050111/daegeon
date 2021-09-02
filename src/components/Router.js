import React, { useState } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import MainHome from "../routes/MainHome";
import "../css/MainHome.css"



const AppRouter = ({ isLoggedIn, userObj }) => {
   const [loggedId,setLoggedId] = useState("")
	
  const loggedChange = (id) => setLoggedId(id)
  
  
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
		  <>
			<div class="menu" >
      <nav class="clearfix">
        <ul class="clearfix">
          <li><a href="/#/mainHome">홈</a></li>
          <li><a href="/#/home">익명게시판</a></li>
          <li><a >청원</a></li>
          <li><a >모의고사타이머</a></li>
      </ul>
      <a id="pull" href="#"></a>
    </nav>
    </div>
		  <Redirect from="/login" to="/mainHome" />
		  		  <Route exact path="/home">
                <Home userObj={userObj}/>
              </Route>
	  				<Route exact path="/mainHome">
                <MainHome/>
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