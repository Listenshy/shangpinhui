import Vue from 'vue'
import Vuex from 'vuex'
import home from './Home/index'
import search from './Search/index'
import lianxi from './lianxi'
import user from './user'
import detail from "./detail"
Vue.use(Vuex)
// 对外暴露一个Store实例
export default new Vuex.Store({
  // 模块式开发 (可用可不用  最好是用)  代码洁癖

  modules: {
    home,
    search,
    lianxi,
    user,
    detail
  }
})