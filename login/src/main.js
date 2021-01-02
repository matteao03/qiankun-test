import './public-path';
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router';

let router = null;
let instance = null;

function render(props) {
  let { container } = props

  router = new VueRouter({
    routes,
  });
  instance = new Vue({
    router,
    store,
    data() {
      return {
        parentRouter: props.router,
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app-login') : '#app-login');
}

export async function bootstrap() {
  console.log('login app bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}