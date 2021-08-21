import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersList } from '../../utilities/api/gorest';

const initialState = {
	page: 1,
	usersList: [],
	status: 'idle',
	error: null
};

export const fetchUsersList = createAsyncThunk(
	'usersList/fetchUsersList',
	async () => {
		const data = await getUsersList();
		return data.data;
	}
);

export const usersListSlice = createSlice({
	name: 'usersList',
	initialState,
	reducers: {
		setUsersList: (state, action) => {
			state.usersList = state.usersList.concat(action.payload);
		},
		deleteUserFromList(state, action) {
			// Construct a new result array immutably and return it
			return state.filter(user => user.id !== action.payload);
		}
	},
	extraReducers: {
		[fetchUsersList.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchUsersList.fulfilled]: (state, action) => {
			return {
				...state,
				status: 'succeeded',
				usersList: action.payload
			};
		},
		[fetchUsersList.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		}
	}
});

/**
 * Selectors
 */
export const selectUsersList = state => state.usersList.usersList;

export const selectUsersListById = (state, userId) =>
	state.usersList.usersList.find(user => user.id === userId);

export const { setUsersList, deleteUser } = usersListSlice.actions;
export default usersListSlice.reducer;