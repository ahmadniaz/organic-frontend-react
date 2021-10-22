import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import { toast, Bounce } from "react-toastify";

import { LOGIN_SUCCESS } from "../types";

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
  // GET contacts
  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const response = await axios.post("http://localhost:1337/auth/local/", {
        identifier: email,
        password,
      });
      const data = response;
      if (data.message) {
        showError("Wrong Email or Password");
        return;
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      showError("Wrong Email OR Password" );
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        handleSubmit,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
