<template>
    <div class="son_box">
        子组件 -> {{num}}
      <button @click="sendMsg">传递</button>
    </div>
</template>

<script>

    export default {
        name: "",
        data() {
            return {
              msg:"来自子组件的数据",
            }
        },
        computed:{
           addNum(){
             return this.num*5
           }
        },
        props:{
          num:{
            type:Number,
            default:1
          }
        },
        methods: {
          sendMsg(event){
            //this.$emit（）两个参数：1.key 2 数据
            this.$emit("sendmsg",this.addNum)
          }
        }

    }
</script>

<style scoped>
  .son_box {
    background: papayawhip;
    width: 30%;
  }
</style>
