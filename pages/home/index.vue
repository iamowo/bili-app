<script setup>
import { ref, onMounted } from "vue";
import Home from "./components/Home.vue";

const typeindex = ref(1); // 支部  推荐  热门五年 动画。。。

onMounted(() => {
  console.log("2333");
});

const changeindex = (e) => {
  typeindex.value = e.detail.current;
  console.log(e.detail.current);
};
</script>

<template>
  <scroll-view scroll-y class="dunamic-view">
    <view class="home-top-line">
      <image class="home-top-avatar"></image>
      <view class="input-box">
        <input type="text" class="top-search" />
      </view>
      <view class="right-message">
        <span class="icon iconfont">1</span>
        <span class="icon iconfont">2</span>
      </view>
    </view>
    <view class="home-topline2">
      <text
        class="line-text"
        @click="typeindex = 0"
        :class="{ 'line-text-active': typeindex === 0 }"
        >直播</text
      >
      <text
        class="line-text"
        @click="typeindex = 1"
        :class="{ 'line-text-active': typeindex === 1 }"
        >推荐</text
      >
      <text
        class="line-text"
        @click="typeindex = 2"
        :class="{ 'line-text-active': typeindex === 2 }"
        >热门</text
      >
      <text
        class="line-text"
        @click="typeindex = 3"
        :class="{ 'line-text-active': typeindex === 3 }"
        >动画</text
      >
      <text
        class="line-text"
        @click="typeindex = 4"
        :class="{ 'line-text-active': typeindex === 4 }"
        >more</text
      >
    </view>
    <swiper
      class="homeswiper"
      :current="typeindex"
      circular
      @change="changeindex($event)"
    >
      <!-- 直播 -->
      <swiper-item> 直播 </swiper-item>
      <!-- 首页 -->
      <swiper-item>
        <Home />
      </swiper-item>
      <!-- 热门 -->
      <swiper-item>
        <div class="view-hot-line">热门</div>
        <div class="hot-topical"></div>
      </swiper-item>
      <swiper-item>
        <div class="view-hot-line">动画</div>
        <div class="hot-topical"></div>
      </swiper-item>
      <swiper-item>
        <div class="view-hot-line">more</div>
        <div class="hot-topical"></div>
      </swiper-item>
    </swiper>
  </scroll-view>
</template>

<style lang="scss">
.dunamic-view {
  width: 100vw;
  height: 100vh;
  position: fixed;
  // box-sizing: border-box;
  // padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  .home-top-line {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    .home-top-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: red;
    }
    .input-box {
      height: 30px;
      flex: 1;
      margin: 0 10px;
      margin-left: 15px;
      border-radius: 15px;
      box-sizing: border-box;
      border: 1px solid #e3e5e7;
      display: flex;
      align-items: center;
      justify-content: center;
      .top-search {
        width: 90%;
        height: 20px;
      }
    }
    .right-message {
      width: 70px;
      background-color: red;
      display: flex;
      justify-content: space-between;
      .icon {
        margin-left: 10px;
      }
    }
  }
  .home-topline2 {
    width: 100%;
    height: 30px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .line-text {
      font-size: 14px;
      color: #222;
    }
    .line-text-active {
      color: pink;
    }
  }
  .homeswiper {
    width: 100%;
    height: 3000px;
  }
}
.dunamic-view::-webkit-scrollbar {
  display: none;
}
.dunamic-view::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>
