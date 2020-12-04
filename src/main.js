import Vue from 'vue';
import App from './App.vue';
import Button from './components/button.vue';
import Icon from './components/icon.vue';
import ButtonGroup from './components/button-group.vue';
import Input from './components/Input';
import chai from 'chai'
const expect = chai.expect

Vue.component('h-button', Button);
Vue.component('h-icon', Icon);
Vue.component('h-button-group', ButtonGroup);
Vue.component('h-input', Input);

new Vue({
  render: h => h(App),
}).$mount('#app');


{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: 'setting'
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#i-setting')
}
