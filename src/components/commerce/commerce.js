import Commerce from '@chec/commerce.js';
//creating the context for commerce
import React, {useState, createContext, useEffect} from 'react';

const CommerceContextAPI = createContext();

const CommerceContext = (props) =>{

  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [error, setError] = useState(null);

  //commerce instance
  const commerce = new Commerce(process.env.REACT_APP_COMMERCE_API, true);

  const fetchProducts = async () => {
    return commerce.products.list();
  };

  const values = {
    fetchProducts
  }


return(
  <CommerceContextAPI.Provider value={values}>
    {props.children}
  </CommerceContextAPI.Provider>
)

}

export { CommerceContextAPI, CommerceContext };
