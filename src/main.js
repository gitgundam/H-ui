import Vue from 'vue';
import App from './App.vue';
import Button from './components/button.vue';
import Icon from './components/icon.vue';
import ButtonGroup from './components/button-group.vue';


Vue.component('h-button', Button);
Vue.component('h-icon', Icon);
Vue.component('h-button-group', ButtonGroup);
new Vue({
  render: h => h(App),
}).$mount('#app');

