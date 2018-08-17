<template>
    <div class="login_web">
      <mt-header title="MINT_APP" >
        <router-link to="/images" slot="left">
            <mt-button icon="back">个人相册</mt-button>
        </router-link>
        <mt-button slot="right"  @click="introduce()">自我介绍</mt-button>
      </mt-header>
        <card :cardTitle=cardTitle :card_content=myself_content :isCardshow=isCardshow></card>
      <div class="login_content">
    
      </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import card from "./common/card";
export default {
  components: {
    card: card
  },
  data() {
    return {
      myself_content:
        "姓名：闫全堃" +
        "<br/>" +
        "英文名：mint" +
        "<br/>" +
        "年龄：25" +
        "<br/>" +
        "职业：前端" +
        "<br/>" +
        "爱好：美食O(∩_∩)O" +
        "<br/>" +
        "个人博客：" +
        "<a href=" +
        "http://blog.sina.com.cn/yanqk" +
        ">个人博客链接</a>" +
        "<br/>" +
        "github：" +
        "<a href=" +
        "https://github.com/yanquankun" +
        ">个人github链接</a>",
      cardTitle: "自我介绍",
      isCardshow: false
    };
  },
  methods: {
    introduce() {
      this.isCardshow = true;
      let that = this;
      setTimeout(() => {
        that.isCardshow = false;
      }, 3000);
    }
  }
};
</script>
<style lang="less" scoped>
.login_web {
  .login_content {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgb(145, 183, 233);
  }
}
</style>
