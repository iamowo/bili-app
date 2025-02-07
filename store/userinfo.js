// stores/counter.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserinfoStore = defineStore("userinfo", {
  state: () => {
    return {
      loginflag: false, // 未登录
      userinfo: {},
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    setLoginFlag(loginflag) {
      this.loginflag = loginflag;
    },
    setUserInfo(info) {
      this.userinfo = info;
    },
  },
});
