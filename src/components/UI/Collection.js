import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,CssBaseline } from '@material-ui/core';
import './Collection.css';

const Collection = () => {
  return(
    <>
    <CssBaseline/>
    <div className="collectionContainer">
      <Card className="cart-item">
            <CardMedia image={'https://raw.githubusercontent.com/bedimcode/responsive-ecommerce-website-sneakers/master/assets/img/imghome.png'}  alt={"item.name"} className={"classes.media"} />
            <CardContent className={"classes.cardContent"}>
              <Typography variant="h7" className={"classes.typography"}>{"item.name"} item name</Typography>
              <Typography variant="h5">$$454{"item.line_total.formatted_with_symbol"}</Typography>
               <p>Here will go some description</p>
            </CardContent>
            <CardActions className={"classes.cardActions"}>
              <div className={"classes.buttons"}>
              </div>
              <Button variant="contained" type="button" onClick={""/*() => handleRemoveFromCart(item.id)*/}>Buy Now</Button>
            </CardActions>
         </Card>

         <Card className="cart-item">
            <CardMedia image={'https://raw.githubusercontent.com/bedimcode/responsive-ecommerce-website-sneakers/master/assets/img/imghome.png'}  alt={"item.name"} className={"classes.media"} />
            <CardContent className={"classes.cardContent"}>
              <Typography variant="h7" className={"classes.typography"}>{"item.name"} item name</Typography>
              <Typography variant="h5">$$454{"item.line_total.formatted_with_symbol"}</Typography>
               <p>Here will go some description</p>
            </CardContent>
            <CardActions className={"classes.cardActions"}>
              <div className={"classes.buttons"}>
              </div>
              <Button variant="contained" type="button" onClick={""/*() => handleRemoveFromCart(item.id)*/}>Buy Now</Button>
            </CardActions>
         </Card>

         <Card className="cart-item">
            <CardMedia image={'https://raw.githubusercontent.com/bedimcode/responsive-ecommerce-website-sneakers/master/assets/img/imghome.png'}  alt={"item.name"} className={"classes.media"} />
            <CardContent className={"classes.cardContent"}>
              <Typography variant="h7" className={"classes.typography"}>{"item.name"} item name</Typography>
              <Typography variant="h5">$$454{"item.line_total.formatted_with_symbol"}</Typography>
               <p>Here will go some description</p>
            </CardContent>
            <CardActions className={"classes.cardActions"}>
              <div className={"classes.buttons"}>
              </div>
              <Button variant="contained" type="button" onClick={""/*() => handleRemoveFromCart(item.id)*/}>Buy Now</Button>
            </CardActions>
         </Card>
    </div>
    </>
  )
};


export default Collection;
