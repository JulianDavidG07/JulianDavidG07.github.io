import React from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import logo from './dazzler.png'

/* Component return a Header con el logo de deezer */
const HeaderDaz = () => {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
         <Avatar alt="Remy Sharp" src={logo} />
          <Typography>~ Search and Find</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )}

export default HeaderDaz;