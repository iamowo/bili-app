<script setup>
import { goback } from "../../fnc/function";
import { verifyQrCode } from "../../api/user";

const checkQRCodeStatus = () => {
  const interval = setInterval(async () => {
    const res = await verifyQrCode();
    if (res.data === "二维码已扫描") {
      clearInterval(interval);
      // 跳转到登录成功页面
      uni.navigateTo({ url: "/pages/loginSuccess" });
    }
  }, 2000); // 每2秒轮询一次
};

// 扫码功能
const scanCode = (type = "scan") => {
  uni.scanCode({
    onlyFromCamera: type === "scan", // 如果是扫码，仅从相机扫码
    scanType: ["qrCode"], // 只识别二维码
    success: (res) => {
      console.log("扫码结果:", res.result);
      uni.showToast({
        title: "扫码成功: " + res.result,
        icon: "success",
      });
      // 这里可以将扫码结果发送到后端进行登录确认
      confirmLogin(res.result);
    },
    fail: (err) => {
      console.error("扫码失败:", err);
      uni.showToast({
        title: "扫码失败，请重试",
        icon: "none",
      });
    },
  });
};

// 打开相册扫码
const openAlbum = () => {
  scanCode("album");
};

// 确认登录（将扫码结果发送到后端）
const confirmLogin = (token) => {
  uni.request({
    url: "https://yourdomain.com/auth/confirm",
    method: "POST",
    data: {
      token: token,
      userId: "user123", // 这里应该是当前登录用户的ID
    },
    success: (res) => {
      uni.showToast({
        title: "登录成功",
        icon: "success",
      });
    },
    fail: (err) => {
      uni.showToast({
        title: "登录失败",
        icon: "none",
      });
    },
  });
};
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
