import React, { useState } from "react";
import { useLocation } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";

import { NavLink, Link } from "react-router-dom";

import useStyles from "./layoutStyling";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Menu(props) {
  const [fix, setFix] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const setFixed = () => {
    if (window.scrollY >= 30) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);
  const classes = useStyles();
  return (
    <Grid container>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.bar}>
          <Toolbar disableGutters className={fix ? classes.fixedNav : ""}>
            <div>
              {path === "/login" ? (
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/login"
                >
                  {" "}
                  <h1 className={fix ? classes.scrollh1 : classes.h1}>Login</h1>
                </Link>
              ) : (
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/signup"
                >
                  <h1 className={fix ? classes.scrollh1 : classes.h1}>
                    SignUp
                  </h1>
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Grid>
  );
}
