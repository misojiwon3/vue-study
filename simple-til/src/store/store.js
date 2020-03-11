import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie
} from '@/utils/cookies.js';
import { loginUser, createPost } from '@/api/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || ''
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		}
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
		},
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		}
	},
	actions: {
		async LOGIN({ commit }, loginData) {
			const { data } = await loginUser(loginData);
			commit('setToken', data.token);
			commit('setUsername', data.user.username);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			return data; // data가 필요할 수 있으므로 명시적으로 넘겨줌
		},
		async CREATE_POST(state, postData) {
			const { data } = await createPost(postData);
			return data;
		}
	}
});
