import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/routes.js';
import store from '@/store/store.js';
import { formatDate } from '@/utils/filters';

Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
