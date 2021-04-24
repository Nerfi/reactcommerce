import React,{useState,useEffect, useContext} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,CssBaseline } from '@material-ui/core';
import {CommerceContextAPI} from '../commerce/commerce';
import Product from './Card';

const MasVendidos = () => {

  const [masVendidos, setMasVendidos] = useState([]);
  const [error, setError] = useState(null);

  const {fetchCategories} = useContext(CommerceContextAPI);


  useEffect(() => {


    const fetchMasVendidos = async () => {
      try {

          const products = await fetchCategories()
          setMasVendidos(products.data)

      }catch(e) {
        setError(e.message);
      }


    };

    fetchMasVendidos();
  },[]);

  return(
    <>
    {error && error}
    <div className="masVendidosHeaderContainer">
     <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px', padding: '30px'}}>Mas Vendidos</h1>
     <a href="/mas/vendidos" style={{display: 'flex', justifyContent: 'flex-end'}}> see all </a>
    </div>
    {masVendidos?.slice(0,4).map(item => {
     return <Product key={item.id} product={item}/>

    })}

    </>
  )
};

export default MasVendidos;
