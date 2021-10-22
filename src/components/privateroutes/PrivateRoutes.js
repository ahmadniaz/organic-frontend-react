import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../context/usercontext/userContext";
const PrivateRoutes = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !user ? <Redirect to="./login" /> : <Component {...props} />
        }
      />
    </div>
  );
};

export default PrivateRoutes;
