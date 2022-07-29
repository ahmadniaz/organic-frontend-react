import React from "react";
import Grid from "@material-ui/core/Grid";
import { theme } from "../Theme";
import Lime from "../../Assets/Lime.png";
import { Button } from "@material-ui/core";

import useStyles from "./callToActionStyling";

const OrganicDrinks = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ marginTop: "100px", maxHeight: "400px" }}>
        <Grid item xs={6} style={{ display: "flex" }}>
          <div
            style={{
              top: "50px",
              transform: "translate(0%, 20%)",
            }}
          >
            <h3
              className={classes.firstHeading}
              style={{ color: theme.palette.secondary.main }}
            >
              Our Objectives
            </h3>
            <p
              className={classes.paragraph}
              style={{ color: theme.palette.secondary.main }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
              repellat ipsum facere voluptate dicta obcaecati deserunt nobis
              suscipit eaque? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias aut, repellat ipsum facere voluptate
              dicta obcaecati deserunt nobis suscipit eaque?
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "15px",
          }}
        >
          <div className={classes.floatingDiv}>
            <img
              alt="Green Tea"
              src={Lime}
              style={{ height: "300px", width: "350px" }}
            />
          </div>
          <Grid item xs={3}>
            <div
              style={{
                top: "50px",
                transform: "translate(0%, 20%)",
              }}
            >
              <p className={classes.firstHeading}>New</p>
              <p className={classes.secondHeading}>
                Organic
                <br />
                Snack
              </p>
              <Button variant="outlined" className={classes.button}>
                <span> SHOP NOW </span>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default OrganicDrinks;
