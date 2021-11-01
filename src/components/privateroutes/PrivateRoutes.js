import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../context/usercontext/userContext";
const PrivateRoutes = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const [localUser, setLocalUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    const tokenData = JSON.parse(token);
    setLocalUser(tokenData);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !localUser && user ? (
            <Redirect to="/login" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

export default PrivateRoutes;
