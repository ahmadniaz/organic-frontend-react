import React from "react";
import Grid from "@material-ui/core/Grid";
import { theme } from "../Theme";
import Borkely from "../../Assets/Borkely.png";
import { Button } from "@material-ui/core";

import useStyles from "./callToActionStyling";

const OrganicMeals = () => {
 
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{ marginTop: "100px", maxHeight: "400px" }}
      >
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            backgroundColor: theme.palette.primary.dark,
            borderRadius: "15px",
          }}
        >
          <Grid item xs={4}>
            <div
              style={{
                top: "50px",
                transform: "translate(60%, 20%)",
              }}
            >
              <p className={classes.firstHeading}>New</p>
              <p className={classes.secondHeading}>
                Organic
                <br />
                Meals
              </p>
              <Button variant="outlined" className={classes.button}>
                <span> SHOP NOW </span>
              </Button>
            </div>
          </Grid>

          <div className={classes.floatingDiv}>
            <img
              alt="Green Tea"
              src={Borkely}
              style={{ height: "350px", width: "400px" }}
            />
          </div>
        </Grid>
        <Grid item xs={6} style={{ display: "flex" }}>
          <div
            style={{
              top: "50px",
              transform: "translate(5%, 10%)",
            }}
          >
            <h3
              className={classes.firstHeading}
              style={{ color: theme.palette.secondary.main }}
            >
              Our Mission
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
      </Grid>
    </>
  );
};
export default OrganicMeals;
