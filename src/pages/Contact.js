import React, {useState} from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@restart/ui/esm/Button";

const Contact = () => {

    const [loginValue, setLoginValue] = useState({
        firstName: "",
        lastName: "",
        email:"", 
        subject:"", 
        message:""
      });
      const { firstName, lastName, email, subject, message} = loginValue;
      const onChange = (e) => {
        setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
      };
  const useStyles = makeStyles((theme) => ({
    primaryDiv: {
      marginTop: "10%",
    },
    mainDiv: {
      height: "200px",
      width: "50%",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, 25%)",
      backgroundColor: "rgba(255, 255,255, 0.5)",
      marginBottom: "30%",
      textAlign:"end"
    },
    thirdHeading: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      letterSpacing: "1px",
      fontSize: "30px",
      fontWeight: "bold",
      marginTop: 0,
      marginLeft: "5%",
    },
    input: {
      border: "0px",
      fontSize: "20px",
      marginLeft: "10%",
      borderBottom: "1px solid #03235a",
      width:"40%",
      padding:"2%",
      display:"inline",
      backgroundColor: "white",
      "&::placeholder": {
        color: "grey",
        opacity: 0.3,
      },
      "&:focus": {
        border: "none",
        outline: "none",
        borderBottom: "1px solid #03235A",
      },
    },

    inputBlock: {
        border: "0px",
        fontSize: "20px",
        marginLeft: "10%",
        borderBottom: "1px solid #03235a",
        width:"100%",
        padding:"2%",
        display:"block",
        backgroundColor: "white",
        "&::placeholder": {
          color: "grey",
          opacity: 0.3,
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
        padding: "1% 13% 1% 13%",
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.light,
        },
      },
  }));

  const classes = useStyles();

  return (
    <div className={classes.primaryDiv}>
      <p className={classes.thirdHeading}>Please Complete the form below.</p>
      <div className={classes.mainDiv}>
      <input
          className={classes.input}
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
          placeholder="First Name*"
        />
        <input
          className={classes.input}
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
          placeholder="Last Name*"
        />
        <input
          className={classes.inputBlock}
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email Address*"
          required
        />
        <input
          className={classes.inputBlock}
          type="text"
          name="subject"
          value={subject}
          onChange={onChange}
          placeholder="Subject*"
        />
        <textarea
          className={classes.inputBlock}
          type="text"
          name="message"
          value={message}
          onChange={onChange}
          placeholder="Message*"
          size="50"
          rows={5}
          cols={25}
        />
        <Button className={classes.button} >
          {" "}
          SEND{" "}
        </Button>
      </div>
    </div>
  );
};

export default Contact;
