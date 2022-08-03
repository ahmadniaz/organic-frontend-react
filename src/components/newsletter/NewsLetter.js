import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import useStyles from "./newsletterStyling";

const NewsLetter = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.mainGrid} container>
        <Grid item xs={12}>
          <div
            style={{
              padding: "60px",
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
