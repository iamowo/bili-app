<script setup>
import { ref, onMounted } from "vue";
import { useUserinfoStore } from "../../store/userinfo";
import { getByUid } from "../../api/user";
import { storeToRefs } from "pinia";
import { tothispage } from "../../fnc/function";

const store = useUserinfoStore();

const loginflag = JSON.parse(localStorage.getItem("loginflag"));
const userinfo = ref(null);
console.log("登陆状态: ", loginflag);
console.log(loginflag == null || loginflag === false);

if (loginflag == null || loginflag === false) {
  tothispage("/my/login", 0);
}

onMounted(() => {
  const temp = JSON.parse(localStorage.getItem("userinfo"));
  if (temp) {
    userinfo.value = temp;
    console.log(userinfo);
  }
});
</script>

<template>
  <view class="myspace">
    <view class="my-top-control">
      <text class="icon iconfont">12</text>
      <text class="icon iconfont" @click="tothispage('/my/sacnLogin', 0)"
        >&#xe664;</text
      >
      <text class="icon iconfont">1</text>
      <text class="icon iconfont">1</text>
    </view>
    <view class="my-userinfo">
      <view class="left-avatar-box">
        <image :src="userinfo?.avatar" mode="aspectFill" />
      </view>
      <view class="right-userinfo1">
        <view class="line1">
          <text>{{ userinfo?.name }}</text>
        </view>
        <view class="line1">正式会员</view>
        <view class="line1">{{ userinfo?.icons }}硬币</view>
      </view>
    </view>
    <view class="my-userinfo2">
      <view class="one-infos2">
        <text class="t1">{{ userinfo?.dynamics }}</text>
        <text class="t2">动态</text>
      </view>
      <view class="one-infos2">
        <text class="t1">{{ userinfo?.follows }}</text>
        <text class="t2">关注</text>
      </view>
      <view class="one-infos2">
        <text class="t1">{{ userinfo?.fans }}</text>
        <text class="t2">粉丝</text>
      </view>
    </view>
    <view class="tocontrol">
      <view class="one-con-box">
        <text class="icon iconfont">1</text>
        <text class="cb-text">离线缓存</text>
      </view>
      <view class="one-con-box">
        <text class="icon iconfont">1</text>
        <text class="cb-text">离线缓存</text>
      </view>
      <view class="one-con-box">
        <text class="icon iconfont">1</text>
        <text class="cb-text">离线缓存</text>
      </view>
      <view class="one-con-box">
        <text class="icon iconfont">1</text>
        <text class="cb-text">离线缓存</text>
      </view>
    </view>
    <view class="more-setting">
      <view class="setting-line1">更多设置</view>
      <view class="oneline2">
        <text class="icon iconfont">1</text>
        <text class="t1" @click="() => tothispage('/my/setting', 0)">设置</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.my-top-control {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #fff;
  .icon {
    margin-left: 20px;
  }
}
.my-userinfo {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
  background-color: #fff;
  .left-avatar-box {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .right-userinfo1 {
    margin-left: 15px;
    flex: 1;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .line1 {
      width: 100%;
      height: 20px;
      line-height: 20px;
    }
  }
}

.my-userinfo2 {
  background-color: #fff;
  width: 100%;
  padding-top: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .one-infos2 {
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.tocontrol {
  box-sizing: border-box;
  padding-top: 20p;
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  .one-con-box {
    margin-top: 15px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      color: #32aeec;
      margin-bottom: 5px;
    }
    .cb-text {
      font-size: 14px;
      color: #18191c;
    }
  }
}
.more-setting {
  padding: 30px 10px 20px;
  background-color: #fff;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  .setting-line1 {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .oneline2 {
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 10px;
    color: #222;
    .icon {
      margin-right: 15px;
    }
  }
}
</style>
