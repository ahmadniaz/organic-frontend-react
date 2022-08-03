import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProductContext from "../../context/productContext/productContext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import NewsLetter from "../../components/newsletter/NewsLetter";

import useStyles from "./productDescriptionStyling";

const ProductDescription = () => {
  const productContext = useContext(ProductContext);
  const { clickedProduct, handleInputChange, handleAddToCart, total } =
    productContext;
  const [curProd, setCurProd] = useState(clickedProduct);
  const [value, setValue] = useState(1);

  const doIncrement = () => {
    setValue(value + 1);
  };

  const doDecrement = () => {
    if (value === 1) {
      alert("Minimum Limit reached");
    } else {
      setValue(value - 1);
    }
  };

  console.log(curProd, "current product");

  // useEffect(() => {
  //     const localProducts = JSON.parse(localStorage.getItem("curProd")) || [];
  //     setCurProd(localProducts)

  // }, []);

  // useEffect(() => {

  //     if (clickedProduct) {
  //         localStorage.setItem("curProd", JSON.stringify(curProd || []));
  //     }
  //     //eslint-disable-next-line
  // }, []);
  // window.onunload = () => {
  //     // Clear the local storage
  //     localStorage.clear()
  // }

  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Grid container spacing={3} style={{ display: "contents" }}>
        <div>
          <h1 className={classes.title}>
            {curProd && curProd.attributes.title}
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          <Grid item xs={5}>
            <div className={classes.productDiv}>
              <img
                alt="product1"
                src={`${
                  curProd && curProd.attributes.image.data.attributes.url
                }`}
                style={{ width: "75%" }}
              />
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className={classes.description}>
              <div>
                <h3 className={classes.firstHeading}>Description</h3>
              </div>
              <div>
                <p className={classes.paragraph}>
                  {curProd && curProd.attributes.description}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className={classes.firstHeading}>Quantity:</p>
                <div style={{ textAlign: "center" }}>
                  <RemoveIcon
                    style={{ cursor: "pointer" }}
                    onClick={doDecrement}
                  />
                  <input
                    className={classes.input}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                  />
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={doIncrement}
                  />
                </div>
              </div>
              <Grid container>
                <Grid item xs={3} style={{ marginLeft: "2%" }}>
                  <h3 className={classes.quantity}>
                    PRICE:
                    <span className={classes.span}>
                      {" "}
                      {curProd && curProd.attributes.price}pkr{" "}
                    </span>
                  </h3>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ textAlign: "end", marginLeft: "25%" }}
                >
                  <Link className={classes.tab} as={NavLink} to="/cart">
                    <Button
                      variant="outlined"
                      className={classes.button}
                      onClick={() =>
                        handleAddToCart(curProd && curProd.id, value, total)
                      }
                    >
                      <span> ADD TO CART </span>
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
      <NewsLetter />
    </div>
  );
};
export default ProductDescription;
