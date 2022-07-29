import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    account_container: {
      border: "solid #f6f6f6",
      borderRadius: "10px",
      padding: "1rem",
      textTransform: "capitalize",
      backgroundColor: "#f6f6f6",
      marginTop: "3rem",
      boxShadow: "0px 0px 5px 3px #cbcbcb",
      width: "22vw",
    },

    account_icons: {
      display: "flex",
      flexDirection: "column",
    },

    // ----Grid size 4 style----

    grid4_container: {
      display: "flex",
      justifyContent: "flex-end",
    },

    // ----Grid size 8 style----

    grid8_container: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "10rem",
    },
    btn1: {
      ...theme.typography.secondary,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },

    btn2: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      padding: "0.4rem",
      fontWeight: "bold",
      textDecoration: "none",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },
  }));

  export default useStyles;

  