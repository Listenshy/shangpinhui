import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局组件
import TypeNav from '@/components/TypeNav/index.vue'
import Carousel from '@/components/Carousel/index.vue'
// 引入mock
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 分页器
import pagination from '@/components/Pagination'
Vue.component('Carsousel', Carousel)
Vue.component(TypeNav.name, TypeNav)
Vue.component(pagination.name, pagination)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  // 注册路由
  router,
  store,
  render: h => h(App),
  //  全局事件总线 清除关键字
  beforeCreate() {
    Vue.prototype.$bus = this
  }
  // components:{

  // },
  // template:""
}).$mount('#app')

