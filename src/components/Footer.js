import React from "react";
import useStyling from "./Styling";


import Typography from "@material-ui/core/Typography";

const Footer = () => {
    const classes = useStyling();
    return (
      <div className={classes.footer}>
        <Typography>
          <p>This Recipe Book is a collection of recipes I tried and liked</p>
          <p>I created the frontend and backend myself to try something new and to challenge myself</p>
        </Typography>
        
      </div>
    );
  };

  export default Footer;