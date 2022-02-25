import HashHistory from './hashHistory';

/*
 * @Author: Orlando
 * @Date: 2022-02-25 12:47:59
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 15:58:37
 * @Description:
 */
class VueRouter {
  constructor(options) {
    this.options = options;

    // 如果不传mode，默认为 hash
    this.mode = options.mode || 'hash';

    // 判断模式是哪种
    switch (this.mode) {
      case 'hash':
        this.history = new HashHistory(this);
        break;
      case 'history':
        //this.history = new HTML5History(this, options.base)
        break;
      case 'abstract':
    }
  }
  //初始化
  init(app) {
    // 把回调传进去，确保每次current更改都能顺便更改_route触发响应式
    this.history.listen((route) => (app._route = route));

    // 初始化时执行一次，保证刷新能渲染
    this.history.transitionTo(window.location.hash.slice(1));
  }

  // 根据hash变化获取对应的所有组件 (ke rui te mai qi; Mathcer=匹配器)
  createMathcer(location) {
    //获取 pathMap
    const { pathMap } = createRouteMap(this.options.routes);

    const record = pathMap[location];
    const local = {
      path: location,
    };
    if (record) {
      return createRoute(record, local);
    }
    return createRoute(null, local);
  }
}

function createRoute(record, location) {
  const res = [];
  if (record) {
    while (record) {
      res.unshift(record);
      record = record.parent;
    }
  }
  return {
    ...location,
    matched: res,
  };
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

        // 相当于存在_routerRoot上，并且调用Vue的defineReactive方法进行响应式处理
        Vue.util.defineReactive(this, '_route', this.$router.history.current);
      } else {
        // 非根组件，也要把父组件的_routerRoot保存到自身身上
        this._routerRoot = this.$parent && this.$parent._routerRoot;
        // 子组 挂上$router
        this.$router = this.$parent.$router;
      }
    },
  });

  // 访问$route相当于访问_route
  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._routerRoot._route;
    },
  });
};

//将传进来的routes数组转成一个Map结构的数据结构，key是path，value是对应的组件信息
function createRouteMap(routes) {
  const pathList = [];
  const pathMap = {};

  //传进来的router数组进行遍历
  routes.forEach((route) => {
    addRouteRecord(route, pathList, pathMap);
  });

  console.log(pathList);
  // ["/home", "/home/child1", "/home/child2", "/hello", "/hello/child1","/hello/child2"]
  console.log(pathMap);
  // {
  //     '/home': { path: '/home', component: 'home', parent: undefined },
  //     '/home/child1': { path: '/home/child1',component: 'homeChild1',parent: { path: '/home', component: 'home', parent: undefined }},
  //     '/home/child2': {path: '/home/child2',component: 'homeChild2',parent: { path: '/home', component: 'home', parent: undefined }},
  //     ...
  // }

  return {
    pathList,
    pathMap,
  };
}

/**
 *
 * @param {*} route {path: '/home',component: home,children: [{path: 'child1',component: homeChild1,},
   },
 * @param {*} pathList []
 * @param {*} pathMap {}
 * @param {*} parent {path,component,parent,}
 */

function addRouteRecord(route, pathList, pathMap, parent) {
  const path = parent ? `${parent.path}/${route.path}` : route.path;
  const { component, children = null } = route;
  const record = {
    path,
    component,
    parent,
  };

  if (!pathMap[path]) {
    pathList.push(path);
    pathMap[path] = record;
  }

  if (children) {
    // 如果有children，则递归执行addRouteRecord
    children.forEach((child) => addRouteRecord(child, pathList, pathMap, record));
  }
}

export default VueRouter;
