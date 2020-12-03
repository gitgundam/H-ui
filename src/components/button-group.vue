<template>
  <div class="h-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'button-group',
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== 'button')
        console.warn('<h-button-group>的子元素应该全是<h-button></h-button>');
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/style/helper";

.h-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .h-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>