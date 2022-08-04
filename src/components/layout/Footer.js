import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink, Link } from "react-router-dom";
import WhiteLogo from "../../Assets/ezclothing-white.svg";
import useStyles from "./layoutStyling";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainGrid}>
      <Grid
        container
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "-webkit-center",
        }}
      >
        <Grid item xs={3} style={{ marginTop: "3%" }}>
          <div style={{ height: "100px" }}>
            <Link className={classes.tab} as={NavLink} to="/">
              <img
                alt="company logo"
                style={{ width: "90%", height: "90%" }}
                src={WhiteLogo}
              />
            </Link>
          </div>
          <p className={classes.secondPara}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </Grid>

        <Grid item xs={3} style={{ textAlign: "center" }}>
          <p className={classes.firstHeading}>Quick Links</p>
          <Link className={classes.footerTab} as={NavLink} to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/men">
            {" "}
            Men{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/women">
            {" "}
            Women{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/boys">
            {" "}
            Boys{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/girls">
            {" "}
            Girls{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/store">
            {" "}
            Store{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/contact">
            {" "}
            Contact{" "}
          </Link>
        </Grid>

        <Grid item xs={3} style={{ textAlign: "center" }}>
          <p className={classes.firstHeading}>Additional Links</p>
          <Link
            className={classes.footerTab}
            as="services"
            to="/termsofservices"
          >
            {" "}
            Terms Of Services{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/privacypolicy">
            {" "}
            Privacy Policies{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/faq's">
            {" "}
            FAQ's{" "}
          </Link>
        </Grid>

        <Grid item xs={3} style={{ textAlign: "center" }}>
          <p className={classes.firstHeading}>Contact Us</p>
          <p className={classes.footerTab}> +923204807557</p>
          <p className={classes.footerTab}> Township,Lahore,Pakistan</p>
          <p className={classes.footerTab}> ask@ezclothing.com</p>
        </Grid>
      </Grid>
      <hr style={{ color: "white", height: "2px" }}></hr>
      <p className={classes.copyright}>
        COPYRIGHTS.&copy;2022. EZ CLOTHING. ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
