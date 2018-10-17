<template>
    <div class="index_web" @mouseleave="leave()">
        <mt-header title="MINT_APP 登录">
            <router-link to="/map" slot="left">
                <mt-button icon="back">地图导航</mt-button>
            </router-link>
        </mt-header>
        <van-notice-bar left-icon="./../assets/tips.png" @click="tip_click()" mode="closeable" :delay=delay :scrollable="scrollable">
            {{show_tip_msg}}
        </van-notice-bar>
        <a class="git" @click="loginOut()">退出</a>
        <iframe class="ifr" src="http://blog.sina.com.cn/yanqk" frameborder="0"></iframe>
        <navs :active="active"></navs>
    </div>
</template>
<script>
import route_nav from "./common/route_nav";
export default {
  components: {
    navs: route_nav
  },
  data() {
    return {
      active: 0,
      scrollable: true,
      delay: 1,
      count:0,
      show_tip_msg:
        "大家好，这是mint的个人项目，只用于练习用途，此页面为我的个人博客，会不定期更新一下前后端知识"
    };
  },
  methods: {
    tip_click() {
      if (this.count == 0) {
        this.scrollable = false;
        this.delay = 500;
        this.count = 1;
      } else {
        this.scrollable = true;
        this.delay = 1;
        this.count = 0;
      }
    },
    loginOut() {
      this.$router.push("/login");
      sessionStorage.removeItem("getLogin");
    }
  }
};
</script>
<style lang="less" scoped>
.index_web {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  .ifr {
    position: absolute;
    width: 100%;
    height: 81%;
    left: 0px;
    z-index: 99;
  }
  .git {
    z-index: 10000;
    position: absolute;
    top: 9px;
    right: 16px;
    color: rgb(243, 243, 243);
    font-size: 14px;
    text-decoration: none;
  }
}
</style>
