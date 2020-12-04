import Vue from 'vue';
import App from './App.vue';
import Button from './components/button.vue';
import Icon from './components/icon.vue';
import ButtonGroup from './components/button-group.vue';
import Input from './components/Input';
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
Vue.component('h-button', Button);
Vue.component('h-icon', Icon);
Vue.component('h-button-group', ButtonGroup);
Vue.component('h-input', Input);

new Vue({
  render: h => h(App),
}).$mount('#app');

const expect = chai.expect

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
  button.$el.remove()
  button.$destroy()

}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: 'setting',
      isLoading: true
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#i-loading')
  button.$el.remove()
  button.$destroy()


}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'setting'
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const order = window.getComputedStyle(svg).order
  expect(order).to.equal('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'setting'
    }
  })
  //设置间谍函数
  let spy = chai.spy(function (){})
  vm.$mount()
  vm.$on('click',spy)
  //希望这个函数被执行
  vm.$el.click()
  //期待间谍函数被调用了
  expect(spy).to.have.been.called()
}
