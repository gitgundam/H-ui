<template>
  <div id="app">
    <h-button>默认</h-button>
    <h-button icon="setting" icon-position="right">设置</h-button>
    <h-button icon="setting" :is-loading="true">加载中</h-button>
    <h-button icon="setting" :is-loading="loading" @click="loading=!loading">状态切换</h-button>
    <h-button></h-button>
    <h-button-group>
      <h-button icon="left">上一页</h-button>
      <h-button>更多</h-button>
      <h-button icon="right" icon-position="right">下一页</h-button>
    </h-button-group>
    <h-button icon="setting"></h-button>
    <h-input disabled value="张三" error="请输入名称"></h-input>
    <h-input readonly value="李四"></h-input>
    <h-input></h-input>
    <h-layout>
      <h-header class="demo"></h-header>
      <h-content class="demo"></h-content>
      <h-footer class="demo"></h-footer>
    </h-layout>
    <h-layout>
      <h-sider class="demo">sider</h-sider>
      <h-layout>
        <h-header class="demo">header</h-header>
        <h-content class="demo">content</h-content>
        <h-footer class="demo">footer</h-footer>
      </h-layout>
    </h-layout>
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
.demo {
  border: 1px solid #333;
  min-height: 100px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>