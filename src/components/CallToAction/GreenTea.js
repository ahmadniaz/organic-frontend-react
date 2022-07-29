import React from "react";
import Grid from "@material-ui/core/Grid";
import { theme } from "../Theme";
import GreenTea from "../../Assets/GreenTea.png";
import { Button } from "@material-ui/core";

import useStyles from "./callToActionStyling";

const GreenTeaSection = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.mainGrid}
        style={{
          backgroundColor: theme.palette.secondary.contrastText,
          borderRadius: "15px",
          marginTop: "25%",
          maxHeight: "400px",
        }}
      >
        <Grid item xs={12} style={{ display: "flex" }}>
          <div className={classes.floatingDiv}>
            <img alt="Green Tea" src={GreenTea} style={{ width: "85%" }} />
          </div>
          <div style={{ paddingRight: "40px", paddingTop: "40px" }}>
            <p className={classes.firstHeading}>Enjoy</p>
            <p className={classes.secondHeading}>BEST</p>
            <p className={classes.thirdHeading}>GREEN TEA</p>
            <p className={classes.fourthHeading}>
              Our purest and finest Green Tea collection is available in our
              online Store
            </p>
            <Button variant="outlined" className={classes.button}>
              <span> SHOP NOW </span>
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default GreenTeaSection;
