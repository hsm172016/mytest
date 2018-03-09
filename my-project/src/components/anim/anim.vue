<template>
    <div class="">

      <button @click="showHide">按钮</button>
      <transition name="fade">
        <p v-show="show">{{msg}}</p>
      </transition>
      <button @click="showHideAnim">动画</button>
      <transition name="bounce">
        <p v-show="showAnim">{{msg}}</p>
      </transition>
      <button @click="animLibs">动画库</button>
      <transition name="word" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
        <p v-show="libs">{{msg}}</p>
      </transition>
    </div>
</template>

<script>

    export default {
        name: "anim",
        data() {
            return {
              msg:"傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼傻逼",
              show:true,
              showAnim:true,
              libs:true
            }
        },
      methods:{
        showHide(){
          this.show = !this.show;
        },
        showHideAnim(){
          this.showAnim = !this.showAnim;
        },
        animLibs(){
          this.libs = !this.libs;
        }
      }


    }
</script>

<style scoped>
 /* .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }*/
 /*从0->1的过程*/
  .fade-enter-active,.fade-leave-active {
    transition: all 2s;
  }
  .fade-enter,.fade-leave-to {
    transform: translate(100px,0);
    opacity: 0;
  }
  .fade-enter-to,.fade-leave{
    transform: translate(0px,0);
    opacity: 1;
  }
 .bounce-enter-active {
   animation: bounce-in 2s;
 }
 .bounce-leave-active {
   animation: bounce-in 2s reverse;
 }
 @keyframes bounce-in {
   0% {
     transform: scale(0);
   }
   50% {
     transform: scale(1.5);
   }
   100% {
     transform: scale(1);
   }
 }
</style>
