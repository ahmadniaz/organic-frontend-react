import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
  },

  mainGrid: {
    marginTop: "100px",
    backgroundColor: "black",
  },
  logo: {
    height: "8em",
    marginLeft: "40px",
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
    marginRight: "30px",
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  onScrolltab: {
    ...theme.typography.secondary,
    minWidth: 10,
    marginRight: "30px",
    textDecoration: "none",
    color: "white",
  },
  footerTab: {
    ...theme.typography.secondary,
    minWidth: 10,
    display: "block",
    textDecoration: "none",
    color: "#0a58ca",
    fontSize: "16px",
    "&:hover": {
      color: "white",
    },
  },
  copyright: {
    color: "white",
    marginBottom: "0",
    textAlign: "center",
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
    color: "white",
  },
  fixedNav: {
    backgroundColor: "black",
    transition: ".3s ease-in-out",
  },

  h1: {
    ...theme.typography.secondary,
    minWidth: 10,
    marginLeft: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "white",
    transform: "translate(-200%, -35px)",
  },
  firstHeading: {
    ...theme.typography.primary,
    color: "white",
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "26px",
    marginTop: "50px",
  },
  firstPara: {
    ...theme.typography.primary,
    color: "white",
    letterSpacing: "1px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  secondPara: {
    ...theme.typography.secondary,
    color: "white",
    fontSize: "12px",
  },
  bottomDiv: {
    backgroundColor: "black",
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
