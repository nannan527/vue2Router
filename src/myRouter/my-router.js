/*
 * @Author: Orlando
 * @Date: 2022-02-25 12:47:59
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 13:20:44
 * @Description:
 */
class VueRouter {
  constructor(options) {}
  init(app) {}
}

let _Vue;
VueRouter.install = (Vue) => {
  _Vue = Vue;
  //使用mixin
  Vue.mixin({
    // 在每一个组件的beforeCreate生命周期去执行
    beforeCreate() {
      //是根组件
      if (this.$options.router) {
        // this 是 根组件本身
        this._routerRoot = this;
        // this.$options.router就是挂在根组件上的VueRouter实例
        this.$router = this.$options.router;
        // 执行VueRouter实例上的init方法，初始化
        this.$router.init(this);
      } else {
        // 非根组件，也要把父组件的_routerRoot保存到自身身上
        this._routerRoot = this.$parent && this.$parent._routerRoot;
        // 子组 挂上$router
        this.$router = this.$parent.$router;
      }
    },
  });
};

//将传进来的routes数组转成一个Map结构的数据结构，key是path，value是对应的组件信息

export default VueRouter;
