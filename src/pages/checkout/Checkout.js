import React from "react";
import StripeWrapper from "../../components/stripe/CheckoutForm";
import useStyles from "./checkoutStyling";

const Checkout = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainDiv}></div>
      <div className={classes.secondDiv}>
        <StripeWrapper />
      </div>
    </>
  );
};

export default Checkout;
