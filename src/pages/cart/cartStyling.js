import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: "15%",
    display: "flex",
  },
  secondDiv: {
    marginTop: "5%",
    display: "flex",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
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
    fontSize: "30px",
    fontWeight: "bold",
  },
  quantity: {
    ...theme.typography.primary,
    color: theme.palette.secondary.main,
  },
  price: {
    color: theme.palette.primary.dark,
    ...theme.typography.secondary,
  },
  input: {
    width: "40%",
    textAlign: "center",
    borderRadius: "15px",
    borderColor: theme.palette.secondary.main,
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
  deleteIcon: {
    width: "50%",
    cursor: "pointer",
  },
  total: {
    ...theme.typography.secondary,
    color: theme.palette.primary.dark,
    fontSize: "36px",
    fontWeight: "bold",
  },
  tab: {
    textDecoration: "none",
  },
}));

export default useStyles;
