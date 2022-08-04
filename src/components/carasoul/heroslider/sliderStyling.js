import { makeStyles } from "@material-ui/styles";

//default function name of material UI
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: " center center",
    width: "100%",
    height: "100%",
    opacity: 1,
    visibility: "inherit",
  },
  button: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    position: "absolute",
    top: "50%",
    left: "20%",
    fontWeight: "bold",
    borderRadius: "20px",
    borderWidth: "3px ",
    borderColor: theme.palette.secondary.main,
    padding: "5px 35px 5px 35px",
  },
}));

export default useStyles;
