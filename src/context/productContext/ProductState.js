import React, { useReducer } from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import axios from "axios";

import {
  GET_PRODUCTS,
  FILTER_MIN_PRODUCTS,
  FILTER_MAX_PRODUCTS,
  FILTER_CATEGORY,
  SORT_PRODUCTS,
  PRODUCT_DETAILS,
  FILTER_CLICK,
  CHANGE_FILTER_STATE,
  CLEAR_FILTER,
  INCREMENT,
  DECREMENT,
  INPUT_CHANGE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_LOADING,
  CART_INCREMENT,
  CART_DECREMENT,
  CHECKOUT_CLICK,
  CHECKOUT_SUCCESS,
} from "../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
    sort: "Sort By",
    min: "",
    max: "",
    category: "all",
    clicked: false,
    error: null,
    clickedProduct: "",
    loading: false,
    num: 0,
    cartItems: [],
    total: 0,
    checkoutProducts: [],
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `https://enigmatic-island-20911.herokuapp.com/api/products?populate=%2A`
      );

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch {
      console.log("this is not workig");
    }
  };

  // SORTING PRODUCTS

  const sortProducts = (text) => {
    dispatch({
      type: SORT_PRODUCTS,
      payload: text,
    });
  };

  //FILTER MinPrice PRODUCTS
  const handleMinChange = (text) => {
    dispatch({
      type: FILTER_MIN_PRODUCTS,
      payload: text,
    });
  };

  //FILTER MaxPrice PRODUCTS
  const handleMaxChange = (text) => {
    dispatch({
      type: FILTER_MAX_PRODUCTS,
      payload: text,
    });
  };

  // FILTER Products By category
  const handleCategory = (text) => {
    dispatch({
      type: FILTER_CATEGORY,
      payload: text,
    });
  };

  //handling filter button
  const handleFilterClick = () => {
    dispatch({
      type: FILTER_CLICK,
      payload: true,
    });
  };

  //change filter click

  const handleClickState = () => {
    dispatch({
      type: CHANGE_FILTER_STATE,
      payload: false,
    });
  };
  //clearing the filter

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  // Getting  single product on click

  const handleProductClick = (product) => {
    dispatch({
      type: PRODUCT_DETAILS,
      payload: product,
    });
  };

  //for getting the cart data

  const handleCheckoutClick = (cartItems, total) => {
    dispatch({
      type: CHECKOUT_CLICK,
      payload: {
        checkoutItems: cartItems,
        total,
      },
    });
  };

  //For increasing products
  const doIncrement = async (num, clickedProduct) => {
    dispatch({
      type: INCREMENT,
      payload: {
        num: num + 1,
        clickedProduct,
      },
    });
  };

  //For decreasing Products
  const doDecrement = async (num, clickedProduct) => {
    if (num === 1) {
      alert("Minumum Limit Reached");
    } else {
      dispatch({
        type: DECREMENT,
        payload: {
          num: num - 1,
          clickedProduct,
        },
      });
    }
  };

  //for loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  //for directly input the number of products
  const handleInputChange = (e) => {
    dispatch({
      type: INPUT_CHANGE,
      payload: e.target.value,
    });
  };
  // Handling Add To Cart Products Click
  const handleAddToCart = async (id, num, total) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://enigmatic-island-20911.herokuapp.com/api/products/${id}?populate=*`
      );

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: res.data.data,
          num,
          total,
        },
      });
    } catch {
      console.log("this is not working");
    }
  };

  // Handling Add To Cart Men Click
  const handleAddToCartMen = async (id, num, total) => {
    console.log(id, "product id");
    try {
      setLoading();
      const res = await axios.get(
        `https://enigmatic-island-20911.herokuapp.com/api/men/${id}?populate=*`
      );

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: res.data.data,
          num,
          total,
        },
      });
    } catch {
      console.log("this is not working");
    }
  };

  // Handling Add To Cart Boys Click
  const handleAddToCartBoys = async (id, num, total) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://enigmatic-island-20911.herokuapp.com/api/boys/${id}?populate=*`
      );

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: res.data.data,
          num,
          total,
        },
      });
    } catch {
      console.log("this is not working");
    }
  };

  // Handling Add To Cart Girls Click
  const handleAddToCartGirls = async (id, num, total) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://enigmatic-island-20911.herokuapp.com/api/girls/${id}?populate=*`
      );

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: res.data.data,
          num,
          total,
        },
      });
    } catch {
      console.log("this is not working");
    }
  };

  // Handling Add To Cart Women Click
  const handleAddToCartWomen = async (id, num, total) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://enigmatic-island-20911.herokuapp.com/api/women/${id}?populate=*`
      );

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: res.data.data,
          num,
          total,
        },
      });
    } catch {
      console.log("this is not working");
    }
  };

  // For handling increment in tha Cart Page

  const doCartIncrement = (quantity, prod) => {
    dispatch({
      type: CART_INCREMENT,
      payload: {
        quantity: quantity,
        prod,
      },
    });
  };

  // For handling Decrement in the cart page

  const doCartDecrement = (quantity, prod) => {
    if (quantity === 1) {
      alert("Minimum limit reached");
    } else {
      dispatch({
        type: CART_DECREMENT,
        payload: {
          quantity: quantity,
          prod,
        },
      });
    }
  };
  // For Removing Item from Cart

  const removeCartItem = (product, num, total) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        product,
        total,
        num,
      },
    });
  };

  const onCheckoutSuccess = () => {
    dispatch({
      type: CHECKOUT_SUCCESS,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        sort: state.sort,
        max: state.max,
        min: state.min,
        clicked: state.clicked,
        category: state.category,
        checked: state.checked,
        total: state.total,
        clickedProduct: state.clickedProduct,
        value: state.value,
        num: state.num,
        cartItems: state.cartItems,
        loading: state.loading,
        checkoutProducts: state.checkoutProducts,
        getProducts,
        sortProducts,
        setLoading,
        handleMinChange,
        handleMaxChange,
        handleCategory,
        handleProductClick,
        handleFilterClick,
        handleClickState,
        clearFilter,
        doIncrement,
        doDecrement,
        handleInputChange,
        handleAddToCart,
        removeCartItem,
        doCartIncrement,
        doCartDecrement,
        handleCheckoutClick,
        handleAddToCartWomen,
        handleAddToCartGirls,
        handleAddToCartBoys,
        handleAddToCartMen,
        onCheckoutSuccess,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
