import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { theme } from "../Theme";

import useStyles from "./newsletterStyling";



const NewsLetter = () => {
 

  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.mainGrid}
        container
        style={{
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "15px",
          marginTop: "15%",
          maxHeight: "300px",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <div
            style={{
              padding: "30px",
            }}
          >
            <p className={classes.secondHeading}>Subscribe To Our Email</p>
            <p className={classes.thirdHeading}>For Latest News and Updates</p>
            <input
              className={classes.inputField}
              type="text"
              placeholder="enter your email here"
            />
            <Button className={classes.button}>SUBSCRIBE</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default NewsLetter;
