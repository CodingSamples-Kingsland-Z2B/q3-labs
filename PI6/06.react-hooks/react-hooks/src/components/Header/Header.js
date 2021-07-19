import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
  return (

    <AppBar position="static">
    <Toolbar className={classes.Toolbar}>
      <Typography variant="h6"> My App </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Header
