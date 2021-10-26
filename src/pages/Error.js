import React from "react";
import { makeStyles } from "@material-ui/styles";
import error from "../Assets/error.png";

const Error = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      fontSize: "36px",
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={classes.title}>
        The page you are Looking For Doesn't Exist
      </h1>
      <img src={error} alt="Error" width="1510px" height="700px" />
    </div>
  );
};

export default Error;
