/*
 * @Author: Orlando
 * @Date: 2022-02-25 12:31:13
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 12:34:34
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
