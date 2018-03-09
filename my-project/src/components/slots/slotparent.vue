<template>
    <div class="fu_box">
      父组件
      <Slotchild>
        <p slot="s1">我来自父组件的插槽1</p>
        <p slot="s2" slot-scope="props">{{props.text}}</p>
      </Slotchild>
    </div>
</template>

<script>
    import Slotchild from "./slotchild.vue"

    export default {
        name: "slotparent",
        data() {
            return {
              info:'',
              nums:90,
            }
        },
       components:{
         Slotchild,
       },



    }
</script>

<style scoped>
  .fu_box {
    background: #ddd;
  }
</style>
