import Vue from 'vue'
import Button from './button.vue'
import App from './App.vue';

Vue.component('h-button',Button)

new Vue({
  render: h => h(App)
}).$mount('#app')

