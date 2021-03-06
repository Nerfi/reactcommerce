import React, {useState, useEffect, useContext} from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';
//importing commerce
import {CommerceContextAPI} from '../commerce/commerce';

const steps = ['Shipping address', 'Payment details'];

const CheckoutComponent = () => {

  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState(null);
  //using the commerce context
  const {commerce, cart, order} = useContext(CommerceContextAPI);
  //checking the steps we are in
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)




useEffect(() => {

    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch(error) {

        if (activeStep !== steps.length) history.push('/');
          setError(error.message)
        }
      };

      generateToken();
    }
  }, [cart]);


console.log({checkoutToken}, 'checkout') //it does exist


    let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    );
  }


  const test = (data) => {
    setShippingData(data);

    nextStep();
  };


const Form = () => (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} next={test} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData}  />);







  return(
    <>
    <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  )
};

export default CheckoutComponent
