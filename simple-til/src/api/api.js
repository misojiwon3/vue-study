import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

function createRequest() {
	const request = axios.create({
		baseURL: process.env.VUE_APP_API_URL
	});
	return request;
}

// 액시오스 초기화 함수
function createRequestWithToken() {
	return setInterceptors(createRequest());
}

export const request = createRequest();
export const requestWithToken = createRequestWithToken();

// axios.defaults.baseURL = 'http://localhost:3000';
