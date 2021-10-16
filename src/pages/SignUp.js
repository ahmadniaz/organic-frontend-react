import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import axios from "axios";

const SignUp = ({ history }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignIn = () => {
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: name,
        email:email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        history.push("/login");
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  const { name, email, password } = formValue;
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  console.log(formValue, 'this is form value')
  console.log(name, 'helo')
  console.log(formValue.password, 'password')
  

  const useStyles = makeStyles((theme) => ({
    primaryDiv: {
      marginTop: "18%",
    },
    mainDiv: {
      height: "200px",
      width: "500px",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -75%)",
      backgroundColor: "rgba(255, 255,255, 0.5)",
    },
    input: {
      border: "0px",
      fontSize: "20px",
      marginLeft: "10%",
      borderBottom: "1px solid #adb5bd",
      padding: "3% 30% 3% 0",
      backgroundColor: "white",
      display: "block",
      "&::placeholder": {
        color: "grey",
        opacity: 0.5,
      },
      "&:focus": {
        border: "none",
        outline: "none",
        borderBottom: "1px solid #03235A",
      },
    },
    button: {
      ...theme.typography.secondary,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
      letterSpacing: "1px",
      marginLeft: "10%",
      marginTop: "8%",
      borderRadius: "50px",
      padding: "3% 30% 3% 30%",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },
    divider: {
      marginTop: "8%",
      marginBottom: "5%",
      marginLeft: "auto",
      marginRight: " auto",
    },

    horizontalLine: {
      backgroundColor: theme.palette.secondary.main,
      width: "100%",
      marginTop: "12px",
      marginBottom: " 12px",
      borderRadius: "10px",
      height: "1px",
    },
    p: {
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      marginBottom: "5%",
    },
    heading: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      textAlign: "center",
      marginTop: "3%",
    },
    tab: {
      textDecoration: "none",
    },
    para: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      fontSize: "18px",
      marginTop: "5%",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.primaryDiv}>
      <div className={classes.mainDiv}>
        <input
          className={classes.input}
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          placeholder="username"
        />
        <input
          className={classes.input}
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email Address"
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Confirm Password"
        />
        <Button className={classes.button} onClick={handleSignIn}>
          {" "}
          SIGN UP{" "}
        </Button>
        <p className={classes.para}>
          By creating an account, you agree to our
          <Link className={classes.tab} as={NavLink} to="/termsofservices">
            Terms Of Services
          </Link>
          and have read and understood our{" "}
          <Link className={classes.tab} as={NavLink} to="/privacypolicy">
            Privacy Policy
          </Link>
        </p>
        <Link className={classes.tab} as={NavLink} to="/login">
          <h3 className={classes.heading}>ALREADY HAVE AN ACCOUNT?SIGNIN</h3>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
