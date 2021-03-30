import React,{useState, useEffect, useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {CommerceContextAPI} from '../commerce/commerce';


const SingleItem = () => {
  const [singleItem, setSingleITem] = useState({});
  const [error, setError] = useState(null);
  const {params} = useRouteMatch();

  useEffect(() => {

  },[params.id]);



  return(
    <>
    <h1>WOrkign single items LOCOOO</h1>
  </>
  )
};


export default SingleItem;
