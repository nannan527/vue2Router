<!--
 * @Author: Orlando
 * @Date: 2022-02-25 12:31:13
 * @LastEditors: Orlando
 * @LastEditTime: 2022-02-25 12:46:16
 * @Description: 
-->
<template>
  <div id="app">
    <my-link to="/home">home的link</my-link>
    <span style="margin: 0 10px">|</span>
    <my-link to="/hello">hello的link</my-link>
    <my-view>1</my-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.my-link-exact-active {
  color: #42b983;
}
</style>
