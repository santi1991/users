import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsersList } from '../Users/usersSlice';
import { useStyles } from './styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const Users = ({ onPressUser }) => {

    const classes = useStyles();
    const usersList = useSelector(selectUsersList);
    const [search, setSearch] = useState('');

    

    return (
        <>
            <TextField
                id='search'
                label='search'
                variant='outlined'
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                className={classes.textContainer}
            />
            <List component='nav' className={classes.root} aria-label='mailbox folders'>
                {
                    !usersList ? ( <h3>No data...</h3>) : ( 
                    usersList.map((item) => (
                        <div key={item.id}>
                            <ListItem button onClick={() => onPressUser(item)}>
                                <ListItemText 
                                    primary={`name: ${item.name}`}
                                    secondary={`email: ${item.email}`}
                                />
                            </ListItem>
                            <Divider />
                        </div>
                    ))
                    )
                }
            </List>
        </>
    );
};

export default Users;
