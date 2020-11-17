import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";

export default ({ text ,...rest }) => {
    
    return <Button {...rest} variation="contained" color="primary" disabled={true} >
        <CircularProgress size={15} style={{marginRight:"5px"}} />
        {text}
  </Button> 
    
}