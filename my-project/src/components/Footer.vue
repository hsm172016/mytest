<!--1模板: html 结构-->
<template>
  <footer>
    <p>{{copyright}}{{title}}</p>
  </footer>
</template>
<!--2行为：处理逻辑-->
<script>

  export default {
    name: 'app-footer',
    props:{
      title:{
        type:String,
      }
    },
    data(){
      return {
        copyright:"copyright 2017 vue.js demo"
      }
    },
  }
</script>
<!--3样式：-->
<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }
  p {
    color: lightgreen;
    text-align: center;
  }
</style>
