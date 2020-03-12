import { request } from './api';

// 회원가입
function registerUser(userData) {
	return request.post('signup', userData);
}

// 로그인
function loginUser(loginData) {
	return request.post('login', loginData);
}

export { registerUser, loginUser };
