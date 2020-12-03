import Vue from 'vue';
import App from './App.vue';
import Button from './components/button.vue';
import Icon from './components/icon.vue';

Vue.component('h-button', Button);
Vue.component('h-icon', Icon);

new Vue({
  render: h => h(App)
}).$mount('#app');

