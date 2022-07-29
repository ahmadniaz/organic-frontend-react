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
      <Grid container className={classes.mainGrid}>
        <Grid item xs={3} style={{ display: "flex" }}>
          <div>
            <img alt="Truck" src={FreeDelivery} style={{ height: "50px" }} />
          </div>
          <div>
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
        <Grid item xs={3} style={{ display: "flex" }}>
          <div>
            <img alt="Truck" src={warranty} style={{ height: "50px" }} />
          </div>
          <div>
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
        <Grid item xs={3} style={{ display: "flex" }}>
          <div>
            <img alt="Truck" src={headphones} style={{ height: "50px" }} />
          </div>
          <div>
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
        <Grid item xs={3} style={{ display: "flex" }}>
          <div>
            <img alt="Truck" src={creditCard} style={{ height: "50px" }} />
          </div>
          <div>
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
