<script setup>
import { goback } from "../../fnc/function";
</script>

<template>
  <view class="">
    <view class="settop">
      <text class="goback" @click="goback">👈</text>
      <text class="txt">设置</text>
    </view>
    <view class="setmain">
      <view class="onebox">
        <view class="oneline1">
          <text class="txt">111</text>
          <text class="iconfont">></text>
        </view>
      </view>
      <view class="onebox">
        <view class="oneline2">
          <text class="txt">推出登录</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
