<!--1模板: html 结构-->
<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>
<!--2行为：处理逻辑-->
<script>
  import Users from './Users'
  import Header from './Header'
  import Footer from './Footer'
  import AppFooter from "./Footer.vue";
  export default {
    name: 'home',
    data(){
      return {
        // title:"这是我的第一个Vue脚手架项目！"
        users: [
         /* {name:"henry1",position:"web开发1",show:false},
          {name:"henry2",position:"web开发2",show:false},
          {name:"henry3",position:"web开发3",show:false},
          {name:"henry4",position:"web开发4",show:false},
          {name:"henry5",position:"web开发5",show:false},*/
        ],
        title:"传递是的值",
      }
    },
    methods:{
      updateTitle:function (title) {
        this.title = title;
      }
    },
    components: {
      AppFooter,
      "users":Users,
      "app-header":Header,
      "app-footer":Footer,
    },
    created(){
      this.$http.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        //console.log(data);
        this.users = data.body;
      })
    }

  }
</script>
<!--3样式：-->
<style scoped>
  h1 {
    color: red;
  }
</style>
