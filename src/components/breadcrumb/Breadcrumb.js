import React, { useState } from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { theme } from "../Theme";

const Breadcrumbs = (props) => {
  const [fix, setFix] = useState(false);

  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);

  const setFixed = () => {
    if (window.scrollY >= 30) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);

  return (
    <MUIBreadcrumbs
      style={{ marginLeft: "5%", color: "red" }}
      separator="›"
      aria-label="breadcrumb"
    >
      {pathnames.length > 0 ? (
        <Link
          style={
            fix
              ? {
                  color: "white",
                  ...theme.typography.secondary,
                  cursor: "pointer",
                }
              : {
                  color: theme.palette.secondary.main,
                  ...theme.typography.secondary,
                  cursor: "pointer",
                }
          }
          onClick={() => history.push("/")}
        >
          Home
        </Link>
      ) : (
        <Typography
          style={{ color: theme.palette.secondary.dark, visibility: "hidden" }}
        >
          {" "}
          Home{" "}
        </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography
            style={{
              color: theme.palette.secondary.dark,
              ...theme.typography.secondary,
            }}
            key={name}
          >
            {name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
          </Typography>
        ) : (
          <Link
            style={{
              color: theme.palette.secondary.main,
              cursor: "pointer",
              ...theme.typography.secondary,
            }}
            key={name}
            onClick={() => history.push(routeTo)}
          >
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
