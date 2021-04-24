import React, {useContext} from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from './Images/commerceLogo.png';
import {CommerceContextAPI} from '../commerce/commerce';
import {UserContext} from '../AuthContext/AuthContext';





const NavBar = () => {

  const history = useHistory();
  const {user,logOutUser} = useContext(UserContext);
  const location = useLocation();
  const { cart } = useContext(CommerceContextAPI);

  return(
     <>
     <AppBar position="fixed" className={"classes.appBar"} color="inherit" >
     <Toolbar>
       <Typography component={Link} to="/" variant="h6">
       <img src={logo} alt="ccommerce" height="25px"/>
       </Typography>

         <div style={{display: 'flex', position: 'relative', left: '9.5rem'}}>
         {
          user ?   <a  href='/' onClick={() => logOutUser()} style={{margin: '2px', position: 'relative', top: '10px'}}>LOG-OUT</a> :  <a  href="/login" style={{margin: '2px', position: 'relative', top: '10px'}}>LOGIN</a>
         }


         <p style={{margin: '2px', position: 'relative', top: '10px'}}>OFFERS</p>

            <IconButton component={Link} to="/cart">
            <Badge badgeContent={cart?.total_items} color="secondary">
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
