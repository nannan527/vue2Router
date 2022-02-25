/*
 * @Author: Orlando
 * @Date: 2022-02-25 12:31:13
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 15:24:55
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import myLink from './myRouter/link';
import myView from './myRouter/view';

Vue.config.productionTip = false;

Vue.component('my-link', myLink);
Vue.component('my-view', myView);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
