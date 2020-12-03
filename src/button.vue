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
  props: ['icon', 'iconPosition']
};
</script>

<style lang="scss">
@import 'assets/style/helper.scss';

button {
  vertical-align: middle;
  display: inline-flex;
  font-size: 10px;
  padding: 0 1em;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
  }

  &:active {
  }

  &:focus {
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