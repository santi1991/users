import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { createUser, updateUser, deleteUser } from '../../utilities/api/gorest';
import { useDispatch } from 'react-redux';
import { deleteUserFromList, updateUserList, addUserToList } from '../Users/usersSlice';

const EditUser = ({ currentUser, handleCurrentUser }) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const initialState = {
        id: null,
        name: '',
        email: '',
        gender: 'male',
        status: 'active'
    };
    const [user, setUser] = useState(initialState);

    const onGenderChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            gender: event.target.value
        })
        );
    };

    const onNameChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            name: event.target.value
        })
        );
    };

    const onEmailChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            email: event.target.value
        })
        );
    };

    const callCreateUser = async () => {
        const obj = { ...user };
        delete obj.id;
        try {
            await createUser(obj);
            dispatch(addUserToList(obj));
            alert(`new user created ${JSON.stringify(obj)}`);

        }
        catch (error) {
            alert('ups! something went wrong');
        }
        setUser(initialState);
    };

    const callUpdateUser = async () => {
        const obj = { ...user };
        // delete obj.id;
        try {
            await updateUser(obj);
            dispatch(updateUserList(user));
            alert(`user updated ${JSON.stringify(obj)}`);
        }
        catch (error) {
            alert('ups! something went wrong');
        }
        setUser(initialState);
    };

    const callDeleteUser = async () => {
        const obj = { ...user };
        // delete obj.id;
        try {
            await deleteUser(user.id);
            dispatch(deleteUserFromList(user.id));

            alert(`user deleted!! ${JSON.stringify(obj)}`);
        }
        catch (error) {
            alert('ups! something went wrong');
        }
        // dispatch(deleteUserFromList(user.id));  
        setUser(initialState);
    };



    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);

    return (
        <div>
            <h3>User Details</h3>
            <TextField
                id='name'
                label='Name'
                variant='outlined'
                onChange={onNameChange}
                value={user.name}
                className={classes.textContainer}
            />
            <div className={classes.space}></div>
            <TextField
                id='email'
                label='Email'
                variant='outlined'
                onChange={onEmailChange}
                value={user.email}
                className={classes.textContainer}
            />


            <div style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>

                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Gender</FormLabel>
                    <RadioGroup aria-label='gender' name='gender1' value={user.gender} onChange={onGenderChange}>
                        <FormControlLabel value='female' control={<Radio />} label='Female' />
                        <FormControlLabel value='male' control={<Radio />} label='Male' />
                    </RadioGroup>
                </FormControl>

            </div>


            <div className={classes.buttonGroup}>
                <Button
                    className={classes.buttonContainer}
                    onClick={callCreateUser}
                    variant='contained'
                    color='primary'
                // disabled={user.name ? true : false}
                >
                    CREATE
                </Button>
                <Button
                    className={classes.buttonContainer}
                    onClick={callUpdateUser}
                    variant='contained'
                    color='primary'
                // disabled={!currentUser ? true : false}
                >
                    UPDATE
                </Button>
                <Button
                    className={classes.buttonContainer}
                    onClick={callDeleteUser}
                    variant='contained'
                    color='primary'
                    disabled={!user.name ? true : false}
                >
                    DELETE
                </Button>

                <Button
                    size='small'
                    className={classes.buttonContainer}
                    onClick={() => setUser(initialState)}
                    variant='contained'
                    color='secondary'
                >
                    Clear
                </Button>
            </div>





        </div>
    );
};

export default EditUser;

