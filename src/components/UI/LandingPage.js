import React, {useState, useEffect, useContext} from 'react';
import './LandingPage.css';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,CssBaseline } from '@material-ui/core';
import Collection from './Collection';
import WomenSection from './WomenSection';
import {CommerceContextAPI} from '../commerce/commerce';

const LandingPage = () => {
  const [items, setItems] = useState([]);
   const {fetchProducts} = useContext(CommerceContextAPI);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsFetch = await fetchProducts();
      setItems(itemsFetch);
    }

    fetchItems();
  },[]);

  return(
    <>
    <CssBaseline/>
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

          {items.data?.slice(0,2).map(item => {
            return  <Card className="cart-item" >
              <CardMedia image={item.media?.source}  alt={item.name} className="media" />
              <CardContent className="cardContent">
                <Typography variant="h7" className="typography">{item.name}</Typography>
                <Typography variant="h5">{item.line_total?.formatted_with_symbol}</Typography>
               <Typography dangerouslySetInnerHTML={{ __html: item.description }} className="typography" variant="body2" color="textSecondary" component="p" />

              </CardContent>
              <CardActions className="cardActions">
                <div className="buttons">
                  <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={""/*() => handleRemoveFromCart(item.id)*/}>See Product</Button>
              </CardActions>
           </Card>

          })}
        </div>
        <Collection/>
        <WomenSection/>

    </div>
  </>
  )
};

export default LandingPage;
