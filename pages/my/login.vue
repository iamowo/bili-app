<script setup>
import { ref, watch } from "vue";
import { goback } from "../../fnc/function";
import { login } from "../../api/user";
import { useUserinfoStore } from "../../store/userinfo";

const store = useUserinfoStore();
const { setLoginFlag, setUserInfo } = store;

const inputflag = ref({
  account: false,
  password: false,
});
const account = defineModel("account"),
  password = defineModel("password");

const loginHandle = async () => {
  if (inputflag.value.account === true && inputflag.value.password === true) {
    const data = {
      account: account.value,
      password: password.value,
    };
    const res = await login(data);
    if (res) {
      setLoginFlag(true);
      setUserInfo(res);
      localStorage.setItem("userinfo", JSON.stringify(res));
      localStorage.setItem("token", res.token);
      localStorage.setItem("loginflag", true);
      goback();
    }
  }
};

const handInput1 = (event) => {
  if (account.value.length > 0) {
    inputflag.value.account = true;
  } else if (account.value.length == 0) {
    inputflag.value.account = false;
  }
  console.log(inputflag.value);
};

const handInput2 = (event) => {
  if (password.value.length > 0) {
    inputflag.value.password = true;
  } else if (password.value.length == 0) {
    inputflag.value.password = false;
  }
};
</script>

<template>
  <view class="loginpage">
    <view class="logintop">
      <text class="goback iconfont">👈</text>
      <text class="tetx-span" @clikc="goback">账号密码登录</text>
    </view>
    <view class="mainbox">
      <view class="loginbox">
        <view class="one-line">
          <view class="lbox">
            <text class="sp">账号</text>
          </view>
          <view class="rbox">
            <input
              type="text"
              class="inp1"
              v-model="account"
              @input="handInput1"
            />
          </view>
        </view>
        <view class="one-line">
          <view class="lbox">
            <text class="sp">密码</text>
          </view>
          <view class="rbox">
            <input
              type="password"
              class="inp1"
              v-model="password"
              @input="handInput2"
            />
          </view>
        </view>
        <view
          :class="
            inputflag.account === true && inputflag.password === true
              ? 'loginb activeb'
              : 'loginb'
          "
          @click="loginHandle"
          >登录</view
        >
        <view class="otbox">
          <text class="forget">忘记密码 ></text>
        </view>
      </view>
      <view class="others">
        <div class="lbox">
          <input type="checkbox" class="ckecked" />
        </div>
        <div class="rbox">
          <text>我已阅读并同意用户协议</text>
        </div>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.loginpage {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .logintop {
    width: 100vw;
    height: 100upx;
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 0 15px;
    .tetx-span {
      position: absolute;
      left: 50%;
      translate: -50% 0;
    }
  }
  .mainbox {
    width: 100vw;
    flex: 1;
    position: relative;
    box-sizing: border-box;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-between;
    .loginbox {
      width: 100%;
      height: fit-content;
      .one-line {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-bottom: 1px solid grey;
        margin-bottom: 20px;
        display: flex;
        .lbox {
          width: 40px;
          height: 40px;
          line-height: 40px;
        }
        .rbox {
          margin-left: 10px;
          height: 40px;
          flex: 1;
          display: flex;
          align-items: center;
          .inp1 {
            height: 20px;
          }
        }
      }
      .loginb {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        background-color: pink;
        color: #fff;
        margin-bottom: 20px;
      }
      .activeb {
        background-color: rgb(244, 116, 140);
      }
      .otbox {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
    }
    .others {
      width: 100vw;
      height: fit-content;
      display: flex;
      .lbox {
        width: 20px;
        height: 20px;
      }
      .rbox {
        height: 20px;
        flex: 1;
        margin-left: 10px;
        line-height: 20px;
      }
    }
  }
}
</style>
