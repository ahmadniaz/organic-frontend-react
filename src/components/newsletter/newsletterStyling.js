import { makeStyles } from "@material-ui/styles";
import newsletter from "../../Assets/newsletter.webp";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${newsletter})`,
    borderRadius: "15px",
    marginTop: "15%",
    maxHeight: "300px",
    textAlign: "center",
  },
  secondHeading: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.light,
    letterSpacing: "1px",
    fontSize: "30px",
    marginTop: 0,
    marginBottom: 0,
  },
  thirdHeading: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.light,
    letterSpacing: "1px",
    fontSize: "50px",
    fontWeight: "bold",
    marginTop: 0,
  },
  floatingDiv: {
    position: "relative",
    top: "-45%",
    left: "4%",
  },
  inputField: {
    borderRadius: "20px",

    padding: "11px",
    width: "25%",
    borderColor: theme.palette.secondary.light,
    border: "0px",
    borderSize: "1px",
    "&::placeholder": {
      color: theme.palette.secondary.dark,
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
  button: {
    ...theme.typography.secondary,
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    top: "-2px",
    fontWeight: "bold",
    borderRadius: "20px",
    borderWidth: "3px ",
    padding: "5px 35px 7px 35px",
    position: "relative",
    right: "70px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.light,
    },
  },
}));

export default useStyles;
