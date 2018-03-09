<!--1模板: html 结构-->
<template>
  <div id="app">
    <p>{{title}}</p>
    <!--<Mycomponent></Mycomponent>-->
    <!--<Slotparent></Slotparent>-->
    <!--<Big1></Big1>-->
    <Anim></Anim>
  </div>
</template>
<!--2行为：处理逻辑-->
<script>
  import Mycomponent from "./components/myComponent.vue"
  import Slotparent from "./components/slots/slotparent.vue"
  import Big1 from "./components/comkeep/big.vue"
  import Anim from "./components/anim/anim.vue"
export default {
  name: 'App',
  data(){
    return {
      title:"这是我的第一个Vue脚手架项目！"

    }
  },
  components: {
    Mycomponent,
    Slotparent,
    Big1,
    Anim
  }
}
</script>
<!--3样式：-->
<style>

</style>
