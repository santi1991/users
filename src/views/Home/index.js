import React, { useState } from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Users from '../Users';
import EditUser from '../EditUser';

const Home = () => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState({});

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Users
              onPressUser={setSelectedUser}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <EditUser 
              currentUser={selectedUser}
              handleCurrentUser={setSelectedUser}
            />
          </Paper>
        </Grid>

        {/* <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <SideButtons/>
          </Paper>
        </Grid> */}

      </Grid>
    </div>
  );
};

export default Home;