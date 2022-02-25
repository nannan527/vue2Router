/*
 * @Author: Orlando
 * @Date: 2022-02-25 12:31:13
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 12:44:30
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/home.vue';
import hello from '../components/hello.vue';
import homeChild1 from '../components/home-child1.vue';
import homeChild2 from '../components/home-child2.vue';
import helloChild1 from '../components/hello-child1.vue';
import helloChild2 from '../components/hello-child2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: home,
    children: [
      {
        path: 'child1',
        component: homeChild1,
      },
      {
        path: 'child2',
        component: homeChild2,
      },
    ],
  },
  {
    path: '/hello',
    component: hello,
    children: [
      {
        path: 'child1',
        component: helloChild1,
      },
      {
        path: 'child2',
        component: helloChild2,
      },
    ],
  },
];

export default new VueRouter({
  routes, // 第二步
});
