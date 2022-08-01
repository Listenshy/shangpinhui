<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在home或search显示  在登录注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// import {soringn} from 'ltlnpm'
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 获取数据
    this.$store.dispatch("categoryList");
// let a=[3,4,1,2]
// soringn(a)
// console.log(a);
// console.log(1234);
  },
};
</script>

<style>
</style>