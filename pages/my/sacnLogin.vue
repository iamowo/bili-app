<script setup>
import { goback } from "../../fnc/function";
</script>

<template>
  <view class="sacnview">
    <view class="scantop">
      <view class="lbox">
        <text class="iconfont" @click="goback">👈</text>
      </view>
      <text class="midtext">扫描二维码</text>
    </view>
    <view class="scancontent">
      <view class="scan-mask"></view>
      <view class="scan-line"></view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.sacnview {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  .scantop {
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
    position: relative;
    .midtext {
      left: 50%;
      translate: -50% 0;
      position: absolute;
      font-size: 14px;
      position: absolute;
      color: #fff;
    }
  }
  .scancontent {
    margin-top: 5vh;
    top: 0;
    left: 0;
    width: 80vw;
    height: 80vh;
    position: relative;
    .scan-mask {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgbc(0, 0, 0, 0.8);
    }
    .scan-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #00ff00;
      animation: scan 2s infinite linear;
    }
    @keyframes scan {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(80vh);
      }
    }
  }
}
</style>
