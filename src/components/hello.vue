<!--
 * @Author: Orlando
 * @Date: 2022-02-25 12:36:23
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 12:36:24
 * @Description: 
-->
<template>
  <div style="background: orange">
    <div>hello的内容哦嘿嘿</div>
    <router-link to="/hello/child1">hello儿子1</router-link>
    <span style="margin: 0 10px">|</span>
    <router-link to="/hello/child2">hello儿子2</router-link>
    <router-view></router-view>
  </div>
</template>
