<template>
    <div class="fu_box">
      我是父组件
      <button @click="changMsg">按钮</button>
      <img src="../assets/logo.png" alt="">
      <input type="text" v-model="lifemsg">
      <Son :title="msg" :lifemsg="lifemsg" :num="num" ></Son>


    </div>
</template>

<script>
    import Son from "./son.vue"
    export default {
        name: "mc",
        data() {
            return {
                msg:"我是动态数据",
                lifemsg:"",
                num:8,
                myobj: {
                  name:"25525",
                  age:36
                }
            }
        },
        components:{
          Son,
        },
        methods: {
          changMsg(event){
            this.msg = '我是修改后的数据'
          }
        }
    }
</script>

<style scoped>
.fu_box {
  background: #ddd;
}
</style>
