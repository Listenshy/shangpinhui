<template>
  <div>
    <div class="center">
      <!--banner轮播-->
      <div class="swiper-container" id="mySwiper" ref="container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in List" :key="index">
            <img :src="item.imgUrl" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
// 引包
import Swiper from "swiper";
export default {
  name: "Carsousel",
  props: ["List"],
  mounted() {
    this.$nextTick(() => {
      new Swiper(this.$refs.container, {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    });
  },
  watch: {
    immediate: true, //立即监听（不管有没有变化  上来就监听）
    List() {
      this.$nextTick(() => {
        new Swiper(this.$refs.container, {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          // 如果需要滚动条
          scrollbar: {
            el: ".swiper-scrollbar",
          },
        });
      });
    },
  },
};
</script>

<style>
.center {
  border: 1px solid #e4e4e4;
}
</style>