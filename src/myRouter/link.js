/*
 * @Author: Orlando
 * @Date: 2022-02-25 14:46:28
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 14:54:16
 * @Description:my-link跳转
 */

const myLink = {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  // 渲染
  render(h) {
    // 使用render的h函数渲染
    return h(
      // 标签名
      'a',
      // 标签属性
      {
        domProps: {
          href: '#' + this.to,
        },
      },
      // 插槽内容
      [this.$slots.default]
    );
  },
};

export default myLink;
