import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    primaryDiv: {
      marginTop: "18%",
    },
    mainDiv: {
      height: "auto",
      width: "500px",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -30%)",
      backgroundColor: "rgba(255, 255,255, 0.5)",
    },
    input: {
      border: "0px",
      fontSize: "20px",
      marginLeft: "10%",
      borderBottom: "1px solid #adb5bd",
      width: "75%",
      padding: "2%",
      backgroundColor: "white",
      display: "block",
      "&::placeholder": {
        color: "grey",
        opacity: 0.5,
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
      padding: "3% 30% 3% 30%",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
      },
    },
    divider: {
      marginTop: "8%",
      marginBottom: "5%",
      marginLeft: "auto",
      marginRight: " auto",
    },

    horizontalLine: {
      backgroundColor: theme.palette.secondary.main,
      width: "100%",
      marginTop: "12px",
      marginBottom: " 12px",
      borderRadius: "10px",
      height: "1px",
    },
    p: {
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      marginBottom: "5%",
    },
    heading: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      textAlign: "center",
      marginTop: "3%",
    },
    tab: {
      textDecoration: "none",
    },
    para: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      fontSize: "18px",
      marginTop: "5%",
    },
  }));


  export default useStyles