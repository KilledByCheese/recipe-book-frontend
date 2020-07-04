import React from "react";

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
  toolbar: {
    flexGrow : 1,
    background : "linear-gradient(to bottom right, #262626, #333333)",
    color : "#00a3cc",
  },
  typography : {
  },
  title: {
  },
  box: {
    flexGrow : 1,
    display : "flex",
    alignItems: "center",
    justifyContent:"center",
    magin:"auto",
  },

  
}));

const App = () => {

  const classes = useStyles();


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
      
      <Header/>

      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}


      <Footer/>
    </div>


  );
};



const Header = () => {
  const classes = useStyles();
  return (

<div>
    <AppBar position="fixed">
  <Toolbar className = {classes.toolbar}>

    <Box className ={classes.box}>
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
  return (
    <div className="footer">
      <p>This Recipe Book is a collection of recipes I tried and liked</p>
      <p>I created the frontend and backend myself to try something new and to challenge myself</p>
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