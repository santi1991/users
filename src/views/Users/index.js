import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUsersList } from '../Users/usersSlice';
import { useStyles } from './styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const Users = ({ onPressUser }) => {
    console.log('User screen');
    const classes = useStyles();
    const usersList = useSelector(selectUsersList);

    const [search, setSearch] = useState('');

    const [usersData, setUserData] = useState(usersList);

    const filterList = (masterArray, targetText) => {
        return masterArray.filter((item) => {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = targetText.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
    };

    const searchUserByName = (text) => {
        setSearch(text);
        if (text) {
            const newFilteredData = filterList(usersData, text);
            return setUserData(newFilteredData);
        }
        else {
            return setUserData(usersList);
        }
    };

    useEffect(() => {
        setUserData(usersList);
    }, [usersList]);

    return (
        <>
            <TextField
                id='search'
                label='search'
                variant='outlined'
                onChange={(event) => searchUserByName(event.target.value)}
                value={search}
                className={classes.textContainer}
            />
            <List component='nav' className={classes.root} aria-label='mailbox folders'>
                {
                    !usersData ? (<h3>No data...</h3>) : (
                        usersData.map((item) => (
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
