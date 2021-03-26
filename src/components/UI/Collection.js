import React,{useState,useEffect, useContext} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,CssBaseline } from '@material-ui/core';
import './Collection.css';
import {CommerceContextAPI} from '../commerce/commerce';

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

//console.log({collection.data.media.source[0]})
    const classes  = {
    media: {
      height: 260
    },
    cartItem: {
      backgroundColor: 'red'
    }
  }
  return(
    <>
    <CssBaseline/>
    <div className="collectionContainer">
    {collection.data?.map(item => {

      return(
        <Card className={classes.cartItem}>
      <CardMedia className={classes.media} image={item?.media.source} src={item.assets?.url} title={item.name} />
              <CardContent className={"classes.cardContent"}>
                <Typography variant="h7" className={"classes.typography"}>{item.name}</Typography>
                <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
                 <p>{item.description}</p>
              </CardContent>
              <CardActions className={"classes.cardActions"}>
                <div className={"classes.buttons"}>
                </div>
                <Button variant="contained" type="button" onClick={""/*() => handleRemoveFromCart(item.id)*/}>Buy Now</Button>
              </CardActions>
           </Card>
        )
    })}

    </div>
    </>
  )
};


export default Collection;
