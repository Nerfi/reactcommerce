import React from 'react';
import './LandingPage.css';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Collection from './Collection';

const LandingPage = () => {
  return(
    <div className="landingPageContainer">
      <div className="banner">
       <div className="homeShape"></div>
        <img className="bannerImg" src="https://raw.githubusercontent.com/bedimcode/responsive-ecommerce-website-sneakers/master/assets/img/imghome.png" alt="bannerIMg"/>
      </div>

      <div className="landingPageData">
        <span className="homeNew">New in</span>
        <h1 className="homeTitle">YEEZY BOOST <br/> SPLY - 360 </h1>
        <p className="homesDescription">Explore the new collection of sneakers</p>
        <Button variant="contained" href="#" className="landingButton" style={{backgroundColor: 'black', color: 'white', display:'inlineBlock', padding: '1.25rem 1.5rem ', borderRadius: '.5rem'}}>
           Explore Now
         </Button>
        </div>

        <div className="featuresSection section" id="featured">

          <h2 className="sectionTitle">FEATURED</h2>

          <div className="featuredContainer">
         <Card className="cart-item">
          <CardMedia image={'https://raw.githubusercontent.com/bedimcode/responsive-ecommerce-website-sneakers/master/assets/img/imghome.png'}  alt={"item.name"} className={"classes.media"} />
          <CardContent className={"classes.cardContent"}>
            <Typography variant="h7" className={"classes.typography"}>{"item.name"} item name</Typography>
            <Typography variant="h5">$$454{"item.line_total.formatted_with_symbol"}</Typography>
          </CardContent>
          <CardActions className={"classes.cardActions"}>
            <div className={"classes.buttons"}>
              <Button type="button" size="small" onClick={""/*() => handleUpdateCartQty(item.id, item.quantity - 1)*/}>-</Button>
              <Typography>&nbsp;{"item.quantity"}4&nbsp;</Typography>
              <Button type="button" size="small" onClick={""/*() => handleUpdateCartQty(item.id, item.quantity + 1)*/}>+</Button>
            </div>
            <Button variant="contained" type="button" color="secondary" onClick={""/*() => handleRemoveFromCart(item.id)*/}>Remove</Button>
          </CardActions>
       </Card>

          </div>


         <div className="featuredContainer">

         <Card className="cart-item">
          <CardMedia image={'https://raw.githubusercontent.com/bedimcode/responsive-ecommerce-website-sneakers/master/assets/img/imghome.png'}  alt={"item.name"} className={"classes.media"} />
          <CardContent className={"classes.cardContent"}>
            <Typography variant="h7" className={"classes.typography"}>{"item.name"} item name</Typography>
            <Typography variant="h5">$$454{"item.line_total.formatted_with_symbol"}</Typography>
          </CardContent>
          <CardActions className={"classes.cardActions"}>
            <div className={"classes.buttons"}>
              <Button type="button" size="small" onClick={""/*() => handleUpdateCartQty(item.id, item.quantity - 1)*/}>-</Button>
              <Typography>&nbsp;{"item.quantity"}4&nbsp;</Typography>
              <Button type="button" size="small" onClick={""/*() => handleUpdateCartQty(item.id, item.quantity + 1)*/}>+</Button>
            </div>
            <Button variant="contained" type="button" color="secondary" onClick={""/*() => handleRemoveFromCart(item.id)*/}>Remove</Button>
          </CardActions>
       </Card>

     </div>



        </div>
        <Collection></Collection>

    </div>
  )
};

export default LandingPage;
