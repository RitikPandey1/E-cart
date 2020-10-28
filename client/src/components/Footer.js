import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar
      style={{
        backgroundColor: "#2980b9",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <p>Made with &#9825; , by Ritik Pandey</p>
    </AppBar>
  );
};

export default Footer;
