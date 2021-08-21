import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const SideButtons = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container spacing={3}
                direction='column'
                justifyContent='center'
                alignItems='center'
            >
                <Grid item xs={12} sm={6}>
                    <h3>OPERATIONS</h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={() => { alert('clicked CREATE'); }}
                        variant='contained'
                        color='primary'
                    >
                        CREATE
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={() => { alert('clicked UPDATE'); }}
                        variant='contained'
                        color='primary'>
                        UPDATE
                    </Button>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Button
                        onClick={() => { alert('clicked DELETE'); }}
                        variant='contained'
                        color='primary'>
                        DELETE
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default SideButtons;