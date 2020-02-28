<template>
  <card class="container">
    <div slot="thumb">
      <vImage
        style="width:5.5rem;height:5.5rem;"
        src="https://pic.zushouyou.cn/uploads/20200216/5ffb473fae58e24ee3c1780e50b16637.png"
      />
      <span class="card-num">NO:11353</span>
    </div>
    <div class="title" slot="title">
      <vImage
        style="width:29px;height:14px;top:1px;"
        src="https://www.zushouyou.cn/static/images/peifu.png"
      />【铂金2】男神小号。
    </div>
    <div class="va-desc" slot="desc">
      全区 | 手机登录
      <span style="color: rgb(255, 77, 79);margin-left:5px;">1小时起租</span>
    </div>
    <div slot="tags">
      <tag color="rgb(96, 154, 255)" style="margin-right: 0px; border-radius: 6px;">男</tag>
      <tag plain color="rgb(255, 183, 184)" text-color="rgb(255, 77, 79)">尊贵铂金1</tag>
    </div>
    <div slot="bottom">
      <div class="van-card__price">
        <span class="va-price">
          5.24
          <span class="va-pe">¥/时</span>
          <span class="song">租送</span>
        </span>
      </div>
      <div class="num">已租94次</div>
    </div>
  </card>
</template>
<script>
import { Card, Image, Tag } from "vant";
export default {
  name: "Card",
  components: {
    card: Card,
    vImage: Image,
    tag: Tag
  }
};
</script>
<style scoped>
.content .van-card {
  background-color: #ffffff;
  border-radius: 0.75rem;
  padding-top: 0.75rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
.content .van-card .title {
  max-height: 40px;
  color: #333333;
  font-size: 1rem;
  line-height: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content .van-card .va-desc {
  color: #999999;
  margin-top: 3px;
  font-size: 12px;
}
.content .van-card .song {
  background: url("../../assets/song.png") no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  width: 2rem;
  padding-left: 2px;
  -webkit-transform: scale(0.7, 0.7);
  transform: scale(0.7, 0.7);
  -webkit-transform-origin: center center;
  transform-origin: center center;
  position: relative;
  left: -5px;
  top: -2px;
}
.content .van-card .van-card__thumb {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 10px;
}
.content .van-card .van-card__thumb .card-num {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 12px;
}
.content .van-card .van-card__bottom {
  margin-top: 6px;
  position: relative;
}
.content .van-card .va-price {
  font-size: 20px;
  color: #ff4d4f;
  font-weight: 500;
}
.content .van-card .va-price .va-pe {
  font-size: 12px;
  color: #666666;
  position: relative;
  left: 2px;
  top: -2px;
  font-weight: 400;
}
.content .van-card .num {
  color: #999999;
  font-size: 12px;
}
.content .van-card .va-report {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #666666;
  margin-top: 8px;
  padding-bottom: 1px;
}
.content .van-card .van-tag {
  padding: 1px 3px;
  font-size: 12px;
}
.content .van-card .va-tar {
  margin-right: 4px;
  padding-left: 3px;
  padding-right: 3px;
}
.content .van-card .van-tag--plain {
  margin-top: 4px;
}
</style>
