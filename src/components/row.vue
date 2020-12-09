<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">

.row {
  display: flex;
}


.col[data-span = '2'] {
  width: 8.333333%;
}

.col[data-span = '22'] {
  width: 91.666667%;
}
</style>