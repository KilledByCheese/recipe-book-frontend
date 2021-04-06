import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import React, { Component } from "react";
import axios from 'axios';

/**
 * Routing
 */
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import { PrivateRoute } from './components/routing/privateRoute';


/**
 * Authentication
 */
import SignupForm from "./components/authentication/signup.component";
import SigninForm from "./components/authentication/signin.component";


/**
 * UI Elements
 */
import MenuBar from "./components/ui.elements/menubar.component";

import CategoriesOverview from "./components/ui.elements/categoreis.component";
import Home from "./components/ui.elements/home.component";
import Search from "./components/ui.elements/search.component";


export default class App extends Component {

  
  state = {isLoggedIn: false};  

  setIsLoggedIn = isLoggedIn => {
    this.setState( {
      isLoggedIn : isLoggedIn
    })
  }  
  
  componentDidMount = () => {
      
    axios.post('/validateToken').
      then(
        res => {            
          console.log("User is logged in with valid token");
          this.setIsLoggedIn(true);
          console.log("isloggedin: "+this.state.isLoggedIn);
        }
      ).catch(
         err => {
          console.log(err);
          console.log("User is not logged in - token is not valid");
          this.setIsLoggedIn(false);
          localStorage.removeItem("token");
        }
      );
    
  }
  
  render(){
    return( 
      <div style={{background: "#495057"}}>
        <BrowserRouter>
            <div>
                <MenuBar isLoggedIn={this.state.isLoggedIn}></MenuBar>
                <Switch>

                    <Route exact path ="/login" component={() => <SigninForm setIsLoggedIn={this.setIsLoggedIn} isLoggedIn={this.state.isLoggedIn}/>} />
                    <Route exact path ="/register" component={() => <SignupForm/>} />

                    <PrivateRoute exact path ="/" component={() => <Home/>} />
                    <PrivateRoute exact path ="/home" component={() => <Home/>} />
                    <PrivateRoute exact path ="/search" component={() => <Search/>} />
                    <PrivateRoute exact path ="/categories" component={() => <CategoriesOverview/>} />
                </Switch>
            </div>
        </BrowserRouter> 
      </div>
    );
  }    

  
};





