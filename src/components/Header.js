import React from "react";

import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Styling from "./Styling";

const Header = () => {
    const classes = Styling();
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

export default Header;