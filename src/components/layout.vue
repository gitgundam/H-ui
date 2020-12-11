<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'H-Layout',
  data(){
    return{
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(vm=> {
     if( vm.$options.name === 'H-Sider'){
        this.layoutClass.hasSider = true
     }
    })
  }
}
</script>

<style scoped lang="scss">
  .layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>