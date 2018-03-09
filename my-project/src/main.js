// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
/*import Home from './components/Home'
import HelloWorld from './components/HelloWorld'*/
//import Users from './components/Users'
Vue.config.productionTip = false;
/*Vue.use(VueRouter)
Vue.use(VueResource)*/
//配置路由
/*const router = new VueRouter({
  routes: [
    {path:'/',component:Home},
    {path:'/helloworld',component:HelloWorld},
  ],
  mode:"history"
});*/
/* eslint-disable no-new */
//全局注册组件
//Vue.component('users',Users);
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// index.html -> main.js -> App.vue
