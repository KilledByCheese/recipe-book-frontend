import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import React from "react";

import SignupForm from "./components/signup.component";

import SigninForm from "./components/signin.component";

const App = () => {
 
  
  

  return(
    <div className="mainbackground">
      <SigninForm></SigninForm>
    </div>
  );
};





export default App;