import React, {useState, useEffect, useContext} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
//importing custom form component
import FormInput from './CustomTextField';
import {CommerceContextAPI} from '../commerce/commerce';


const AddressForm = ({checkoutToken, next}) => {
  //checkoutToken is the elements that belongs to the cart that
  //we have created as user in the app

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingCountrySubdivision, setShippingCountrySubdivision] = useState([]);
  const [shippingSubdivisions, setShippingSubdivisions] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippinhOption, setShippingOption] = useState('');
  //in order to use useForm
  const methods = useForm();

  const [error, setError] = useState(null);
  const {commerce} = useContext(CommerceContextAPI);

  //fetching the countries that the user can choose from , from commerce.js

  const fetchingShippingCountries = async (checkoutTokenId) => {

    try {
      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

      setShippingCountries(countries);
      console.log({countries});
      setShippingCountry(Object.keys(countries)[0]);
      //setShippingCountry([`germany`, 'France', 'Italy']);
      console.log({shippingCountry})


    } catch(e) {
      setError(e.message);
    }

  };

  const fetchSubdivisions = async (countryCode) => {
    try {
     const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
     setShippingCountrySubdivision(subdivisions);
      //setting a singular subdivision, this will be teh selec subdivision
      setShippingCountrySubdivision(Object.keys(subdivisions)[0]);

    } catch(e) {
      setError(e.message);
    }

  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {

    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchingShippingCountries(checkoutToken.id);
  },[]);

  console.log({checkoutToken}, 'checkoutToken from address form ')

  useEffect(() => {
    if(shippingCountry) fetchSubdivisions(shippingCountry);
   },[shippingCountry]);

  useEffect(() => {
    if(shippingSubdivisions) fetchShippingOptions(checkoutToken.id,shippingCountry, shippingSubdivisions)
  },[shippingSubdivisions])

console.log({shippingCountries}) //undefined
  return(
    <>
    <Typography variant="h6" gutterBottom>Shipping address</Typography>
    <FormProvider {...methods}>
      <form  onSubmit={methods.handleSubmit(data => next({...data,shippingCountry, shippingSubdivisions, shippinhOption}))}>

         <Grid container spacing={3}>
          <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />

        </Grid>

          <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>

              <Select  value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.d}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

             <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivisions} fullWidth onChange={(e) => setShippingSubdivisions(e.target.value)}>
                {Object.entries(shippingCountrySubdivision).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

           <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippinhOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

             <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>

      </form>
    </FormProvider>


    </>
  )




};

export default AddressForm;
