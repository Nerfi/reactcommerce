import React,{useState, useEffect, useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {CommerceContextAPI} from '../commerce/commerce';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CircularProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';



const SingleItem = () => {

  const [singleItem, setSingleITem] = useState({});
  const [error, setError] = useState(null);
  const {params} = useRouteMatch();
  const {fetchSingleItem, handleAddToCart} = useContext(CommerceContextAPI);

  useEffect(() => {

      const fetchSelectedItem = async () => {
        try {
        const item = await fetchSingleItem(params.id)
        setSingleITem(item);

        } catch(e) {
          setError(e.message);
        }
      };

      fetchSelectedItem();


  },[params.id]);


  return(
    <>
    <div className="singleItemContainer" style={{marginTop: '200px'}}>

    <Card className="root">
      <CardMedia className="media" image={singleItem?.media?.source} title={singleItem.name} />
      <CardContent>
        <div className="cardContent">
          <Typography gutterBottom variant="h5" component="h2" className="typography">
             {singleItem.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className="typography">
            ${singleItem?.price?.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: singleItem.description }} className="typography" variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className="cardActions">
        <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(singleItem.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>



    </div>
  </>
  )
};


export default SingleItem;
