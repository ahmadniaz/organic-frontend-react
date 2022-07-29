import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    primaryDiv: {
      marginTop: "10%",
    },
    mainDiv: {
      height: "200px",
      width: "50%",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, 25%)",
      backgroundColor: "rgba(255, 255,255, 0.5)",
      marginBottom: "30%",
      textAlign:"end"
    },
    thirdHeading: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      letterSpacing: "1px",
      fontSize: "30px",
      fontWeight: "bold",
      marginTop: 0,
      marginLeft: "5%",
    },
    input: {
      border: "0px",
      fontSize: "20px",
      marginLeft: "10%",
      borderBottom: "1px solid #03235a",
      width:"40%",
      padding:"2%",
      display:"inline",
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
        width:"100%",
        padding:"2%",
        display:"block",
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

  export default useStyles