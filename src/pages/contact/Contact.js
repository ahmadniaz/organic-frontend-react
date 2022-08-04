import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";

import useStyles from "./contactStyling";

const Contact = () => {
  const [loginValue, setLoginValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const { firstName, lastName, email, subject, message } = loginValue;
  const onChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const classes = useStyles();

  return (
    <div className={classes.primaryDiv}>
      <div className={classes.mainDiv}>
        <p className={classes.thirdHeading}>Please Complete the form below.</p>
        <div>
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
        </div>

        <div>
          <input
            className={classes.input}
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email Address*"
            required
          />
          <input
            className={classes.input}
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
            placeholder="Subject*"
          />
        </div>
        <div>
          <textarea
            className={classes.textBlock}
            type="text"
            name="message"
            value={message}
            onChange={onChange}
            placeholder="Message*"
            size="50"
            rows={5}
            cols={25}
          />
        </div>
        <div>
          <Button className={classes.button}> SEND </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
