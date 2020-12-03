<template>
  <svg class="h-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
};
</script>

<style scoped lang="scss">
.h-icon {
  width: 1em;
  height: 1em;

}
</style>