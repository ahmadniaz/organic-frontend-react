import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
    mainDiv: {
        marginTop: '10%',
        textAlign: 'center'
    },
    title: {
        ...theme.typography.secondary,
        color: theme.palette.secondary.main,
        fontSize: '30px',
        fontWeight: 'bold',

    }

}))

export default useStyles