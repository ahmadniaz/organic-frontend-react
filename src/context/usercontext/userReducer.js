import { LOGIN_SUCCESS } from "../types";

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
        console.log(action.payload, "response is getting dispatched")
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
