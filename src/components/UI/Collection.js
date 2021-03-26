import React,{useState,useEffect, useContext} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,CssBaseline } from '@material-ui/core';
import './Collection.css';
import {CommerceContextAPI} from '../commerce/commerce';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Collection = () => {

  const [collection, setCollection] = useState([]);
  const [error, setError] = useState(null);
  const {fetchProducts} = useContext(CommerceContextAPI);

  useEffect(() => {

    const fetchCollection = async () => {

      try {
        const items = await fetchProducts();
        setCollection(items);

      }catch(error){
        setError(error.message);
      }
    }

    fetchCollection();
  },[]);


  return(
    <>
    <CssBaseline/>
    <div className="collectionContainer">
        <h2 className="collectionTitle">NEW COLLECTION</h2>
    {collection.data?.slice(0,8).map(item => {

      return(
        <>
       <Card className="cart-itemm" >
              <CardMedia image={item.media?.source}  alt={item.name} className="media" />
              <CardContent className="cardContent">
                <Typography variant="h7" className="typography">{item.name}</Typography>
                <Typography variant="h5">{item.line_total?.formatted_with_symbol}</Typography>
               <Typography dangerouslySetInnerHTML={{ __html: item.description }} className="typography" variant="body2" color="textSecondary" component="p" />

              </CardContent>
              <CardActions className="cardActionss">
                <div className="buttons">
                  <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                </div>
                <div style={{display: 'flex', margin: '10px', padding: '10px'}}>
                <h3 >Add To Cart <ArrowForwardIcon style={{position: 'relative', top: '5.5px'}}/> </h3>

                </div>
                <Button variant="contained" type="button" color="secondary" onClick={""/*() => handleRemoveFromCart(item.id)*/}>See Product</Button>
              </CardActions>
           </Card>
        </>
        )
    })}

    </div>
    </>
  )
};


export default Collection;
