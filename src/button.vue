<template>
  <button :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {icon:{},
    iconPosition:{
     type: String,
      default: 'left'
    }

}
};
</script>

<style lang="scss">
@import 'assets/style/helper.scss';

button {
  font-size: $font-size;
  height: $button-height;
  background: $button-bg;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  vertical-align: middle;
  display: inline-flex;
  padding: 0 1em;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid $button-color-hover;
  }

  &:active {
    background: $button-color-active;
  }

  &:focus {
    outline: none;
  }

  > .icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: .3em;
  }
  &.icon-right{
    >.icon{
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }

}
</style>