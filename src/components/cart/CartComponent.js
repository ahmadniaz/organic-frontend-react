import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ProductContext from "../../context/productContext/productContext";

import useStyles from "./cartStyling";

const CartComponent = () => {
  const productContext = useContext(ProductContext);
  const { checkoutProducts } = productContext;
  useEffect(() => {
    //eslint-disable-next-line
  }, []);

  const classes = useStyles();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {checkoutProducts &&
          checkoutProducts.checkoutItems.map((product) => (
            <Grid container className={classes.secondDiv}>
              <Grid item xs={6}>
                <img
                  alt="product1"
                  src={`${
                    product &&
                    product.product.attributes.image.data.attributes.url
                  }`}
                  style={{ width: "80%" }}
                />
              </Grid>
              <Grid item xs={6} style={{ alignSelf: "center" }}>
                <h1 className={classes.title}>
                  {product && product.product.attributes.title}
                </h1>
                <h1 className={classes.price}>
                  {" "}
                  {product && product.product.attributes.price}.00 pkr
                </h1>
              </Grid>

              <Grid
                Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignSelf: "center",
                }}
              >
                <Grid item xs={3} style={{ alignSelf: "center" }}></Grid>
                <Grid item xs={1} style={{ alignSelf: "center" }}></Grid>
              </Grid>
              <hr />
            </Grid>
          ))}
        <Grid container className={classes.bottomDiv}>
          <Grid item xs={6} style={{ textAlign: "initial" }}>
            <h3 style={{ fontSize: "20px" }}> Total Products</h3>
            <h1 className={classes.totalTitle}> Total</h1>
          </Grid>
          <Grid item xs={6} style={{ textAlignLast: "right" }}>
            <h3> {checkoutProducts.checkoutItems.length}</h3>
            <h1 className={classes.total}>{checkoutProducts.total}.00 pkr</h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CartComponent;
