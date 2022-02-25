<!--
 * @Author: Orlando
 * @Date: 2022-02-25 12:36:13
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 12:37:29
 * @Description: 
-->
<template>
  <div style="background: green">
    <div>home的内容哦嘿嘿</div>
    <router-link to="/home/child1">home儿子1</router-link>
    <span style="margin: 0 10px">|</span>
    <router-link to="/home/child2">home儿子2</router-link>
    <router-view></router-view>
  </div>
</template>