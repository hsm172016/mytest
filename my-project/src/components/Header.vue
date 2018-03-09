<!--1模板: html 结构-->
<template>
  <header v-on:click="changTitle">
    <h1>{{title1}}{{title}}</h1>
  </header>
</template>
<!--2行为：处理逻辑-->
<script>

  export default {
    name: 'app-header',
    props:{
      title:{
        type:String,
      }
    },
    data(){
      return {
        title1:"vue.js demo"
      }
    },
    methods: {
      changTitle:function () {
        //this.title = "698手动阀手动阀";
        this.$emit("titleChanged",'子向父组件传值')
      }
    },
   /* beforeCreate:function () {
      alert("组件实例化之前执行的函数");
    },
    created:function () {
      alert("组件实例化完毕，但页面还未显示");
    },
    beforeMount:function () {
      alert("组件挂载前，页面仍未展示，但虚拟dom已经配置");
    },
    ountmed:function () {
      alert("组件挂载前，此方法执行后，页面显示");
    },
    beforeUpdate:function () {
      alert("组件更新前，页面仍未更新，但虚拟dom已经配置");
    },
    updated:function () {
      alert("组件更新后，此方法执行后，页面显示");
    },
    beforeDestory:function () {
      alert("组件销毁前");
    },
    destoryed:function () {
      alert("组件销毁");
    },*/

  }
</script>
<!--3样式：-->
<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>
