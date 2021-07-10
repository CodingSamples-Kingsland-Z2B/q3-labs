import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Navbar = (props) => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton edge='start' color='inherit'>
          <Menu />
        </IconButton>
        <Typography variant='h6'> {props.title}</Typography>
        
        
    
          </Toolbar>
    </AppBar>
  );
};

export default Navbar;
