import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15%",
  },
  firstHeading: {
    ...theme.typography.primary,
    color: theme.palette.secondary.main,
    letterSpacing: "1px",
    fontSize: "18px",
    marginBottom: 0,
    height: "5%",
  },
  secondHeading: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    letterSpacing: "1px",
    fontSize: "50px",
    marginTop: 0,
    marginBottom: 0,
    height: "10%",
  },

  thirdHeading: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    letterSpacing: "1px",
    fontSize: "70px",
    fontWeight: "bold",
    marginTop: 0,
    height: "15%",
  },
  fourthHeading: {
    ...theme.typography.primary,
    color: theme.palette.secondary.main,
    letterSpacing: "1px",
    fontSize: "18px",
    maxWidth: "450px",
  },
  floatingDiv: {
    position: "relative",
    top: "-30%",
  },

  button: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    marginTop: 0,
    fontWeight: "bold",
    borderRadius: "20px",
    borderWidth: "3px ",
    borderColor: theme.palette.secondary.main,
    padding: "5px 35px 5px 35px",
  },

  paragraph: {
    ...theme.typography.primary,
    fontSize: "14px",
    marginTop: "2%",
    marginRight: "10%",
  },
}));

export default useStyles;
