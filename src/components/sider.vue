<template>
  <transition name="slide">
    <div class="sider" v-if="show">
      <slot></slot>
      <button @click="isShow">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'H-Sider',
  data(){
    return{
      show: true
    }
  },
  methods:{
    isShow(){
      this.show = false
    }
  }
};
</script>

<style scoped lang="scss">
.sider {
  width: 200px;
  position: relative;

  button {
    position: absolute;
    top: 4px;
    right: 10px;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}
.slide-enter, .slide-leave-to  {
  margin-left: -200px;
}

</style>