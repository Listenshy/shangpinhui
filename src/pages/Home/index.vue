<template>
  <div>
    <!-- 三级联动 （全局组件 不需要引入） -->
    <TypeNav />
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor :floorList="floorList"></Floor>
    <!--   传值  ：1.vuex  2.data-->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/index.vue";
import Recommend from "@/pages/Home/Recommend/index.vue";
import Rank from "@/pages/Home/Rank/index.vue";
import Like from "@/pages/Home/Like/index.vue";
import Floor from "@/pages/Home/Floor/index.vue";
import Brand from "@/pages/Home/Brand/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
    // 获取用户信息
    this.$store.dispatch("getUserInfo");
  },
  computed: {
    ...mapState({
      floorList: (start) => start.home.floorList,
    }),
  },
};
</script>

<style>
</style>