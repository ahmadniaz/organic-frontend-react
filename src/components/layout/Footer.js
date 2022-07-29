import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink, Link } from "react-router-dom";
import facebook from "../../Assets/svg/facebook.svg";
import instagram from "../../Assets/svg/instagram.svg";
import twitter from "../../Assets/svg/twitter.svg";
import youtube from "../../Assets/svg/youtube.svg";
import WaveBottom from "../../Assets/WaveBottom.png";

import useStyles from "./layoutStyling";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainGrid} style={{ marginTop: "100px" }}>
      <Grid
        container
        style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
      >
        <Grid item xs={3}>
          <p className={classes.firstHeading}>EZ CLOTHING</p>
          <p className={classes.secondPara}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <div className={classes.icons}>
            <img className={classes.iconSize} alt="Facebook" src={facebook} />
            <img className={classes.iconSize} alt="instagram" src={instagram} />
            <img className={classes.iconSize} alt="TWITTER" src={twitter} />
            <img className={classes.iconSize} alt="YOUTUBE" src={youtube} />
          </div>
        </Grid>

        <Grid item xs={3} style={{ textAlign: "center" }}>
          <p className={classes.firstHeading}>Quick Links</p>
          <Link className={classes.footerTab} as={NavLink} to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/about">
            {" "}
            About{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/store">
            {" "}
            Store{" "}
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/login">
            {" "}
            Login
          </Link>
          <Link className={classes.footerTab} as={NavLink} to="/signup">
            {" "}
            Sign Up
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
      <div className={classes.bottomDiv}>
        <Grid container className={classes.mainGrid}>
          <Grid item xs={12}>
            <div>
              <div>
                <div>
                  <img
                    alt="Bottom wave"
                    src={WaveBottom}
                    style={{ width: "1519px", position: "relative" }}
                  />
                  <p
                    className={classes.footerTab}
                    style={{
                      position: "absolute",
                      transform: "translate(-50%, -100%)",
                      left: "50%",
                    }}
                  >
                    COPYRIGHTS.&copy;2022. EZ CLOTHING. ALL RIGHTS RESERVED
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
