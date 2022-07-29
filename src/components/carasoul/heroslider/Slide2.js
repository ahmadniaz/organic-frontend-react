import React from "react";
import banner2 from "../../../Assets/banner2.webp";
import { Button } from "@material-ui/core";

import useStyles from "./sliderStyling";

const Slide2 = () => {
  const classes = useStyles();

  return (
    <div style={{ height: "650px" }}>
      <div
        className={classes.mainDiv}
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <Button variant="outlined" className={classes.button}>
          <span> CHECK BOYS CLOTHES </span>
        </Button>
      </div>
    </div>
  );
};
export default Slide2;
