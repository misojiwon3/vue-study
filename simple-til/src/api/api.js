import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수
function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL
	});
	return setInterceptors(instance);
}

const request = createInstance();

// axios.defaults.baseURL = 'http://localhost:3000';

// 회원가입
function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post('signup', userData);
	return request.post('signup', userData);
}

// 로그인
function loginUser(loginData) {
	return request.post('login', loginData);
}

// 노트 조회
function fetchPosts() {
	return request.get('posts');
}

export { registerUser, loginUser, fetchPosts };
