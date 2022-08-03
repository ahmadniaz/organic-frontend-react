import { makeStyles } from "@material-ui/styles";
// import contact from "../../Assets/contact.jpg";

const useStyles = makeStyles((theme) => ({
  primaryDiv: {
    marginTop: "10%",
    textAlign: "center",
  },
  mainDiv: {
    backgroundColor: "rgba(255, 255,255, 0.5)",
  },
  thirdHeading: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    letterSpacing: "1px",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  input: {
    border: "0px",
    fontSize: "20px",
    marginLeft: "10%",
    borderBottom: "1px solid #03235a",
    width: "16%",
    padding: "1%",
    display: "inline",
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

    padding: "2%",
    display: "inline",
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

  textBlock: {
    border: "0px",
    fontSize: "20px",
    marginLeft: "10%",
    borderBottom: "1px solid #03235a",
    width: "42%",
    padding: "1%",
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

export default useStyles;
