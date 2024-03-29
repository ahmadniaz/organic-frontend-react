import {
  PRODUCTS_ERROR,
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

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FILTER_MIN_PRODUCTS:
      return {
        ...state,
        min: action.payload,
      };
    case FILTER_MAX_PRODUCTS:
      return {
        ...state,
        max: action.payload,
      };
    case FILTER_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SORT_PRODUCTS:
      return {
        ...state,
        sort: action.payload,
      };
    case FILTER_CLICK:
      return {
        ...state,
        clicked: action.payload,
      };
    case CHANGE_FILTER_STATE:
      return {
        ...state,
        clicked: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        min: "",
        max: "",
        category: "all",
      };

    case PRODUCT_DETAILS:
      return {
        ...state,
        clickedProduct: action.payload,
      };

    case CHECKOUT_CLICK:
      return {
        ...state,
        checkoutProducts: action.payload,
      };

    case INCREMENT:
      return {
        ...state,
        num: action.payload.num,
        total: state.total + action.payload.clickedProduct.attributes.price,
      };

    case DECREMENT:
      return {
        ...state,
        num: action.payload.num,
        total: state.total - action.payload.clickedProduct.attributes.price,
      };

    case CART_INCREMENT:
      const modifiedCartItems = state.cartItems.map((item) => {
        if (item.product.id === action.payload.prod.id)
          return {
            num: item.num + 1,
            product: item.product,
          };
        return item;
      });
      return {
        ...state,
        cartItems: modifiedCartItems,
        total: state.total + Number(action.payload.prod.attributes.price),
      };

    case CART_DECREMENT:
      const modifiedCartItem = state.cartItems.map((item) => {
        if (item.product.id === action.payload.prod.id)
          return {
            num: item.num - 1,
            product: item.product,
          };
        return item;
      });
      return {
        ...state,
        cartItems: modifiedCartItem,
        total: state.total - action.payload.prod.attributes.price,
      };

    case INPUT_CHANGE:
      return {
        ...state,
        num: action.payload.num,
      };

    case ADD_TO_CART:
      let productExist = state.cartItems.find(
        (item) =>
          action.payload.product.id === item.product.id &&
          action.payload.product.attributes.title ===
            item.product.attributes.title
      );
      if (!productExist) {
        state.cartItems.push({
          num: action.payload.num,
          product: action.payload.product,
        });
        let newTotal =
          state.total +
          action.payload.product.attributes.price * action.payload.num;

        return {
          ...state,
          cartItems: state.cartItems,
          loading: false,
          total: newTotal,
          num: action.payload.num,
        };
      }

      return {
        ...state,
        num: action.payload.num,
        total:
          state.total +
          productExist.product.attributes.price * productExist.num,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.product.id !== action.payload.product.id
        ),
        total:
          state.total -
          action.payload.product.attributes.price * action.payload.num,
      };

    case CHECKOUT_SUCCESS:
      return {
        ...state,
        cartItems: [],
        total: 0,
      };

    default:
      return state;
  }
};

export default productReducer;
