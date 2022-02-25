/*
 * @Author: Orlando
 * @Date: 2022-02-25 13:42:51
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 14:56:30
 * @Description:
 */

class HashHistory {
  constructor(router) {
    //保存router实例
    this.router = router;

    // 一开始给current赋值初始值
    this.current = createRoute(null, { path: '/' });

    //如果Url 没有 #，自动填充 #
    ensureSlash();

    //监听hash变化
    this.setupHashLister();
  }
  //监听hash变化
  setupHashLister() {
    window.addEventListener('hashchange', () => {
      // 传入当前url的hash，并触发跳转
      this.transitionTo(window.location.hash.slice(1));
    });
  }

  //路由跳转出发函数
  transitionTo(location) {
    // 每次hash变化都会触发，可以自己在浏览器修改试试
    console.log(location);
    // 比如 http://localhost:8080/#/home/child1 最新hash就是 /home/child1

    // 找出所有对应组件，router是VueRouter实例，createMathcer在其身上
    let route = this.router.createMathcer(location);

    console.log(route);

    this.current = route;

    // 同时更新_route
    this.cb && this.cb(route);
  }

  //监听回调
  listen(cb) {
    this.cb = cb;
  }
}

//如果Url 没有 #，自动填充 #
function ensureSlash() {
  if (window.location.hash) return;
  //会在地址后面加上 '#/'
  window.location.hash = '/';
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

export default HashHistory;
