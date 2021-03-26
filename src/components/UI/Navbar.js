import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from './Images/commerceLogo.png';



const NavBar = () => {

  const history = useHistory();
  const location = useLocation();


  const totalItems = 5;


  return(
     <>
     <AppBar position="fixed" className={"classes.appBar"} color="inherit" >
     <Toolbar>
       <Typography component={Link} to="/" variant="h6">
       <img src={logo} alt="ccommerce" height="25px"/>
       </Typography>

         <div style={{display: 'flex', position: 'relative', left: '9.5rem'}}>
         <p style={{margin: '5px', position: 'relative', top: '10px'}}>LOGIN</p>

         <p style={{margin: '5px', position: 'relative', top: '10px'}}>OFFERS</p>

            <IconButton>
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
              </Badge>
         </IconButton>
       </div>

     </Toolbar>
      </AppBar>
     </>
  )
};

export default NavBar;
