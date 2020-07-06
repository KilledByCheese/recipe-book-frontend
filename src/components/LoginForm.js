import React from "react";

import history from './History';

const LoginForm = () => {

    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    // const history = useHistory();
  
    function handleSubmit(event) {
      event.preventDefault();
      
  
      fetch("http://localhost:8090/authenticate",{
   
        method : "POST",
        headers : {
          'Content-Type': 'application/json',
          
        },
        body : JSON.stringify({"username":user,"password":password})
  
      })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        if (data.message) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
          alert("Wrong Credentials");
        } else {
          localStorage.setItem("token", data.token);
          // dispatch(loginUser(data.user))
          history.push("/recipes");
        }
      });
      
    }
   
    return (
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            name='username'
            placeholder='Username'
            value={user}
            onChange={e => setUser(e.target.value)} 
            className="login-input"
            /><br/>
  
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)} 
            className="login-input"
            /><br/>
  
          <input type='submit'className="login-button"/>
             
        </form>
      </div>
     );
     
  };

  export default LoginForm;