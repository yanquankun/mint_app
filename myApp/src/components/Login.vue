<template>
    <div class="login_web">
      <mt-header title="MINT 登录" >
        <router-link to="/images" slot="left">
            <mt-button icon="back">个人相册</mt-button>
        </router-link>
        <mt-button slot="right"  @click="introduce()">自我介绍</mt-button>
      </mt-header>
        <card :cardTitle=cardTitle :card_content=myself_content :isCardshow=isCardshow></card>
      <div class="login_content">
        <div class="field">
          <mt-field style="backgroundColor:rgb(86, 181, 212)" label="用户名" placeholder="请输入用户名" v-model="username" disableClear></mt-field>
          <mt-field style="backgroundColor:rgb(86, 181, 212)" label="密码" placeholder="请输入密码" type="password" v-model="password" disableClear></mt-field>
          <mt-button class="loginBtn" type="primary" @click="login()">登录</mt-button>
          <mt-button class="regisBtn" plain @click="regis()">注册</mt-button>
        </div>
      </div>
    </div>
</template>
<script>
import { Field, Toast } from "mint-ui";
import card from "./common/card";
export default {
  components: {
    card: card
  },
  data() {
    return {
      isLogin: false, //路由守卫参数
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
      isCardshow: false,
      username: null,
      email: null,
      password: null
    };
  },
  mounted() {
    this.enterLogin();
  },
  computed: {
    LoginRes: function() {
      return this.$store.state.loginResult;
    }
  },
  methods: {
    introduce() {
      this.isCardshow = true;
      let that = this;
      setTimeout(() => {
        that.isCardshow = false;
      }, 3000);
    },
    regis() {
      this.$router.push("/regis");
    },
    login() {
      this.$store.dispatch("getLogin", {
        username: this.username,
        password: this.password
      });
      let that = this;
      let timer = setTimeout(() => {
        if (that.LoginRes.success == "true") {
          that.isLogin = true;
          sessionStorage.setItem("getLogin", that.isLogin);
          that.$router.push("/index");
          that.password = null;
          that.username = null;
        } else {
          that.isLogin = false;
          sessionStorage.setItem("getLogin", that.isLogin);
          Toast(that.LoginRes.msg);
        }
        clearTimeout(timer)
      }, 100);
    },
    enterLogin() {
      let that = this;
      window.addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
          that.login();
        }
      });
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
    background: url(./../assets/a.jpg) no-repeat;
    background-size: 100% 100%;
    .field {
      width: 80%;
      height: 23%;
      margin-top: 55%;
      margin-left: 10%;
      background-color: rgb(86, 181, 212);
      border: 1px solid rgb(133, 185, 196);
      .loginBtn {
        width: 80px;
        height: 32px;
        margin-top: 10px;
        margin-right: 20px;
      }
      .regisBtn {
        width: 80px;
        height: 32px;
        margin-top: 10px;
      }
    }
  }
}
</style>
