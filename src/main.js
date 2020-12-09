import Vue from 'vue';
import App from './App.vue';
import Button from './components/button.vue';
import Icon from './components/icon.vue';
import ButtonGroup from './components/button-group.vue';
import Input from './components/Input.vue';
import Row from './components/row.vue';
import Col from './components/col.vue';


Vue.component('h-button', Button);
Vue.component('h-icon', Icon);
Vue.component('h-button-group', ButtonGroup);
Vue.component('h-input', Input);
Vue.component('h-row', Row);
Vue.component('h-col', Col);

new Vue({
  render: h => h(App),
}).$mount('#app');

