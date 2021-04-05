import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import React, { Component } from "react";
import axios from 'axios';

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import MenuBar from "./components/menubar.component";

import SignupForm from "./components/signup.component";
import SigninForm from "./components/signin.component";

import CategoriesOverview from "./components/categoreis.component";
import Home from "./components/home.component";
import Search from "./components/search.component";

import { PrivateRoute } from './components/routing/privateRoute';





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
        <BrowserRouter>
            <div className="mainbackground">
                <MenuBar isLoggedIn={this.state.isLoggedIn}></MenuBar>
                <Switch>
                    <Route exact path ="/login" component={() => <SigninForm setIsLoggedIn={this.setIsLoggedIn} isLoggedIn={this.state.isLoggedIn}/>} />
                    <Route exact path ="/register" component={() => <SignupForm/>} />

                    <PrivateRoute exact path ="/home" component={() => <Home/>} />
                    <PrivateRoute exact path ="/search" component={() => <Search/>} />
                    <PrivateRoute exact path ="/categories" component={() => <CategoriesOverview/>} />
                </Switch>
            </div>
        </BrowserRouter> 
    );
  }  
     

  
};





