import React, { useState, useContext, useRef } from "react";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import ProductContext from "../../context/productContext/productContext";

import filterIcon from "../../Assets/svg/filterIcon.svg";
import SearchIcon from "../../Assets/svg/SearchIcon.svg";
import x from "../../Assets/svg/x.svg";

import useStyles from "./filterStyling";

const ToggleFilter = () => {
  const productContext = useContext(ProductContext);
  const {
    handleMinChange,
    handleMaxChange,

    handleFilterClick,
    clearFilter,
    min,
    max,
  } = productContext;
  const text = useRef("");
  const [isOpen, setIsOpen] = useState(false);

  const onMinChange = (e) => {
    if (text.current.value !== "") {
      handleMinChange(e.target.value);
    }
  };

  const onMaxChange = (e) => {
    if (text.current.value !== "") {
      handleMaxChange(e.target.value);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{ display: "flex" }}>
          <Grid item xs={9} style={{ display: "flex" }}>
            <Grid item xs={12} style={{ display: "flex" }}>
              {isOpen ? (
                <Grid item xs={12} style={{ display: "flex" }}>
                  <img
                    onClick={() => setIsOpen(!isOpen)}
                    alt="Close"
                    src={x}
                    className={classes.icons}
                  />

                  <p
                    style={{ minWidth: "150px", alignSelf: "flex-end" }}
                    className={classes.firstHeading}
                  >
                    Price Range
                  </p>
                  <input
                    className={classes.inputBox}
                    placeholder="min price"
                    min="0"
                    value={min && Math.max(0, min)}
                    type="number"
                    onChange={onMinChange}
                  />

                  <input
                    className={classes.inputBox}
                    placeholder="max price"
                    max="99999"
                    value={max && Math.max(0, max)}
                    type="number"
                    onChange={onMaxChange}
                  />
                  <Grid item style={{ width: "150px", alignSelf: "flex-end" }}>
                    <Button
                      onClick={() => clearFilter()}
                      className={classes.clear}
                    >
                      CLEAR ALL
                    </Button>
                  </Grid>
                  <Grid item style={{ display: "flex" }}>
                    <Grid item xs={1}>
                      <img
                        alt="Search Icon"
                        src={SearchIcon}
                        className={classes.icons}
                        onClick={() => handleFilterClick()}
                        style={{ marginTop: "25px" }}
                      />
                    </Grid>
                    <p
                      className={classes.firstHeading}
                      style={{ float: "right", marginLeft: "15px" }}
                    >
                      FILTER
                    </p>
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Grid item xs={1} style={{ maxWidth: "30px" }}>
                    <img
                      onClick={() => setIsOpen(!isOpen)}
                      style={{ marginTop: "25px" }}
                      alt="Filter Icon"
                      src={filterIcon}
                      className={classes.icons}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <p
                      className={classes.firstHeading}
                      style={{ float: "left" }}
                    >
                      Search Filter
                    </p>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default ToggleFilter;
