import React from "react";
import banner4 from "../../../Assets/banner4.webp";

import useStyles from "./sliderStyling";

const Slide4 = () => {
  const classes = useStyles();

  return (
    <div style={{ height: "650px" }}>
      <div
        className={classes.mainDiv}
        style={{ backgroundImage: `url(${banner4})` }}
      ></div>
    </div>
  );
};
export default Slide4;
