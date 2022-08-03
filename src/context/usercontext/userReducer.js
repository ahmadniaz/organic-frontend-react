import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types";

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: "",
      };
    default:
      return state;
  }
};

export default userReducer;
