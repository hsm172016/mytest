<template>
    <div class="son_box">
       子组件
      <slot name="s1"></slot>
      <hr>
      <slot name="s2" text="我是数据"></slot>
    </div>
</template>

<script>

    export default {
        name: "slotchlid",
        data() {
            return {
              msg:"来自子组件的数据",
            }
        },


    }
</script>

<style scoped>
  .son_box {
    background: papayawhip;
    width: 30%;
  }
</style>
