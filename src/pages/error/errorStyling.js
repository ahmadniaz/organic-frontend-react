import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    title: {
      ...theme.typography.secondary,
      color: theme.palette.secondary.main,
      fontSize: "36px",
      fontWeight: "bold",
    },
  }));

  export default useStyles