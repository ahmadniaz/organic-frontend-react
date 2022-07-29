import React from "react";
import banner3 from "../../../Assets/banner3.webp";

import useStyles from "./sliderStyling";

const Slide3 = () => {
 
  const classes = useStyles();

  return (
    <div style={{ height: "650px" }}>
      <div
        className={classes.mainDiv}
        style={{ backgroundImage: `url(${banner3})` }}
      ></div>
    </div>
  );
};
export default Slide3;
