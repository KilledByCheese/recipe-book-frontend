import React from "react";

import history from './components/History';
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles.css";

const App = () => {
 
  
  React.useEffect(() => {
    if("token" in localStorage) {
      fetch("http://localhost:8090/isTokenValid",{
  
        method : "POST",
        headers : {
          'Authorization':'Bearer '+ localStorage.getItem("token"),
        },
      })
      .then(function(response) {
        if(response.status === 401) 
        {
          // console.log("Need relogin token invalid");
          history.push("/login");
        }
      });
    } else {
      // console.log("Need relogin no token");
      history.push("/login");
    }
  }, []);

  return(
    <div>
      <Header/>
      
      <Content/>

      <Footer/>
    </div>
  );
};





export default App;