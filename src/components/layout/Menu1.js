import React from "react";
import { useLocation } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";
import ArrowRight from "../../Assets/ArrowRight.png";

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
  const location = useLocation();
  const path = location.pathname;

  const classes = useStyles();
  return (
    <Grid container>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.bar}>
          <Toolbar disableGutters>
            <div className={classes.logo}>
              <Link
                className={classes.tab}
                as={NavLink}
                to={path === "/login" ? "/signup" : "/login"}
              >
                <img
                  alt="company logo"
                  style={{ transform: "translate(70px, 50px)" }}
                  src={ArrowRight}
                />
                <p
                  className={classes.tab}
                  style={{ transform: "translate(90px, 20px)" }}
                >
                  Back
                </p>
              </Link>
            </div>

            <div>
              {path === "/login" ? (
                <Link className={classes.tab} as={NavLink} to="/signup">
                  {" "}
                  <h1 className={classes.h1}>SignUp</h1>
                </Link>
              ) : (
                <Link className={classes.tab} as={NavLink} to="/login">
                  <h1 className={classes.h1}>LOGIN</h1>
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
