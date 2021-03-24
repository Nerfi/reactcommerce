import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from './Images/commerceLogo.png';



const NavBar = () => {

  const history = useHistory();

  //maybe later I will need to delete the lcoation stuff
  const location = useLocation();
  const totalItems = 5;

  return(
    <AppBar position="fixed" className={"classes.appBar"} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={"classes.title"} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={"classes.image"} /> Commerce.js
          </Typography>
          <div className={"classes.grow"} />
          {location.pathname === '/' && (
          <div className={"classes.button"}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
          <div className={""}>
          <div>
            <h2 onClick={() => history.push("/login")}>Login</h2>
            <h2>Mas vendidos</h2>

          </div>
          <div>
            aqui va el ShoppingCart
            recordar hacer flex en todas estas vainas
          </div>
          </div>
        </Toolbar>
      </AppBar>
  )
};

export default NavBar;
