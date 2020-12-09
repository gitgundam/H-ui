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
    <div style="border: 1px solid deeppink">
      <h-row gutter="20">
        <h-col>
        </h-col>
        <h-col></h-col>
      </h-row>
      <h-row gutter="30">
        <h-col offset="1"></h-col>
        <h-col offset="1"></h-col>

      </h-row>
      <h-row gutter="2">
        <h-col span="2"></h-col>
        <h-col span="22" offset="2"></h-col>
      </h-row>
      <h-row>
        <h-col offset="1"></h-col>
        <h-col></h-col>
        <h-col></h-col>
        <h-col></h-col>
        <h-col></h-col>
        <h-col></h-col>
      </h-row>
      <h-row>
        <h-col span="1"></h-col>
        <h-col span="2"></h-col>
        <h-col span="21"></h-col>
      </h-row>
    </div>
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
* {
  //margin: 0;
  //padding: 0;
  box-sizing: border-box;
}

</style>