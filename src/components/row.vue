<template>
  <div class="row" :style = "rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'H-row',
  props:{
    gutter:{
      type:[Number,String],
      default: 0
    },
    align:{
      type: String,
      validator(value){
        return ['left','center','right'].includes(value)
      }
    }
  },
  mounted() {
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
  },
  computed:{
    rowStyle(){
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    },
    rowClass(){
      let {align} = this
      return [align &&`align-${align}`]
    }
  }

}
</script>

<style scoped lang="scss">

.row {
  background: #999999;
  display: flex;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-center{
    justify-content: center;
  }
  &.align-right{
    justify-content: flex-end;
  }
}

</style>