import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
  },
  logo: {
    height: "8em",
  },
  bar: {
    marginTop: 0,
  },
  link: {
    margin: "auto",
  },
  tab: {
    ...theme.typography.secondary,
    minWidth: 10,
    marginLeft: "25px",
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  footerTab: {
    ...theme.typography.secondary,
    minWidth: 10,
    display: "block",
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontSize: "16px",
  },

  cart: {
    marginRight: "10px",
    minWidth: 10,
    marginLeft: "25px",
    height: "1em",
    marginTop: "2px",
    cursor: "pointer",
  },

  pageName: {
    marginLeft: "10%",
    ...theme.typography.secondary,
    fontSize: "42px",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  fixedNav: {
    backgroundColor: "#29C7B6",
    transition: ".3s ease-in-out",
  },

  h1: {
    ...theme.typography.secondary,
    minWidth: 10,
    marginLeft: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    transform: "translate(-200%, -35px)",
  },
  firstHeading: {
    ...theme.typography.primary,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "26px",
    marginTop: "50px",
  },
  firstPara: {
    ...theme.typography.primary,
    color: theme.palette.secondary.main,
    letterSpacing: "1px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  secondPara: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    fontSize: "12px",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100px",
  },
  iconSize: {
    width: "20px",
    height: "20px",
  },

}));

export default useStyles;
