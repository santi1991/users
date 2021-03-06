import axios from 'axios';
// eslint-disable-next-line no-undef
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const API_SEARCH = '/users';

const axiosClient = axios.create({
	// baseURL: REACT_APP_API_URL,
	headers: { 'Authorization': `Bearer ${REACT_APP_API_KEY}` }
});


// axiosClient.defaults.baseURL = REACT_APP_API_URL;

// axiosClient.defaults.headers = {
// 	'Content-Type': 'application/json',
// 	Accept: 'application/json',
// 	// Authorization: `Bearer ${REACT_APP_API_KEY}`
// };

// axios.defaults.headers.common = { 'Authorization': `bearer ${REACT_APP_API_KEY}` };

// axiosClient.defaults.auth = {
// 	username: 'santiago.marulandam@gmail.com',
// 	// password: 's00pers3cret'
// };

//All request will wait 2.5 seconds before timeout
// axiosClient.defaults.timeout = 2500;




// https://gorest.co.in/public/v1/users?access-token=xxx

// const createUrl = () => `${REACT_APP_API_URL}${API_SEARCH}`;
const URL = `${REACT_APP_API_URL}${API_SEARCH}`;

// const createUrl = () => `${API_SEARCH}`;

export const getUsersList = async () => {
	// const url = createUrl();
	try {
		const response = await axiosClient.get(URL);
		// console.log(response);
		// return response.data.data;
		return response.data;

	}
	catch (error) {
		console.log(error);
	}
};

export const createUser = async (data) => {
	// const url = createUrl();
	try {
		console.log(data);
		const response = await axiosClient.post(URL, data);
		console.log(response);

	}
	catch (error) {
		console.log(error);
	}
};

export const updateUser = async (data) => {
	// const url = createUrl();
	try {
		console.log(data);
		// const response = await axiosClient.patch(URL, data);
		const response = await axiosClient.patch(`${URL}/${data.id}`, data);
		console.log(response);

	}
	catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (data) => {
	// const url = createUrl();
	try {
		console.log(data);
		// const response = await axiosClient.delete(URL, { data: data });
		const response = await axiosClient.delete(`${URL}/${data}`);
		console.log(response);

	}
	catch (error) {
		console.log(error);
	}
};