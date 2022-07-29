import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
      marginTop: "15%",
      padding: 0,
      width: "96%",
      marginRight: "auto",
      marginLeft: "auto",
      overflowX: "hidden",
      overflowY: "hidden",
    },
    productDiv: {
      backgroundColor: " rgba(112,112,112, 0.1)",
      textAlign: "center",
    },
    productTitle: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      letterSpacing: "1px",
      fontSize: "17px",
      marginBottom: 0,
    },
    productPrice: {
      ...theme.typography.primary,
      color: theme.palette.primary.dark,
      letterSpacing: "1px",
      fontSize: "14px",
      marginBottom: 0,
    },
    title: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      fontSize: "36px",
      fontWeight: "bold",
    },
    firstHeading: {
      ...theme.typography.primary,
      color: theme.palette.secondary.main,
    },
    description: {
      transform: "translate(10%, 0%)",
    },
    paragraph: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      fontSize: "14px",
      marginBottom: "7%",
    },
    quantity: {
      ...theme.typography.primary,
      color: theme.palette.secondary.main,
    },
    input: {
      width: "40%",
      textAlign: "center",
      borderRadius: "15px",
      borderColor: theme.palette.secondary.main,
    },
    span: {
      color: theme.palette.primary.dark,
      marginLeft: "25%",
      ...theme.typography.secondary,
    },
    button: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.secondary.main,
      marginTop: 0,
      borderRadius: "20px",
      borderWidth: "3px ",
      borderColor: theme.palette.secondary.main,
      padding: "2px 25px 2px 25px",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    },
    tab: {
      textDecoration: "none",
    },
  }));

  export default useStyles;