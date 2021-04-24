import React,{useState, useEffect, useContext} from 'react';
import Product from './Card';
import {CommerceContextAPI} from '../commerce/commerce';



const Ofertas = () => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const {fetchCategories} = useContext(CommerceContextAPI);

  useEffect(()  =>  {

    const fetchingFullCategories = async () => {
      try {
        const fetchedItems =  await fetchCategories();
        setItems(fetchedItems.data);

      }catch(e) {
        setError(e.message)
      }
    }

    fetchingFullCategories();


  },[]);

  console.log({items})


  return(
    <>
    <div className="fullMasVendidos" style={{marginTop: '80px'}}>
      <h3 style={{display: 'flex', justifyContent: 'center', margin: '30px'}}>Check our bestseller products</h3>
        {items?.map(item => {
         return <Product product={item}/>
        })
      }
    </div>

    </>
  )

};

export default Ofertas;
