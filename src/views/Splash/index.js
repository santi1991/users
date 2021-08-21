import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersList } from '../Users/usersSlice';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const Splash = ({ endLoading }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const usersListStatus = useSelector(state => state.usersList.status);

    useEffect(() => {
		const onfetchUsersList = async () => {
			usersListStatus === 'idle' && await dispatch(fetchUsersList()).unwrap();			
			endLoading();
		};
		onfetchUsersList();
	}, []);

    return (
        <div className={classes.root}>
            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                style={{ minHeight: '100vh' }}
            >
                <CircularProgress />
                <h3>Obteniendo Datos...</h3>
            </Grid>
        </div>
    );
};

export default Splash;