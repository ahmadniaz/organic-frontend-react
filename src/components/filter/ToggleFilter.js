import React, { useState, useContext, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
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
    handleCategory,
    category,
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

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    handleCategory(e.target.value);
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
                  <FormControl
                    className={classes.formControl}
                    style={{ marginTop: 20 }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      category
                    </InputLabel>
                    <Select
                      value={category}
                      onChange={handleCategoryChange}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value="all">all</MenuItem>
                      <MenuItem value="Mens">Mens</MenuItem>
                      <MenuItem value="Women">Women</MenuItem>
                      <MenuItem value="Boys">Boys</MenuItem>
                      <MenuItem value="Girls">Girls</MenuItem>
                    </Select>
                  </FormControl>

                  <p
                    style={{ minWidth: "150px" }}
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
                  <Grid item xs>
                    <Button
                      onClick={() => clearFilter()}
                      className={classes.clear}
                    >
                      CLEAR ALL
                    </Button>
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

          <Grid item xs={3}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Grid item xs={11}>
                <p
                  className={classes.firstHeading}
                  style={{ float: "right", marginRight: "15px" }}
                >
                  Search Products
                </p>
              </Grid>
              <Grid item xs={1}>
                <img
                  alt="Search Icon"
                  src={SearchIcon}
                  className={classes.icons}
                  onClick={() => handleFilterClick()}
                  style={{ marginTop: "25px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default ToggleFilter;
