import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import ProductContext from "../../context/productContext/productContext";
import BuyIcon from "../../Assets/svg/BuyIcon.svg";
import { useStyles } from "./ProductStyling";
import Loader from "react-spinners/PropagateLoader";
import { Button } from "@material-ui/core";
import ToggleFilter from "../filter/ToggleFilter";
import { Link, NavLink } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const MenProducts = () => {
  const productLimit = 8;
  const productContext = useContext(ProductContext);
  const {
    min,
    max,
    category,
    sort,
    sortProducts,
    handleProductClick,
    clicked,
    handleClickState,
    clearFilter,
    handleAddToCartMen,

  } = productContext;

  const num = 1;

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(productLimit);

  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://enigmatic-island-20911.herokuapp.com/api/men?populate=%2A`
    );
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();

    //eslint-disable-next-line
  }, []);

  const handleChange = () => {
    setNext(next + productLimit);
  };

  const sliced = products.data && products.data.slice(0, next);

  const handleSort = (e) => {
    e.preventDefault();
    sortProducts(e.target.value);
  };

  useEffect(() => {
    let filteredProducts = products;
    if (sort !== "Sort By") {
      filteredProducts = filteredProducts.sort((a, b) =>
        b.created_at.localeCompare(a.created_at)
      );
    } else if (sort === "Sort By") {
      filteredProducts = products;
    }
    if (clicked) {
      if (category !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.categories[0].name === category
        );
      }
      if (min !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.price > min
        );
      }

      if (max !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.price < max
        );
      }
      handleClickState();
    }

    setProducts(filteredProducts);
    clearFilter();
    //eslint-disable-next-line
  }, [sort, clicked]);

  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <ToggleFilter />
      <Grid container>
        <Grid item xs={12} style={{ display: "flex", marginTop: "50px" }}>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <p className={classes.firstHeading} style={{ fontSize: "26px" }}>
                All Products
              </p>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid item xs={12} style={{ display: "flex", marginLeft: "50%" }}>
              <Grid item xs={5} style={{ alignSelf: "flex-end" }}>
                <p className={classes.firstHeading}>Sort by:</p>
              </Grid>
              <Grid item xs={7}>
                <FormControl
                  style={{ minWidth: "150px" }}
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-label">sort by</InputLabel>
                  <Select value={sort} onChange={handleSort}>
                    <MenuItem value="Latest Products">
                      {" "}
                      Latest Products
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={3}>
          {products.data &&
            sliced.map((product) => (
              <Grid item xs={3} key={product.attributes.id}>
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
                        onClick={() => handleAddToCartMen(product.id, num)}
                      />
                    </Link>
                  </Grid>
                </div>
              </Grid>
            ))}
        </Grid>
      )}
      <div style={{ textAlign: "center", margin: "50px" }}>
      {next === products.length || next > products.length ? (
          <Button onClick={handleChange} className={classes.loadMore}>
            No More Products to Load
          </Button>
        ) : (
          <Button onClick={handleChange} className={classes.loadMore}>
            LOAD MORE
          </Button>
        )}
      </div>
    </div>
  );
};
export default MenProducts;
