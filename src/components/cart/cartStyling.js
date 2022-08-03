import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  secondDiv: {
    display: "flex",
  },
  bottomDiv: {
    marginTop: "10%",
    display: "flex",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
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
  title: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    fontSize: "16px",
    fontWeight: "bold",
  },
  totalTitle: {
    ...theme.typography.secondary,
    color: theme.palette.secondary.main,
    fontSize: "24",
    fontWeight: "nomral",
  },
  price: {
    color: theme.palette.primary.dark,
    ...theme.typography.secondary,
  },

  total: {
    ...theme.typography.secondary,
    color: theme.palette.primary.dark,
    fontSize: "24px",
    fontWeight: "normal",
  },
}));

export default useStyles;
