import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    paragraph: {
        ...theme.typography.primary,
        color: theme.palette.secondary.main,
        fontSize: '12px'
    },
    heading: {
        ...theme.typography.secondary,
        color: theme.palette.secondary.main,
    },

    title: {
        ...theme.typography.secondary,
        color: theme.palette.secondary.main,
        fontSize: '36px',
        fontWeight: 'bold'
    },
    firstPara: {
        ...theme.typography.primary,
        color: theme.palette.secondary.main,
        letterSpacing: '1px',
        fontSize: '22px',
        fontWeight: 'bold',
    },
    secondPara: {
        ...theme.typography.secondary,
        color: theme.palette.secondary.main,
        fontSize: '14px',
        marginBottom: 0,
    },
    tab: {
        textDecoration: 'none'
    },
}))

export default useStyles