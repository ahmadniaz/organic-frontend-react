import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "70px",
    width: "98%",
    marginLeft: "auto",
  },
  p1: {
    ...theme.typography.secondary,
    color: theme.palette.primary.light,
  },
  p2: {
    ...theme.typography.secondary,  
    color: theme.palette.secondary.main,
    paddingLeft: "15px",
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
    height: "20%",
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
    top: "-80px",
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
  firstGrid: {
    backgroundSize: "contain",
    borderRadius: "15px",
    padding: "20px 20px 20px 20px",
    display: "block",
    textAlign: "center",
    height: "300px",
  },
  secondGrid: {
    backgroundSize: "cover",
    borderRadius: "15px",
    padding: "20px 20px 20px 20px",
    display: "block",
    textAlign: "center",
    height: "300px",
  },
  firstGridButton: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.light,
    textDecoration: "underline",
    "&:hover": {
      color: "black",
      backgroundColor: theme.palette.secondary.light,
      border: "1px solid white",
    },
  },
}));

export default useStyles;
