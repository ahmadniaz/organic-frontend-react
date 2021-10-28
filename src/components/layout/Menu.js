import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../Theme";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import LogoCropped from "../../Assets/LogoCropped.png";
import WaveTop from "../../Assets/WaveTop.png";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "../../Assets/svg/SearchIcon.svg";
import { NavLink, Link } from "react-router-dom";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import ProductContext from "../../context/productContext/productContext";
import Cart from "../../Assets/Cart.png";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import UserContext from "../../context/usercontext/userContext";

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
    backgroundSize: "112% 102%",
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

const MainMenu = () => {
  const productContext = useContext(ProductContext);
  const userContext = useContext(UserContext);
  const { handleLogout } = userContext;
  const { cartItems } = productContext;
  const [upperCase, setUpperCase] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [localUser, setLocalUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  // functions

  const handleLogoutClick = () => {
    handleLogout();
    history.push("/login");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    const tokenData = JSON.parse(token);
    setLocalUser(tokenData);
  }, []);

  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const page = path.split("/").pop();
    setUpperCase(page.toUpperCase());
    //eslint-disable-next-line
  }, [path]);
  console.log(localUser, "my Name");
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.bar}>
            <Toolbar disableGutters>
              <div className={classes.logo}>
                <img
                  alt="company logo"
                  style={{ marginTop: "20px" }}
                  src={LogoCropped}
                />
              </div>
              <div className={classes.link}>
                <Link className={classes.tab} as={NavLink} to="/">
                  {" "}
                  Home{" "}
                </Link>
                <Link className={classes.tab} as={NavLink} to="/about">
                  {" "}
                  About{" "}
                </Link>
                <Link className={classes.tab} as={NavLink} to="/store">
                  {" "}
                  Store{" "}
                </Link>
                <Link className={classes.tab} as={NavLink} to="/contact">
                  {" "}
                  Contact{" "}
                </Link>
              </div>
              {localUser ? (
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
                  {localUser.user.username.toUpperCase()}
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
                    <MenuItem>
                      <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogoutClick}>
                      <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Link className={classes.tab} as={NavLink} to="/login">
                  Login
                </Link>
              )}

              {isOpen ? (
                <div>
                  <img
                    alt="Search Icon"
                    src={SearchIcon}
                    className={classes.cart}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <input
                    style={{
                      borderRadius: "15px",
                      borderColor: theme.palette.secondary.main,
                      boderSize: "0px",
                    }}
                    type="text"
                    placeholder="search...."
                  />
                </div>
              ) : (
                <img
                  alt="Search Icon"
                  src={SearchIcon}
                  className={classes.cart}
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
              <Link className={classes.tab} as={NavLink} to="/cart">
                <IconButton aria-label="cart" style={{ marginRight: "2%" }}>
                  <StyledBadge
                    badgeContent={cartItems.length}
                    color="secondary"
                  >
                    <img alt="Cart Icon" src={Cart} />
                  </StyledBadge>
                </IconButton>
              </Link>
            </Toolbar>
            <h1 className={classes.pageName}>{upperCase}</h1>
            <Breadcrumb />
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </Grid>
    </>
  );
};

export default MainMenu;
