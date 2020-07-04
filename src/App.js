import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

import "./styles.css";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    flexGrow : 1,
    background : "linear-gradient(to bottom right, #262626, #333333)",
    color : "#00a3cc",
    textAlign : "center",
  },
  typography : {
  },
  title: {
  },
  headerbox: {
    flexGrow : 1,
    display : "flex",
    alignItems: "center",
    justifyContent:"center",
    magin:"auto",
  },
  footer:{
    flexGrow : 1,
    background : "linear-gradient(to bottom right, #333333, #262626)",
    color : "#00a3cc",
    display : "flex",
    alignItems: "center",
    justifyContent:"center",
    magin:"auto",
    textAlign : "center",
  },
  content:{
    display : "flex",
    flexGrow : 1,
  },


  
}));





const App = () => {

  const classes = useStyles();

  return(
    <div>
      <Header/>
      
      <Content/>

      <Footer/>
    </div>
  );
};

const Content = () => {
  const classes = useStyles();

  return (
    <div className = {classes.content}>

      <Router>
        <Switch>
          <Route exact path="/">
            <LoginForm/>
          </Route>

          <Route path = "/contactExample">
            <Contacts/>
          </Route>

          <Route path = "/login">
            <LoginForm/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
};

const LoginForm = () => {

  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    console.log(password);

    // (async () => {
    //   const rawResponse = await fetch("http://localhost:8090/authenticate", {
    //     method: 'POST',
    //      headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //      },
    //      body : JSON.stringify({"username":user,"password":password})
    //   });
    //   const content = await rawResponse.json();
    //   console.log(content);

    // })();

    fetch("http://localhost:8090/authenticate",{
 
      method : "POST",
      headers : {
        'Content-Type': 'application/json',
        
      },
      body : JSON.stringify({"username":user,"password":password})

    })
    .then((response) => response.json())
    .then(data => {
      if (data.message) {
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } else {
        localStorage.setItem("token", data.token)
        // dispatch(loginUser(data.user))
        console.log(data.token);
      }
    })
    
  }


 
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={user}
          onChange={e => setUser(e.target.value)}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          /><br/>

        <input type='submit'/>
           
      </form>
    </div>
   );
   
};

const Contacts = () => {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);

  return(
    <div>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </div>
  );
};


const Header = () => {
  const classes = useStyles();
  return (

<div>
  <AppBar position="fixed">
    <Toolbar className = {classes.header}>

      <Box className ={classes.headerbox}>
        <Typography>
          <h1>KilledByCheese's Recipes</h1>
          <h3>An awesome collection of delicious recipes ツ </h3>
        </Typography>  
      </Box>  
    </Toolbar>
  </AppBar>
  <Toolbar/>
  <Toolbar/>
  <Toolbar/>
    
    
      
</div>
    
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography>
        <p>This Recipe Book is a collection of recipes I tried and liked</p>
        <p>I created the frontend and backend myself to try something new and to challenge myself</p>
      </Typography>
      
    </div>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = React.useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age 
        </button>
        {showAge === true ? <p>Age: {props.age}</p> : null}
      </div>
    </div>
  );
};



export default App;