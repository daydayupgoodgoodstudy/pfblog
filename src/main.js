import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Menu,Icon,Layout } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd)
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Layout);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
