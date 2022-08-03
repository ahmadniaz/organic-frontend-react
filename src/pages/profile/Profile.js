import React, { useContext, useState, useEffect } from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import UserContext from "../../context/usercontext/userContext";
import { useHistory } from "react-router";

import useStyles from "./profileStyling";

const Profile = () => {
  const userContext = useContext(UserContext);
  const { handleLogout } = userContext;
  const history = useHistory();
  const [localUser, setLocalUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    const tokenData = JSON.parse(token);
    setLocalUser(tokenData);
    //eslint-disable-next-line
  }, []);

  const handleLogoutClick = () => {
    handleLogout();
    history.push("/login");
  };

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
                    <Typography>
                      {localUser && localUser.user.username.toUpperCase()}
                    </Typography>
                  </Box>

                  <Button className={classes.btn1} onClick={handleLogoutClick}>
                    <LogoutIcon fontSize="small" />
                    logout
                  </Button>
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
                  }}
                >
                  <Typography variant="body1">e-mail:</Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginLeft: "1rem" }}
                  >
                    {localUser.user.email.toLowerCase()}
                  </Typography>
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
