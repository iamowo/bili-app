<script setup>
import { goback } from "../../fnc/function";
import { getDynamic } from "../../api/dynamic";
import { onMounted, ref } from "vue";
import { getAllComment } from "../../api/comment";

const props = defineProps(["did", "vid"]);
const { uid, did } = props;
console.log("did: ", did, uid);
const dynamicinfo = ref(),
  commentslist = ref();

onMounted(async () => {
  const res = await Promise.all([
    getDynamic(did, uid),
    getAllComment(did, uid, 0, 1),
  ]);
  dynamicinfo.value = res[0];
  commentslist.value = res[1];
  console.log("res: ", res);
});
</script>

<template>
  <view class="dydetail">
    <view class="dytop">
      <text class="gobak" @click="goback">左</text>
      <text class="title">{{ dynamicinfo.name }}</text>
    </view>
    <view class="dyconent">
      <view class="user-line">
        <view class="avatarbox">
          <image :src="dynamicinfo.avatar" mode="fill" />
        </view>
        <view class="namebox">
          <view class="line1">
            <text class="nametxt">{{ dynamicinfo.name }}</text>
          </view>
          <view class="line1">
            <text class="timetxt">{{ dynamicinfo.time.slice(0, 10) }}</text>
          </view>
        </view>
      </view>
      <view class="contentline">
        <view class="txtcontnet">{{ dynamicinfo.content }}</view>
      </view>
    </view>
    <view class="dycomments">
      <view class="conennt-line1">
        <view class="ctbox">
          <text>评论 {{ commentslist.length }}</text>
          <text class="btline"></text>
        </view>
        <view class="ctbox">
          <text>点赞</text>
          <text class="btline"></text>
        </view>
      </view>
      <view class="comemntbox">
        <div class="commenttitle">
          <view class="leftv">
            <text v-if="true">热门评论</text>
            <text v-else>最新评论</text>
          </view>
          <view>
            <text class="iconfont"></text>
            <text class="tx" v-if="true">按热度</text>
            <text class="tx" v-else>按热度</text>
          </view>
        </div>
        <view class="outbox" v-if="commentslist.length > 0">
          <view class="onecomment" v-for="item in commentslist">
            <view class="lview">
              <image :src="dynamicinfo.avatar" mode="scaleToFill" />
            </view>
            <view class="rview">
              <view class="rtopline">
                <view class="llbox">
                  <view class="line1">{{ dynamicinfo.name }}</view>
                  <view class="line1">{{ dynamicinfo.time.slice(0, 10) }}</view>
                </view>
                <view class="lrbox">
                  <text class="iconfont">&#xe78d;</text>
                </view>
              </view>
              <view class="conentline">
                <text>{{ dynamicinfo.content }}</text>
              </view>
              <view class="dataline">
                <view class="onebox">
                  <text class="iconfont">&#xec8c;</text>
                  <text>1</text>
                </view>
                <view class="onebox">
                  <text class="iconfont">&#xec8c;</text>
                  <text>1</text>
                </view>
                <view class="onebox">
                  <text class="iconfont">&#xec8c;</text>
                  <text>1</text>
                </view>
                <view class="onebox">
                  <text class="iconfont">&#xec8c;</text>
                  <text>1</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="outbox" v-else>
          <view class="none">暂时没有评论</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.dydetail {
  width: 100vw;
  .dytop {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    line-height: 50px;
    .gobak {
      font-size: 20px;
    }
    .title {
      margin-left: 10px;
    }
  }
  .dyconent {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    .user-line {
      width: 100%;
      height: 40px;
      display: flex;
      .avatarbox {
        width: 40px;
        height: 40px;
        image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .namebox {
        margin-left: 10px;
        .line1 {
          width: 100%;
          height: 20px;
          line-height: 20px;
          .nametxt {
            font-size: 14px;
          }
          .timetxt {
            font-size: 12px;
          }
        }
      }
    }
    .contentline {
      padding: 10px 0;
      width: 100%;
      height: fit-content;
      background-color: red;
      .txtcontnet {
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  .dycomments {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    .conennt-line1 {
      width: 100%;
      height: 40px;
      display: flex;
    }
    .comemntbox {
      width: 100%;
      height: fit-content;
      .commenttitle {
        width: 100%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .outbox {
        .none {
          width: 100%;
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: 12px;
        }
        .onecomment {
          width: 100%;
          height: fit-content;
          display: flex;
          .lview {
            width: 40px;
            height: 40px;
            image {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .rview {
            margin-left: 10px;
            flex: 1;
            height: fit-content;
            .rtopline {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .llbox {
                height: 40px;
                .line1 {
                  width: 100%;
                  height: 20px;
                  line-height: 20px;
                }
              }
              .lrbox {
                width: 30px;
                height: 40px;
                line-height: 40px;
              }
            }
            .conentline {
              width: 100%;
              height: fit-content;
            }
            .dataline {
              width: 100%;
              height: 20px;
              display: flex;
              .onebox {
                margin-right: 10px;
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
