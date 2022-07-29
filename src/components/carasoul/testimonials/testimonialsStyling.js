import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginRight: '120px',
        marginLeft: '80px'
    },
    firstHeading: {
        ...theme.typography.primary,
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '26px',
        marginBottom: 0,
        marginTop: '50px',
        textAlign: 'center'
    },
 
}));

export default useStyles