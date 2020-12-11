import Vue from 'vue';
import App from './App.vue';
import Button from './components/button.vue';
import Icon from './components/icon.vue';
import ButtonGroup from './components/button-group.vue';
import Input from './components/Input.vue';
import Row from './components/row.vue';
import Col from './components/col.vue';
import Layout from './components/layout.vue';
import Header from './components/header.vue';
import Content from './components/content.vue';
import Footer from './components/footer.vue';
import Sider from './components/sider.vue';



Vue.component('h-button', Button);
Vue.component('h-icon', Icon);
Vue.component('h-button-group', ButtonGroup);
Vue.component('h-input', Input);
Vue.component('h-row', Row);
Vue.component('h-col', Col);
Vue.component('h-layout', Layout);
Vue.component('h-header', Header);
Vue.component('h-content', Content);
Vue.component('h-footer', Footer);
Vue.component('h-sider', Sider);


new Vue({
  render: h => h(App),
}).$mount('#app');

