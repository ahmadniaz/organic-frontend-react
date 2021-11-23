import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import { toast, Bounce } from "react-toastify";

import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types";

const UserState = (props) => {
  const initialState = {
    user: "",
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const showError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      transition: Bounce,
      theme: "colored",
      pauseOnFocusLoss: false,
      type: "error",
    });
  };
  // Match User
  const handleSubmit = async (values) => {
    const { email, password } = values;

    try {
      const response = await axios.post("https://strapi-backend-organic.herokuapp.com/auth/local/", {
        identifier: email,
        password,
        withCredentials: true,
      });
      console.log(response, "response is working");
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      showError("Wrong Email Or Password");
    }
  };

  const handleLogout = () => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        handleSubmit,
        handleLogout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
