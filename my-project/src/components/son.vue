<template>
    <div class="son_box">
      我是子组件=>{{title}}
      66666666666666=>{{lifemsg}}=>{{num*2}}=>{{objdata.name}}

    </div>
</template>

<script>

    export default {
        name: "son",
        props:{
          title:[String,Number],
          lifemsg:{
            type:String,
            required:true,
          },
          num:{
            type: Number,
            default:5
          },
          objdata:{
            type:Object,
            default:function () {
              return {
                name:'xioo',
                age:20
              }
            }
          }
        },
        data() {
            return {

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
