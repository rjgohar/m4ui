import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import pic  from "../../assests/background.png"
export default function HeadSection() {
    const classes = useStyles();
  return <Box className={classes.mainContainer}>




  </Box>;
}

const useStyles = makeStyles(()=>({


    mainContainer:{
        width: '100%',
        height: '600px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundImage:`url(${pic})`
    }
    
}))
