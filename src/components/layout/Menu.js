import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import EZclothing from "../../Assets/ezclothing.svg";
import WhiteLogo from "../../Assets/ezclothing-white.svg";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { NavLink, Link } from "react-router-dom";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import ProductContext from "../../context/productContext/productContext";
import Cart from "../../Assets/Cart.png";
import WhiteCart from "../../Assets/whiteBag.png";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import UserContext from "../../context/usercontext/userContext";

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

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 1,
    top: 6,
    border: `2px solid ${theme.palette.primary.dark}`,
    padding: "0 4px",
  },
}))(Badge);

const MainMenu = () => {
  const productContext = useContext(ProductContext);
  const userContext = useContext(UserContext);
  const { handleLogout } = userContext;
  const { cartItems } = productContext;
  const [localUser, setLocalUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [fix, setFix] = useState(false);
  const open = Boolean(anchorEl);
  const history = useHistory();
  // functions

  useEffect(() => {
    const token = localStorage.getItem("user");
    const tokenData = JSON.parse(token);
    setLocalUser(tokenData);
  }, []);

  const handleLogoutClick = () => {
    handleLogout();
    history.push("/login");
  };

  const handleProfileClick = () => {
    history.push("/profile");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };

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
    <>
      <Grid container>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.bar}>
            <Toolbar disableGutters className={fix ? classes.fixedNav : ""}>
              <div className={classes.logo}>
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/"
                >
                  <img
                    alt="company logo"
                    style={{ marginTop: "20px", height: "90%", width: "90%" }}
                    src={fix ? WhiteLogo : EZclothing}
                  />
                </Link>
              </div>
              <div className={classes.link}>
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/"
                >
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/men"
                >
                  {" "}
                  Mens{" "}
                </Link>
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/boys"
                >
                  {" "}
                  Boys
                </Link>
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/women"
                >
                  {" "}
                  Women
                </Link>
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/girls"
                >
                  {" "}
                  Girls
                </Link>

                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/contact"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </div>
              {localUser && localUser ? (
                <>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>
                        {localUser.user.username.charAt(0)}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <span style={fix ? { color: "white" } : { color: "black" }}>
                    {localUser.user.username.toUpperCase()}
                  </span>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleProfileClick}>
                      <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogoutClick}>
                      <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Link
                  className={fix ? classes.onScrolltab : classes.tab}
                  as={NavLink}
                  to="/login"
                >
                  Login
                </Link>
              )}
              <Link
                className={fix ? classes.onScrolltab : classes.tab}
                as={NavLink}
                to="/cart"
              >
                <IconButton aria-label="cart" style={{ marginRight: "2%" }}>
                  <StyledBadge
                    badgeContent={cartItems.length}
                    color="secondary"
                  >
                    {fix ? (
                      <img
                        alt="Cart Icon"
                        src={WhiteCart}
                        style={{ height: "40px" }}
                      />
                    ) : (
                      <img alt="Cart Icon" src={Cart} />
                    )}
                  </StyledBadge>
                </IconButton>
              </Link>
            </Toolbar>
            <h1 className={fix ? classes.fixedNav : classes.pageName}>
              <Breadcrumb />
            </h1>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </Grid>
    </>
  );
};

export default MainMenu;
