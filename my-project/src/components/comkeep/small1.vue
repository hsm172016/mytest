<template>
    <div class="">
      {{msg}}
      <button @click="changeinfo">changeinfo</button>
    </div>
</template>

<script>

    export default {
        name: "small1",
        data() {
            return {
              msg:"small1"
            }
        },
        methods:{
          changeinfo(){
            this.msg = 'small111111'

          }
        }


    }
</script>

<style scoped>

</style>
