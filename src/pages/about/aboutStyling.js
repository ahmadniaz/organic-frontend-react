import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    paragraph: {
      ...theme.typography.primary,
      color: theme.palette.secondary.main,
      fontSize: "14px",
      marginTop: "2%",
    },
    heading: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      float: "left",
      display: "contents",
      fontSize: "32px",
      fontWeight: "bold",
    },
  }));

  export default useStyles