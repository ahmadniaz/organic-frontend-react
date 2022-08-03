import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import men from "../../Assets/men.webp";
import women from "../../Assets/women.webp";

import useStyles from "./itemsGridStyling";

const ItemGrids = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainGrid}>
      <Grid className={classes.gridContainer} container xs={12} sm={12} md={12}>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          className={classes.firstGrid}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${men})`,
          }}
        >
          <div className={classes.menDiv}>
            <p
              className={classes.p1}
              style={{
                marginBottom: 0,
                fontSize: "36px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              MEN COLLECTION
            </p>
            <Link to="/men" style={{ textDecoration: "none" }}>
              <Button className={classes.firstGridButton}>BROWSE</Button>
            </Link>
          </div>
        </Grid>
        <div style={{ padding: "3px" }}></div>
        <Grid
          xs={12}
          md={6}
          sm={12}
          className={classes.secondGrid}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${women})`,
          }}
        >
          <div className={classes.womenDiv}>
            <p
              className={classes.p1}
              style={{
                marginBottom: 0,
                fontSize: "36px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              WOMEN COLLECTION
            </p>
            <Link to="/women" style={{ textDecoration: "none" }}>
              <Button className={classes.firstGridButton}>BROWSE</Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemGrids;
