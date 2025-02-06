<script setup>
import { goback } from "../../fnc/function";
import { getByVid, getVideoLikely } from "../../api/video";
import { ref, onMounted } from "vue";
import { getAllComment } from "../../api/comment";

const uid = 1;
// 获取路由参数
const props = defineProps(["vid"]);
const vid = parseInt(props.vid);

console.log(vid);
const topindex = ref(0); //0 推荐  1 评论
const videoinfo = ref();

const moreintroflag = ref(false); // 显示更多信息， 简介
const commentlist = ref(); // 评论列表
const recommentlist = ref(); // 推荐视频
const clistlength = ref();
const swiperHeight = ref(0);

onMounted(async () => {
  const res1 = await getByVid(vid, uid);
  console.log(res1);
  videoinfo.value = res1;

  const res2 = await getAllComment(vid);
  console.log("............", res2);
  clistlength.value = res2.length;

  commentlist.value = res2;

  const res3 = await getVideoLikely(vid);
  recommentlist.value = res3;
});

const changeSwiper = (e) => {
  console.log(e.detail.current);

  topindex.value = e.detail.current;
};

const setSwiperHeight = () => {};
</script>

<template>
  <view class="video-top">
    <view class="vt-left">
      <text class="icon iconfont t1" @click="goback">back</text>
      <text class="icon iconfont t2">233</text>
    </view>
    <view class="vt-right"></view>
  </view>
  <view class="video-box">
    <view class="mask-video"></view>
    <video :src="videoinfo != null ? videoinfo.path : null" class="videoref" />
  </view>
  <view class="intro-line">
    <view class="left-span">
      <view class="il1">
        <text
          class="textsp"
          @click="topindex = 0"
          :class="{ 'text-active': topindex === 0 }"
          >简介</text
        >
        <text class="sp-active"></text>
      </view>
      <view class="il1">
        <text
          class="textsp"
          @click="topindex = 1"
          :class="{ 'text-active': topindex === 1 }"
          >评论{{ clistlength }}</text
        >
        <text class="sp-active"></text>
      </view>
    </view>
    <view class="right-span">
      <input type="text" class="danmuinp" />
      <text class="icon iconfont">1</text>
    </view>
  </view>
  <swiper
    class="swiper-box"
    style="height: calc(100vh - 260rpx)"
    :current="topindex"
    @change="changeSwiper($event)"
  >
    <swiper-item class="sitem1">
      <scroll-view scroll-y class="video-content2">
        <view class="vido-btm-view1">
          <view class="up-intro">
            <view class="left-user">
              <image
                class="useravatar2intro"
                :src="videoinfo != null ? videoinfo.avatar : null"
                mode=""
              />
              <view class="user-right-info">
                <view class="v1-username">2333</view>
                <v2 class="info-others">
                  <text class="fansspan">23</text>
                  <text class="videosspan">12</text>
                </v2>
              </view>
            </view>
            <view class="right-sub">关注啊</view>
          </view>
          <view class="video-name-line">
            <view class="left-videoinfo">{{
              videoinfo != null ? videoinfo.title : null
            }}</view>
            <view
              class="right-show icon iconfont"
              @click="moreintroflag = !moreintroflag"
              >下</view
            >
          </view>
          <view class="video-detail-iunfos">
            <view class="vdi-line1">
              <view class="one-intro-v">
                <text class="icon iconfont">1</text>
                <text class="rigth-info-span">12</text>
              </view>
              <view class="one-intro-v">
                <text class="icon iconfont">1</text>
                <text class="rigth-info-span">12</text>
              </view>
              <view class="one-intro-v">
                <text class="rigth-info-span">{{
                  videoinfo != null ? videoinfo.time.slice(0, 10) : null
                }}</text>
              </view>
              <view class="one-intro-v">
                <text class="icon iconfont">1</text>
                <text class="rigth-info-span">12再看</text>
              </view>
            </view>
            <view
              class="vid-line2"
              :class="{ 'vid-line2-active': moreintroflag }"
            >
              <view class="dl-line1">
                <text class="dl1-sp"
                  >VID:{{ videoinfo != null ? videoinfo.vid : null }}</text
                >
                <text class="dl1-sp">未经作者授权禁止转载</text>
              </view>
              <view class="dl-line2">{{
                videoinfo != null ? videoinfo.intro : null
              }}</view>
              <view class="dl-line3">
                <view class="onetg" v-for="item in videoinfo.tags">{{
                  item
                }}</view>
              </view>
            </view>
          </view>
          <view class="video-info3">
            <view class="one-contopn">
              <text class="icon iconfont">1</text>
              <text class="num-text">{{
                videoinfo != null ? videoinfo.likes : 0
              }}</text>
            </view>
            <view class="one-contopn">
              <text class="icon iconfont">1</text>
              <text class="num-text">{{
                videoinfo != null ? videoinfo.icons : 0
              }}</text>
            </view>
            <view class="one-contopn">
              <text class="icon iconfont">1</text>
              <text class="num-text">{{
                videoinfo != null ? videoinfo.favorites : 0
              }}</text>
            </view>
            <view class="one-contopn">
              <text class="icon iconfont">1</text>
              <text class="num-text">{{
                videoinfo != null ? videoinfo.shares : 0
              }}</text>
            </view>
          </view>
          <view class="recommend-box">
            <div class="one-recommend-view" v-for="item in recommentlist">
              <view class="recom-left-cover">
                <image
                  class="recom-cover"
                  :src="item.cover"
                  mode="scaleToFill"
                />
                <view class="recm-time">{{ item.vidlong }}</view>
              </view>
              <view class="right-rec-info">
                <view class="top-rec-title">{{ item.title }}</view>
                <view class="btn-rec-infos1">{{ item.name }}</view>
                <view class="btn-rec-infos1"
                  >{{ item.plays }} {{ item.danmus }}</view
                >
              </view>
            </div>
          </view>
        </view>
      </scroll-view>
    </swiper-item>
    <swiper-item class="sitem2">
      <scroll-view scroll-y class="video-content22">
        <view class="commetline-top">
          <text class="tt1">热门评论</text>
          <text class="tt1">按热度</text>
        </view>
        <view class="vido-btm-view2">
          <view class="one-comment" v-for="item in commentlist" :key="item.id">
            <view class="left-avatar">
              <image class="avatar-c" :src="item.avatar" mode="scaleToFill" />
            </view>
            <view class="right-comment">
              <view class="line-name">{{ item.name }}</view>
              <view class="line-time">{{ item.time.slice(0, 10) }}</view>
              <view class="line-comment">{{ item.content }}</view>
              <view class="line-commentinfos">
                <text class="s1">1</text>
                <text class="s1">2</text>
                <text class="s1">3</text>
              </view>
              <view class="second-c-box" v-if="item.lists !== null">
                <view
                  class="line-second-comment"
                  v-for="item2 in item.lists"
                  :key="item2.id"
                >
                  <view class="one-second-list">
                    <text class="nametext">{{ item2.name }}</text>
                    <text class="second-text">: {{ item2.content }}</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </swiper-item>
  </swiper>
</template>

<style scoped lang="scss">
.video-top {
  position: fixed;
  width: 100%;
  height: 40px;
  z-index: 2;
  background-color: red;
  .vt-left {
    color: #fff;
    height: 40px;
    .t1 {
      margin-right: 10px;
    }
    .t2 {
    }
  }
}
.video-box {
  width: 100%;
  height: 250px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .videoref {
    width: 100%;
    height: 100%;
  }
  .mask-video {
    position: absolute;
    z-index: 1;
  }
}
.intro-line {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 15px;
  border-bottom: 1px solid #e3e5e7;
  .left-span {
    height: 40px;
    display: flex;
    line-height: 40px;
    .il1 {
      margin-right: 20px;
      .textsp {
        font-size: 14px;
        color: #9499a0;
      }
      .text-active {
        color: pink;
      }
    }
  }
  .right-span {
    height: 40px;
    display: flex;
    align-items: center;
    .danmuinp {
      width: 120px;
      height: 30px;
      border: 1px solid #e3e5e7;
      border-radius: 15px;
    }
  }
}
.swiper-box {
  width: 100%;
  // min-height: 100vh;
}
.sitem1 {
  width: 100%;
  height: fit-content;
}
.video-content2 {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  .vido-btm-view1 {
    top: 300px;
    width: 100%;
    height: fit-content;
    .up-intro {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-user {
        display: flex;
        align-items: center;
        height: 50px;
        .useravatar2intro {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: block;
        }
        .user-right-info {
          margin-left: 10px;
          height: 36px;
          .v1-username {
            height: 18px;
          }
          .info-others {
            height: 18px;
            display: flex;
            .fansspan {
              margin-right: 10px;
            }
            .videosspan {
              font-size: 14px;
            }
          }
        }
      }
      .right-sub {
        width: 100px;
        height: 30px;
        border-radius: 15px;
        background-color: pink;
        text-align: center;
        line-height: 30px;
        color: #fff;
      }
    }
    .video-name-line {
      width: 100%;
      height: 25px;
      display: flex;
      box-sizing: border-box;
      padding: 0 15px;
      justify-content: space-between;
      .left-videoinfo {
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
      }
      .right-show {
        margin-left: 10px;
        width: 20px;
        text-align: center;
      }
    }
    .video-detail-iunfos {
      margin-top: 10px;
      width: 100%;
      height: fit-content;
      // background-color: pink;
      box-sizing: border-box;
      padding: 0 15px 20px;
      .vdi-line1 {
        width: 100%;
        height: fit-content;
        display: flex;
        .one-intro-v {
          height: 20px;
          line-height: 20px;
          margin-right: 15px;
          .icon {
            margin-right: 5px;
          }
        }
      }
      .vid-line2 {
        width: 100%;
        // height: 300px;  // 不是固定大小，无法触发动画
        height: fit-content;
        box-sizing: border-box;
        // background-color: red;
        overflow: hidden;
        transition: height 1s ease;
        .dl-line1 {
          width: 100%;
          height: 20px;
          line-height: 20px;
          .dl1-sp {
            margin-right: 15px;
          }
        }
        .dl-line2 {
          width: 100%;
          height: fit-content;
          padding: 10px 0;
        }
        .dl-line3 {
          margin-top: 20px;
          width: 100%;
          height: fit-content;
          .onetg {
            display: inline-block;
            height: 24px;
            padding: 0 10px;
            border-radius: 12px;
            background-color: #d3d3c9;
            margin: 0 10px 10px 0;
          }
        }
      }
      .vid-line2-active {
        height: 20px;
        transition: height 0.3s ease;
      }
    }
    .video-info3 {
      box-sizing: border-box;
      padding: 10px 15px;
      width: 100%;
      height: 70px;
      // background-color: green;
      display: flex;
      justify-content: space-around;
      .one-contopn {
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .recommend-box {
      width: 100%;
      height: fit-content;
      box-sizing: border-box;
      .one-recommend-view {
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 10px 15px;
        border-top: 1px solid #e3e5e7;
        display: flex;
        .recom-left-cover {
          width: 130px;
          height: 80px;
          background-color: pink;
          position: relative;
          .recom-cover {
            width: 100%;
            height: 100%;
          }
          .recm-time {
            position: absolute;
            bottom: 5px;
            right: 5px;
            background-color: red;
            height: 16px;
            line-height: 16px;
            padding: 0 10px;
            font-size: 12px;
            color: #fff;
            border-radius: 4px;
            background-color: #00000080;
          }
        }
        .right-rec-info {
          height: 80px;
          margin-left: 10px;
          flex: 1;
          background-color: pink;
          .top-rec-title {
            width: 100%;
            height: 40px;

            overflow: hidden;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .btn-rec-infos1 {
            width: 100%;
            height: 20px;
          }
        }
      }
    }
  }
}

.sitem2 {
  width: 100%;
  height: fit-content;
  background-color: #fff;
  .commetline-top {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.vido-btm-view2 {
  width: 100%;
  height: 400px;
  background-color: #fff;
  box-sizing: border-box;
  .one-comment {
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    border-top: 1px solid #e3e5e7;
    padding: 10px;
    display: flex;
    .left-avatar {
      width: 40px;
      height: 40px;
      .avatar-c {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: red;
      }
    }
    .right-comment {
      margin-left: 10px;
      flex: 1;
      height: fit-content;
      .line-name {
        width: 100%;
        height: 20px;
        font-size: 16px;
      }
      .line-time {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #9499a0;
      }
      .line-comment {
        margin: 10px 0;
        width: 100%;
        height: fit-content;
      }
      .line-commentinfos {
        width: 100%;
        height: 20px;
        display: flex;
        .s1 {
          margin-right: 10px;
        }
      }
      .second-c-box {
        width: 100%;
        height: fit-content;
        background-color: #e3e5e7;
        border-radius: 4px;
        margin: 10px 0;
        .line-second-comment {
          width: 100%;
          height: fit-content;
          .one-second-list {
            width: 100%;
            max-height: 40px;
            line-height: 20px;
            .nametext {
              color: #32aeec;
            }
          }
        }
      }
    }
  }
}
</style>
