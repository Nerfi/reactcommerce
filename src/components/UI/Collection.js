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
  console.log(collection.data?.map(i => i.assets))
  return(
    <>
    <CssBaseline/>
    <div className="collectionContainer">
    {collection?.data?.map(item => {

      return(
        <Card className="cart-item">
      <CardMedia className={"classes.media"} image={item?.assets.url} src={item.assets?.url} title={item.name} />
      <img src={item.media?.source } alt=""/>
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
