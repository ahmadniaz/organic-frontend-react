import React from "react";
import StripeWrapper from "../components/stripe/CheckoutForm";
import { makeStyles } from "@material-ui/styles";

const Checkout = () => {
  const useStyles = makeStyles((theme) => ({
    mainDiv: {
      marginTop: "10%",
    },
    secondDiv: {
      width: "80%",
      margintop: "30%",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  }));
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
