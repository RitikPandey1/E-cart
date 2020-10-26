import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar
      style={{
        bottom: 0,
        top: "auto",
        backgroundColor: "#E74C3C",
        textAlign: "center",
         padding:"10px" 
          }}
    >
     <p>Made with &#9825; , by Ritik Pandey</p>
    </AppBar>
  );
};

export default Footer;
