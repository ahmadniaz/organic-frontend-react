import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { MyInputField } from "../../components/form/MyInputField";

import useStyles from "./settingsStyling";

const Settings = () => {
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
                "https://ezclothing-backend.herokuapp.com/api/auth/local/register",
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
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                size="large"
                className={classes.button}
                content="UPDATE"
              >
                {" "}
                UPDATE{" "}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Settings;
