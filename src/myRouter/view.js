/*
 * @Author: Orlando
 * @Date: 2022-02-25 14:38:01
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 15:56:55
 * @Description:my-view组件渲染
 */

const myView = {
  functional: true,
  render(h, { parent, data }) {
    const { matched = [] } = parent.$router;

    data.routerView = true; // 标识此组件为my-view
    let depth = 0; //深度索引

    while (parent) {
      // 如果有父组件且父组件为my-view 说明索引需要加1
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      parent = parent.$parent;
    }

    const record = matched[depth];

    console.log(record);

    if (!record) return h();

    const component = record.component;

    // 使用render的h函数进行渲染组件
    return h(component, data);
  },
};

export default myView;
