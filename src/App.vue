<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar safe-area-inset-bottom v-model="active">
      <van-tabbar-item replace to="/">
        <img slot="icon" slot-scope="props" :src="props.active ? tab1_b : tab1_a" />
        <span slot-scope="props" :class="props.active ? 'title active' : 'title'">首页</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <img slot="icon" slot-scope="props" :src="props.active ? tab2_b : tab2_a" />
        <span slot-scope="props" :class="props.active ? 'title active' : 'title'">租号</span>
      </van-tabbar-item>
      <!-- <van-tabbar-item class="tab-li">
        <img class="tab-img-3" slot="icon" :src="tab3" />
        <span slot-scope="props" :class="props.active ? 'title active' : 'title'">发布账号</span>
      </van-tabbar-item>-->
      <van-tabbar-item>
        <img slot="icon" slot-scope="props" :src="props.active ? tab4_b : tab4_a" />
        <span slot-scope="props" :class="props.active ? 'title active' : 'title'">购物车</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/user">
        <img slot="icon" slot-scope="props" :src="props.active ? tab5_b : tab5_a" />
        <span slot-scope="props" :class="props.active ? 'title active' : 'title'">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import tab1_a from "./assets/tab1_a.png";
import tab1_b from "./assets/tab1_b.png";
import tab2_a from "./assets/tab2_a.png";
import tab2_b from "./assets/tab2_b.png";
import tab3 from "./assets/tab3.png";
import tab4_a from "./assets/tab4_a.png";
import tab4_b from "./assets/tab4_b.png";
import tab5_a from "./assets/tab5_a.png";
import tab5_b from "./assets/tab5_b.png";

export default {
  name: "App",
  data() {
    return {
      active: 0,
      tab1_a,
      tab1_b,
      tab2_a,
      tab2_b,
      tab3,
      tab4_a,
      tab4_b,
      tab5_a,
      tab5_b
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tab-li {
  position: relative;
}
.tab-li .tab-img-3 {
  position: relative;
  top: -0.6rem;
  width: 3.25rem;
  height: 3.25rem;
  z-index: 999;
}
.tab-li .title {
  position: relative;
  top: -1rem;
}
.title {
  color: #bcbec1;
  font-size: 10px;
  font-weight: bold;
}
.active {
  color: #403f3b;
}
</style>
