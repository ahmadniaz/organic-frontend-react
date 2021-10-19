import React from 'react'
import { makeStyles } from "@material-ui/styles";
import empty from '../../Assets/empty.png'

const EmptyCart = () => {

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
    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.title}>You Cart is Empty. Please Add some products in it!</h1>
            <img alt="Empty Cart" src={empty} />
        </div>
    )
}

export default EmptyCart
