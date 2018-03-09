<template>
    <div class="fu_box">
      ein->{{nums}}
      <input type="text" v-model="nums">
      <Child @sendmsg="getMsg" :num="getNum"></Child>
    </div>
</template>

<script>
    import Child from "./child.vue"

    export default {
        name: "",
        data() {
            return {
              info:'',
              nums:90,
            }
        },
       components:{
         Child,
       },
       computed: {
          getNum(){
            return this.nums - 0;
          }
       },
       methods:{
          getMsg(data){
            this.nums = data;
            console.log(data);
          }
       }

    }
</script>

<style scoped>
  .fu_box {
    background: #ddd;
  }
</style>
