import React,{useContext} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import {CommerceContextAPI} from '../commerce/commerce';
import {Link,useRouteMatch} from 'react-router-dom';
import useStyles from './CardStyles';

const Product = ({ product }) => {

  const classes = useStyles();
  const {handleAddToCart} = useContext(CommerceContextAPI);
  const onAddToCart = () => handleAddToCart(product.id, 1);


  return (

    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product?.media?.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
             <Link  to={`item/${product.id}`}>{product.name}</Link>
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product?.price.formatted }
          </Typography>
        </div>
        <Typography className={classes.typography} dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>

  );
};

export default Product;

