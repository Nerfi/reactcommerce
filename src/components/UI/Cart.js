import React,{useContext} from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import useStyles from './CartStyles';
import {CommerceContextAPI} from '../commerce/commerce';

const Cart = ({onRemoveFromCart}) => {

  return(
    <>
    <div className="CartComponent">
      <h1 style={{marginTop: '100px'}}> Cart component</h1>
    </div>
    </>
  )
};


export default Cart;
