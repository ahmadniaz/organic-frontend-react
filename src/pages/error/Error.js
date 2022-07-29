import React from "react";
import error from "../../Assets/error.png";

import useStyles from "./errorStyling";

const Error = () => {
  
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={classes.title}>
        The page you are Looking For Doesn't Exist
      </h1>
      <img src={error} alt="Error" width="1510px" height="700px" />
    </div>
  );
};

export default Error;
