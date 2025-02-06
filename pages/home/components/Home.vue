<script setup>
import { ref, onMounted } from "vue";
import { getAllVideo } from "../../../api/video";
import { tothisvideo } from "../../../fnc/function";
import { getBanner } from "../../../api/banner";

const videoList = ref([]),
  bannerlist = ref([]);

onMounted(async () => {
  const res = await Promise.all([getAllVideo(), getBanner()]);
  videoList.value = res[0];
  bannerlist.value = res[1];
  console.log(res[1]);

  console.log("videolsit: ", videoList.value);
});
</script>

<template>
  <view class="home-banner-part">
    <swiper indicator-dots autoplay circular class="banner-content">
      <swiper-item v-for="item in bannerlist">
        <div class="imgbox">
          <image :src="item.cover" mode="Fill" />
        </div>
        <div class="bottombgc"></div>
      </swiper-item>
    </swiper>
  </view>
  <view class="home-content-box">
    <view
      class="home-one-video"
      v-for="item in videoList"
      :key="item.vid"
      @click="tothisvideo($event)"
    >
      <image
        :data-vid="item.vid"
        class="video-cover"
        :src="item.cover"
        mode="aspectFill"
      />
      <view class="video-infos" :data-vid="item.vid">
        <view class="video-title">{{ item.title }}</view>
        <view class="video-others">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.home-banner-part {
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  padding: 10px 10px 0;
  .banner-content {
    width: 100%;
    height: 100%;
    background-color: red;
    .imgbox {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .bottombgc {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 30px;
      background-color: blue;
    }
  }
}
.home-content-box {
  width: 100%;
  flex: 1;
  background-color: #e3e5e7;
  box-sizing: border-box;
  padding: 10px 10px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .home-one-video {
    width: 49%;
    height: 190px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 4px;
    .video-cover {
      border-radius: 4px;
      width: 100%;
      height: 120px;
      border-radius: 4px;
      display: block;
    }
    .video-infos {
      width: 100%;
      height: 70px;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 0 0 4px 4px;
      padding: 5px;
      .video-title {
        width: 100%;
        height: 38px;
        line-height: 20px;
        font-size: 14px;

        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .video-others {
        width: 100%;
        height: 17px;
        line-height: 17px;
        margin-top: 5px;
        font-size: 13px;
      }
    }
  }
}
</style>
