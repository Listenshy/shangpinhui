import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Home from '@/pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'
import Register from '@/pages/Register/index.vue'
import Login from '@/pages/Login/index.vue'
import Detail from '@/pages/Detail'

import store from '@/store'

Vue.use(VueRouter)

// 把vueRouter原型对象push  保存一份
let originPush = VueRouter.prototype.push
// 重写push|replace（解决重复点击问题）
// 第一个参数：告诉原来push方法，往哪里跳（）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call||apply
    // 相同点 都可以调用函数一次 都可以篡改上下文一次
    // 不同点 call和apply传递参数 call用逗号隔开  apply方法执行，传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

// 配置路由
let router = new VueRouter({
  routes: [{
      path: "/detail/:skuid",
      component: Detail,

      // 路由原信息
      meta: {
        show: true
      }
    },
    {
      path: "/home",
      component: Home,

      // 路由原信息  this.$route.meta=true
      meta: {
        show: true
      }
    },
    {
      // 占位 ?代表params可传可不传 
      path: "/search/:keyword?",
      component: Search,
      // 路由原信息
      meta: {
        show: true
      },
      name: "search",
      // props传值
      // props: ($route) => {
      //   return {
      //     keyword: $route.params.keyword, k: $route.query.k
      //   }
      // }
    },
    {
      path: "/register",
      component: Register,
      // 路由原信息
      meta: {
        show: false
      }
    },
    {
      path: "/login",
      component: Login,
      // 路由原信息
      meta: {
        show: false
      }
    },
    // 重定向 项目跑起来的时候访问/  定向首页
    {
      path: '*',
      redirect: "/home"
    }
  ]
})

// 全局守卫  前置守卫
router.beforeEach(async (to, from, next) => {
  // to 获取你要跳转的路由的信息
  // from 获取你从那个路由来的信息
  // next 放行 
  // next() 
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    if (to.path == "/login") {
      next('/')
    } else {
      // 登录了  但不是login

      if (name) {
        // 用户名已有
        next()
      } else {
        try {
          // 没有用户信息
          await store.dispatch("getUserInfo")
          next()
        } catch (error) {
          // token失效
          store.dispatch("getUserOut")
          next("/login")
        }

      }
    }
  } else {
    // 未登录  暂时不处理
    next()

  }
})

export default router