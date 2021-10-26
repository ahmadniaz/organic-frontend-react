import React, { useState, useEffect, useContext } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import Button from "@restart/ui/esm/Button";
import { MyInputField } from "../components/form/MyInputField";
import UserContext from "../context/usercontext/userContext";

// const clientId =
//   "24636475881-mkr9q94rl59gsqjlubaimme9efres0nb.apps.googleusercontent.com";

const Login = ({ history }) => {
  // const [showloginButton, setShowloginButton] = useState(true);
  // const [showlogoutButton, setShowlogoutButton] = useState(false);

  const userContext = useContext(UserContext);
  console.log(userContext, "in the login page context");
  const { user, handleSubmit } = userContext;
  console.log(user, "hello user");

  useEffect(() => {
    if (user) {
      console.log(user, "User login");
      localStorage.getItem("user", JSON.stringify(user));
      history.push("/");
    }
    //eslint-disable-next-line
  }, [user]);

  // const onLoginSuccess = (res) => {
  //   console.log("Login Success:", res.profileObj);
  //   setShowloginButton(false);
  //   setShowlogoutButton(true);
  // };

  // const onLoginFailure = (res) => {
  //   console.log("Login Failed:", res);
  // };

  // const onSignoutSuccess = () => {
  //   alert("You have been logged out successfully");
  //   console.clear();
  //   setShowloginButton(true);
  //   setShowlogoutButton(false);
  // };

  //   const responseFacebook = (response) => {
  //     console.log(response);
  //   };
  //   const componentClicked = () => {
  //     console.log("clicked");
  //   };
  const useStyles = makeStyles((theme) => ({
    primaryDiv: {
      marginTop: "15%",
    },
    mainDiv: {
      height: "200px",
      width: "500px",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(255, 255,255, 0.5)",
    },
    input: {
      border: "0px",
      fontSize: "20px",
      marginLeft: "10%",
      borderBottom: "1px solid #adb5bd",
      width: "80%",
      padding: "2%",
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
      marginTop: "13%",
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
    error: {
      border: "0px",
      textAlign: "center",
      color: theme.palette.primary.dark,
      margin: "0 auto",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.primaryDiv}>
      <div className={classes.mainDiv}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Email is required!")
              .email("Please enter a valid email!"),
            password: Yup.string()
              .required("Password is required!")
              .matches(/^(?=.{8,})/, "Passwords are usually 8 character long!"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="ui form">
              <MyInputField
                className={classes.input}
                name="email"
                placeholder="Enter your email"
              />
              <MyInputField
                className={classes.input}
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                size="large"
                className={classes.button}
                content="Sign Up"
              >
                {" "}
                SIGN IN{" "}
              </Button>
            </Form>
          )}
        </Formik>
        <div
          className={classes.divider}
          style={{ display: "flex", textAlign: "center" }}
        >
          <div
            className={classes.horizontalLine}
            style={{ marginRight: "5px" }}
          ></div>
          <p className={classes.p}>OR</p>
          <div
            className={classes.horizontalLine}
            style={{ marginLeft: "5px" }}
          ></div>
        </div>
      </div>
      <div style={{ textAlignLast: "center", marginTop: "3%" }}>
        {/* {showloginButton ? (
          <GoogleLogin
            clientId={clientId}
            onClick={() =>
              (window.location = "http://localhost:1337/connect/google")
            }
            buttonText="Continue With Google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null}

        {showlogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null} */}

        {/* <FacebookLogin
          appId="239817504782304"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          onClick={componentClicked}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        /> */}
      </div>
      <Link className={classes.tab} as={NavLink} to="/signup">
        <h3 className={classes.heading}>CAN'T SIGNIN?</h3>
      </Link>
    </div>
  );
};

export default Login;
