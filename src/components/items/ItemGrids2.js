import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import boys from "../../Assets/boys.webp";
import girls from "../../Assets/girls.webp";

import useStyles from "./itemsGridStyling";

const ItemGrids2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainGrid}>
      <Grid container xs={12} sm={12} md={12} className={classes.gridContainer}>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          className={classes.firstGrid}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${boys})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
              BOYS COLLECTION
            </p>

            <Link to="/boys" style={{ textDecoration: "none" }}>
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
            background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${girls})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
              GIRLS COLLECTION
            </p>
            <Link to="/girls" style={{ textDecoration: "none" }}>
              <Button className={classes.firstGridButton}>BROWSE</Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemGrids2;
