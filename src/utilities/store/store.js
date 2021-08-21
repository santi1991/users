import { configureStore  } from '@reduxjs/toolkit';
import usersListReducer from '../../views/Users/usersSlice';

export default configureStore({
	reducer: {
		usersList: usersListReducer,		
	}
});
