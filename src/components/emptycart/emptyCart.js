import React from "react";
import empty from "../../Assets/empty.png";

import useStyles from "./emptyCartStyling";

const EmptyCart = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <h1 className={classes.title}>
        You Cart is Empty. Please Add some products in it!
      </h1>
      <img alt="Empty Cart" src={empty} />
    </div>
  );
};

export default EmptyCart;
