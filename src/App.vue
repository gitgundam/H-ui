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
    <h-button icon="setting" ></h-button>
    <h-input disabled value="张三" error="请输入名称"></h-input>
    <h-input readonly value="李四"></h-input>
    <h-input @change="a"></h-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods:{
    a(e){
      console.log(e);
    }

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