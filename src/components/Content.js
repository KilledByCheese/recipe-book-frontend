import React from "react";

import {
    Router,
    Switch,
    Route,
  } from "react-router-dom";

import history from './History';
import RecipeList from "./RecipeList";
import LoginForm from "./LoginForm";
import useStyling from "./Styling";

const Content = () => {
    const classes = useStyling();    
  
      return (
        <div className = {classes.content}>
    
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <LoginForm/>
              </Route>            
  
              <Route path = "/recipes">
                <RecipeList/>
              </Route>
    
              <Route path = "/login">
                <LoginForm/>
              </Route>
    
            </Switch>
          </Router>
    
        </div>
      );
   
  
   
  };

  export default Content;