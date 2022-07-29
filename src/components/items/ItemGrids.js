import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import men from "../../Assets/men.webp";
import women from "../../Assets/women.webp";

import useStyles from "./itemsGridStyling";

const ItemGrids = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainGrid}>
      <Grid container style={{ flexWrap: "nowrap", marginTop: "50px" }}>
        <Grid
          item
          xs={6}
          className={classes.firstGrid}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${men})`,
          }}
        >
          <div
            style={{ position: "absolute", transform: "translate(50%, 50%)" }}
          >
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

            <Button className={classes.firstGridButton}>BROWSE</Button>
          </div>
        </Grid>
        <div style={{ padding: "3px" }}></div>
        <Grid
          xs={6}
          className={classes.secondGrid}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${women})`,
          }}
        >
          <div
            style={{ position: "absolute", transform: "translate(50%, 50%)" }}
          >
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

            <Button className={classes.firstGridButton}>BROWSE</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemGrids;
