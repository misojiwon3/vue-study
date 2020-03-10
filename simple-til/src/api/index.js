import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL
});

// axios.defaults.baseURL = 'http://localhost:3000';

function registerUser(userData) {
	console.log(process.env);
	// const url = 'http://localhost:3000/signup';
	// return axios.post('signup', userData);
	return instance.post('signup', userData);
}

function loginUser(loginData) {
	return instance.post('login', loginData);
}

export { registerUser, loginUser };
