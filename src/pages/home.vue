<template>
  <div class="bg">
    <div class="head van-row">
      <div class="title van-col van-col--4">首页</div>
      <div class="van-col van-col--20">
        <van-search shape="round" placeholder="输入货号/游戏/关键字" background="#fbdb18"></van-search>
      </div>
    </div>
    <van-swipe :autoplay="3000" class="banner container">
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          src="https://pic.zushouyou.cn/uploads/20200125/ea5a83fe9aa94c0008428d93a2b4d851.jpg"
        ></van-image>
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          src="https://pic.zushouyou.cn/uploads/20200124/3226e1ee3f1ed8c77750853f911aeb2b.jpg"
        ></van-image>
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          src="https://pic.zushouyou.cn/uploads/20200105/d13a5df6065302c626e5b5654c00653b.jpg"
        ></van-image>
      </van-swipe-item>
    </van-swipe>
    <div class="row type">
      <div class="col-20" :key="item.id" v-for="item in array">
        <van-image round width="2.75rem" height="2.75rem" :src="item.imgSrc"></van-image>
        <p class="type-title">{{ item.title }}</p>
      </div>
      <div class="col-20">
        <van-image round width="2.75rem" height="2.75rem" :src="more"></van-image>
        <p class="type-title">全部</p>
      </div>
    </div>
    <div class="content">
      <van-tabs
        background="rgb(247, 247, 247)"
        color="rgb(251, 223, 24)"
        sticky
        animated
        :border="false"
        v-model="active"
      >
        <van-tab title="王者荣耀">
          <van-list>
            <Card />
          </van-list>
        </van-tab>
        <van-tab title="Hello语音">
          <van-list>
            <Card />
          </van-list>
        </van-tab>
        <van-tab title="QQ飞车">
          <van-list>
            <Card />
          </van-list>
        </van-tab>
        <van-tab title="球球大作战">
          <van-list>
            <Card />
          </van-list>
        </van-tab>
        <van-tab title="TT语音">
          <van-list>
            <Card />
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import {
  Search,
  Swipe,
  SwipeItem,
  Image,
  Tab,
  Tabs,
  Sticky,
  Popup,
  List,
  Tag
} from "vant";
import Card from "@/components/Card";
import more from "@/assets/more.png";

export default {
  data() {
    return {
      array: [
        {
          id: 1,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191123/cdf12fbb311cf29487ba31ee2a5b29d0.jpg",
          title: "王者荣耀"
        },
        {
          id: 2,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20200121/19ef7945fd00d1a01c0f6f6f56481ff0.png",
          title: "Hello语音"
        },
        {
          id: 3,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191010/00db009fe31b8500d73a89cf4501ffe5.png",
          title: "QQ飞车"
        },
        {
          id: 4,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191010/f7434415ba5fd9c47e6f9f0419937576.png",
          title: "球球大作战"
        },
        {
          id: 5,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191010/f7434415ba5fd9c47e6f9f0419937576.png",
          title: "球球大作战"
        },
        {
          id: 6,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191010/f7434415ba5fd9c47e6f9f0419937576.png",
          title: "球球大作战"
        },
        {
          id: 7,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191010/f7434415ba5fd9c47e6f9f0419937576.png",
          title: "球球大作战"
        },
        {
          id: 8,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191010/f7434415ba5fd9c47e6f9f0419937576.png",
          title: "球球大作战"
        },
        {
          id: 9,
          imgSrc:
            "https://pic.zushouyou.cn/uploads/20191010/f7434415ba5fd9c47e6f9f0419937576.png",
          title: "球球大作战"
        }
      ],
      more,
      active: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  components: {
    Card
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.bg {
  background: url("../assets/bg.png") no-repeat 0 0;
  background-size: 100% 14rem;
  background-color: #f7f7f7;
}
.head {
  background-color: #fbdb18;
  padding: 0 0.3rem;
}
.head .title {
  text-align: center;
  margin-top: 0.7rem;
  color: #333333;
  font-size: 1.5rem;
  font-weight: bold;
}
.container {
  margin: 0 0.8rem;
  overflow: hidden;
}
.banner {
  height: 7.5rem;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  z-index: 999;
}
.type {
  background-color: #ffffff;
  margin: 0.2rem 0.8rem 0 0.8rem;
  border-radius: 0.75rem;
  padding-bottom: 0.4rem;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.row .col-20 {
  flex: 0 0 20%;
  text-align: center;
  margin-top: 1.25rem;
}
.row .type-title {
  font-size: 12px;
  margin-top: 0.1rem;
}
.content {
  margin-bottom: 3rem;
}
</style>
