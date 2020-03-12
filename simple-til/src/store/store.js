import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie
} from '@/utils/cookies.js';
import { loginUser } from '@/api/auth.js';

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
    },
    clearToken(state) {
      state.token = '';
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
    }
  }
});
