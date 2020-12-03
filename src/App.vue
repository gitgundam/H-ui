<template>
  <div id="app">
    <h-button>默认</h-button>
    <h-button icon="setting" icon-position="right">设置</h-button>
    <h-button icon="setting">加载中</h-button>
    <h-button icon="setting" :is-loading="loading" @click="loading=!loading">状态切换</h-button>


  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>