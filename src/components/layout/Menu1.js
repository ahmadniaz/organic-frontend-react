import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ArrowRight from "../../Assets/ArrowRight.png";
import WaveTop from "../../Assets/WaveTop.png";
import { NavLink, Link } from "react-router-dom";

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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "5em",
  },
  logo: {
    height: "8em",
  },
  bar: {
    backgroundImage: `url(${WaveTop})`,
    backgroundSize: "100% 100%",
    marginTop: 0,
    marginBottom: "70px",
  },
  link: {
    margin: "auto",
  },
  tab: {
    ...theme.typography.secondary,
    minWidth: 10,
    marginLeft: "25px",
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  h1: {
    ...theme.typography.secondary,
    minWidth: 10,
    marginLeft: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    transform: "translate(-200%, -35px)",
  },
  cart: {
    marginRight: "10px",
    minWidth: 10,
    marginLeft: "25px",
    height: "1em",
    marginTop: "2px",
    cursor: "pointer",
  },
  pageName: {
    marginLeft: "10%",
    ...theme.typography.secondary,
    fontSize: "42px",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
}));

export default function Menu(props) {
  const [upperCase, setUpperCase] = useState("");
  // const getPageName = () => {
  //   const path = window.location.pathname;
  //   console.log(path, "path");
  //   const page = path.split("/").pop();
  //   console.log(page, "page");
  //   setUpperCase(page.toUpperCase());
  // };

  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const page = path.split("/").pop();
    setUpperCase(page.toUpperCase());
    //eslint-disable-next-line
  }, [path]);
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
            <div className={classes.link}>
              <h1 className={classes.pageName}>{upperCase}</h1>
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
