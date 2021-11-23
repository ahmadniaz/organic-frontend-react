import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { MyInputField } from "../components/form/MyInputField";

const SignUp = () => {
  const history = useHistory();
  const showError = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      transition: Slide,
      theme: "colored",
      pauseOnFocusLoss: false,
    });
  };
  const useStyles = makeStyles((theme) => ({
    primaryDiv: {
      marginTop: "18%",
    },
    mainDiv: {
      height: "auto",
      width: "500px",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -30%)",
      backgroundColor: "rgba(255, 255,255, 0.5)",
    },
    input: {
      border: "0px",
      fontSize: "20px",
      marginLeft: "10%",
      borderBottom: "1px solid #adb5bd",
      width: "75%",
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
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            cnfrmPassword: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Username is required!"),
            email: Yup.string()
              .required("Email is required!")
              .email("Please enter a valid email!"),
            password: Yup.string()
              .required("Password is required!")
              .matches(
                /^(?=.*[A-Z])/,
                "Password must contain one uppercase letter!"
              )
              .matches(/^(?=.*[0-9])/, "Password must contain a digit!")
              .matches(/^(?=.{8,})/, "Password must be 8 letters or more!"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Password does not match!")
              .required("Confirm Password is required!"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await axios.post(
                "https://strapi-backend-organic.herokuapp.com/auth/local/register",
                values
              );
              history.push("/login");
            } catch (error) {
              if (error.code === "auth/network-request-failed")
                showError("Check your internet connection!");
              else showError("Email already is use!");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="ui form">
              <MyInputField
                className={classes.input}
                name="username"
                placeholder="Enter your username"
              />
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
              <MyInputField
                className={classes.input}
                name="confirmPassword"
                placeholder="Confirm your password"
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
