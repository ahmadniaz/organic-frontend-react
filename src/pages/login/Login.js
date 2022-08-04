import React, { useContext } from "react";
import { useHistory } from "react-router";

import { Link, NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import Button from "@restart/ui/esm/Button";
import { MyInputField } from "../../components/form/MyInputField";
import UserContext from "../../context/usercontext/userContext";

import useStyles from "./loginStyling";

const Login = () => {
  const history = useHistory();

  const userContext = useContext(UserContext);
  const { handleSubmit } = userContext;

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
            try {
              await handleSubmit(values);
              history.push("/");
            } catch (err) {
              console.log("error Logging in");
            } finally {
              setSubmitting(false);
            }
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
      <div style={{ textAlignLast: "center", marginTop: "3%" }}></div>
      <Link className={classes.tab} as={NavLink} to="/signup">
        <h3 className={classes.heading}>
          Don't have an Account?{" "}
          <span style={{ textDecoration: "underline" }}>SIGNUP</span>
        </h3>
      </Link>
    </div>
  );
};

export default Login;
