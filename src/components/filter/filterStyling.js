import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: "50px",
    marginRight: "50px",
    marginLeft: "50px",
    padding: 0,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  firstHeading: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    letterSpacing: "1px",
    paddingBottom: 0,
    fontSize: "16px",
    marginBottom: 0,
    textAlign: "center",
    marginTop: "20px",
  },
  icons: {
    width: "20px",
    cursor: "pointer",
    marginTop: "15px",
  },
  formControl: {
    minWidth: 86,
    marginLeft: "10px",
  },
  inputBox: {
    height: "60%",
    marginTop: "25px",
    alignSelf: "center",
    borderColor: theme.palette.secondary.main,
    borderRadius: "15px",
    width: "100px",
    "&::placeholder": {
      color: theme.palette.secondary.main,
    },
  },
  clear: {
    color: theme.palette.secondary.main,
    margin: "5%",
  },
}));
export default useStyles;
