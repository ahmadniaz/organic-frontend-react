import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ProductContext from "../../context/productContext/productContext";
import BuyIcon from "../../Assets/svg/BuyIcon.svg";

import useStyles from "./ProductStyling";

const BestSellerProducts = () => {
  const productContext = useContext(ProductContext);
  const { products, getProducts, handleAddToCart, handleProductClick } =
    productContext;

  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  const num = 1;

  const classes = useStyles();
  return (
    <div className={classes.mainGrid}>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <p className={classes.FirstHeading}>Best Seller Products</p>
            <p
              className={classes.FirstHeading}
              style={{ fontSize: "18px", fontWeight: 500, marginTop: 0 }}
            >
              The best selling products of our clothing store
            </p>
          </div>
          <div>
            <Link className={classes.tab} as={NavLink} to="/store">
              <Button className={classes.button}>SHOP MORE</Button>
            </Link>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {products.data &&
          products.data.slice(0, 8).map((product) => (
            <Grid item xs={3} key={product.attributes.title}>
              <div className={classes.productDiv}>
                <img
                  alt="product1"
                  src={`${product.attributes.image.data.attributes.url}`}
                  style={{ width: "95%" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <Grid item xs={10}>
                  <Link
                    className={classes.tab}
                    as={NavLink}
                    to="/productdescription"
                  >
                    <p
                      className={classes.productTitle}
                      onClick={() => handleProductClick(product)}
                    >
                      {product.attributes.title}
                    </p>
                  </Link>
                  <p className={classes.productPrice}>
                    {product.attributes.price}.00pkr
                  </p>
                </Grid>
                <Grid item xs={2}>
                  <Link className={classes.tab} as={NavLink} to="/cart">
                    <img
                      alt="Cart Icon"
                      className={classes.bagIcon}
                      src={BuyIcon}
                      onClick={() => handleAddToCart(product.id, num)}
                    />
                  </Link>
                </Grid>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
export default BestSellerProducts;
