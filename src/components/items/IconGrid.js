import React from "react";
import Grid from "@material-ui/core/Grid";
import FreeDelivery from "../../Assets/svg/FreeDelivery.svg";
import warranty from "../../Assets/svg/warranty.svg";
import headphones from "../../Assets/svg/headphones.svg";
import creditCard from "../../Assets/svg/creditCard.svg";

import useStyles from "./itemsGridStyling";

const IconGrid = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container xs={12} sm={6} md={12} className={classes.mainGrid}>
        <Grid item xs={6} sm={6} md={6} lg={3} className={classes.iconGrid}>
          <div style={{ display: "block" }}>
            <img alt="Truck" src={FreeDelivery} style={{ height: "50px" }} />
            <p
              className={classes.p2}
              style={{ marginBottom: "2px", fontWeight: "bold" }}
            >
              CountryWide Shipping
            </p>
            <p
              className={classes.p2}
              style={{ fontSize: "14px", marginTop: "1px" }}
            >
              CountryWide Shipping on all orders
            </p>
          </div>
        </Grid>
        <Grid item  xs={6} sm={6} md={6} lg={3} className={classes.iconGrid}>
          <div style={{ display: "block" }}>
            <img alt="Truck" src={warranty} style={{ height: "50px" }} />
            <p
              className={classes.p2}
              style={{ marginBottom: "2px", fontWeight: "bold" }}
            >
              Warranty
            </p>
            <p
              className={classes.p2}
              style={{ fontSize: "14px", marginTop: "1px" }}
            >
              Warranty for high quality of Products
            </p>
          </div>
        </Grid>
        <Grid item  xs={6} sm={6} md={6} lg={3} className={classes.iconGrid}>
          <div style={{ display: "block" }}>
            <img alt="Truck" src={headphones} style={{ height: "50px" }} />
            <p
              className={classes.p2}
              style={{ marginBottom: "2px", fontWeight: "bold" }}
            >
              Customer Support
            </p>
            <p
              className={classes.p2}
              style={{ fontSize: "14px", marginTop: "1px" }}
            >
              24/7 customer support
            </p>
          </div>
        </Grid>
        <Grid item  xs={6} sm={6} md={6} lg={3} className={classes.iconGrid}>
          <div style={{ display: "block" }}>
            <img alt="Truck" src={creditCard} style={{ height: "50px" }} />
            <p
              className={classes.p2}
              style={{ marginBottom: "2px", fontWeight: "bold" }}
            >
              Secure Payments
            </p>
            <p
              className={classes.p2}
              style={{ fontSize: "14px", marginTop: "1px" }}
            >
              All payments are secure
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default IconGrid;
