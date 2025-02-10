<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "./static/iconfont/iconfont.css";
body {
  background-color: #e3e5e7;
}

.uni-tabbar {
  .uni-tabbar__item {
    .uni-tabbar__bd {
      box-sizing: border-box;
      padding: 10px 0 5px 0;
      height: 30px;
    }
  }
}
</style>
