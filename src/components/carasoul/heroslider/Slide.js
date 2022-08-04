import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import banner1 from "../../../Assets/banner1.webp";

import useStyles from "./sliderStyling";

const Slide = () => {
  const classes = useStyles();
  return (
    <div style={{ height: "650px" }}>
      <div
        className={classes.mainDiv}
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <Link to="/girls">
          <Button variant="outlined" className={classes.button}>
            <span> CHECK GIRLS CLOTHES </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Slide;
