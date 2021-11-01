import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PersonIcon from "@material-ui/icons/Person";
import HistoryIcon from "@material-ui/icons/History";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import LogoutIcon from "@mui/icons-material/Logout";
import UserContext from "../context/usercontext/userContext";
import { useHistory } from "react-router";

const Profile = () => {
  const userContext = useContext(UserContext);
  const { handleLogout } = userContext;
  const history = useHistory();
  const [localUser, setLocalUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    const tokenData = JSON.parse(token);
    setLocalUser(tokenData);
    console.log(localUser, "user in APP");
    //eslint-disable-next-line
  }, []);

  const handleLogoutClick = () => {
    handleLogout();
    history.push("/login");
  };
  const useStyles = makeStyles((theme) => ({
    account_container: {
      border: "solid #f6f6f6",
      borderRadius: "10px",
      padding: "1rem",
      textTransform: "capitalize",
      backgroundColor: "#f6f6f6",
      marginTop: "3rem",
      boxShadow: "0px 0px 5px 3px #cbcbcb",
      width: "22vw",
    },

    account_icons: {
      display: "flex",
      flexDirection: "column",
    },

    // ----Grid size 4 style----

    grid4_container: {
      display: "flex",
      justifyContent: "flex-end",
    },

    // ----Grid size 8 style----

    grid8_container: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "10rem",
    },
    btn1: {
      ...theme.typography.secondary,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },

    btn2: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      padding: "0.4rem",
      fontWeight: "bold",
      textDecoration: "none",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      {localUser && (
        <div>
          <Grid container style={{ marginTop: "5%" }}>
            {/* ----Account detail section---- */}

            <Grid item xs={12} md={4} className={classes.grid4_container}>
              <Box className={classes.account_container}>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: "2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  account details:
                </Typography>

                <Box className={classes.account_icons}>
                  <Box style={{ display: "flex", padding: "1rem" }}>
                    <PersonIcon style={{ marginRight: "6px" }} />
                    {/* {console.log("local user in profile line 97 ", localUser)} */}
                    <Typography>
                      {localUser && localUser.user.username.toUpperCase()}
                    </Typography>
                  </Box>

                  <Button className={classes.btn1} onClick={handleLogoutClick}>
                    <LogoutIcon fontSize="small" />
                    logout
                  </Button>

                  <Box style={{ display: "flex", padding: "1rem" }}>
                    <HistoryIcon style={{ marginRight: "6px" }} />
                    <Typography>Order history</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* ----Account section---- */}

            <Grid item xs={12} md={8} className={classes.grid8_container}>
              <Typography
                variant="h5"
                style={{
                  width: "42vw",
                  textTransform: "capitalize",
                  height: "6vh",
                  marginTop: "4rem",
                  fontWeight: "bold",
                }}
              >
                account
              </Typography>
              <Box style={{ marginTop: "1rem" }}>
                <Box
                  style={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    textTransform: "capitalize",
                  }}
                >
                  <Typography variant="body1">name:</Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginLeft: "1rem" }}
                  >
                    {localUser && localUser.user.username}
                  </Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    textTransform: "capitalize",
                  }}
                >
                  <Typography variant="body1">e-mail:</Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginLeft: "1rem" }}
                  >
                    {localUser.user.email}
                  </Typography>
                </Box>
                <Box style={{ marginTop: "2rem" }}>
                  <>
                    <Link to="/settings" className={classes.btn2}>
                      change account information
                      <TrendingFlatIcon fontSize="medium" />
                    </Link>
                  </>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}{" "}
    </>
  );
};

export default Profile;
