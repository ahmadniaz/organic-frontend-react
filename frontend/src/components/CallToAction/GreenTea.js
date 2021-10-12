import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { theme } from '../Theme'
import GreenTea from '../../Assets/GreenTea.png'
import { Button } from '@material-ui/core';

const GreenTeaSection = () => {
    const useStyles = makeStyles(theme => ({
        mainGrid: {
            width:'98%', 
            marginLeft:'auto', 
            marginRight:'auto', 
            marginTop:'15%',
        },
        firstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '18px',
            marginBottom: 0,
            height: '5%'

        },
        secondHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '50px',
            marginTop: 0,
            marginBottom: 0,
            height: '10%'

        },
        thirdHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '70px',
            fontWeight: 'bold',
            marginTop: 0,
            height: '15%'

        },
        fourthHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '18px',
            maxWidth: '450px'
        },
        floatingDiv: {
            position: 'relative',
            top: '-30%'
        },
        button: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            marginTop: 0,
            fontWeight: 'bold',
            borderRadius: '20px',
            borderWidth: '3px ',
            borderColor: theme.palette.secondary.main,
            padding: '5px 35px 5px 35px',
        }
    }))
    const classes = useStyles();
    return (
        <>

            <Grid container className={classes.mainGrid}
                style={{
                    backgroundColor: theme.palette.secondary.contrastText,
                    borderRadius: '15px', marginTop: '25%', maxHeight: '400px'
                }}>
                <Grid item xs={12} style={{ display: 'flex' }}>
                    <div className={classes.floatingDiv}>
                        <img alt="Green Tea" src={GreenTea} style={{ width: '85%' }} />
                    </div>
                    <div style={{paddingRight:'40px', paddingTop:'40px'}}>
                        <p className={classes.firstHeading} >Enjoy</p>
                        <p className={classes.secondHeading}>BEST</p>
                        <p className={classes.thirdHeading}>GREEN TEA</p>
                        <p className={classes.fourthHeading}>Our purest and finest Green Tea collection is available in our online Store</p>
                        <Button variant="outlined" className={classes.button}>
                            <span> SHOP NOW </span>
                        </Button >
                    </div>
                </Grid>
            </Grid>

        </>
    )
}
export default GreenTeaSection;
