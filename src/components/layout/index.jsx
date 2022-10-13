 import { makeStyles } from '@material-ui/styles';
import React from 'react'

const Layout = ({header, children}) => {
    const classes=useStyles();
  return (
    <div className={classes.layoutContainer}>
        <div className={classes.header}>
            {header}
        </div>
        <div className={classes.children}>
            {children}
        </div>
    </div>
  )
}

export default Layout;

const useStyles =makeStyles((theme)=>({
    layoutContainer: {
        width: '100%',
    },
    header:{
        width:"100%",
    },
    children:{
        width:"100%",
    }
}))