<template>
    <div class="regis_web">
        <mt-header title="注册" >
            <router-link to="/Login" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="lists">
            <mt-field label="用户名" placeholder="请输入用户名" type="username" v-model="username"></mt-field>           
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="number" v-model="phone"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        </div>
        <mt-button class="sava" type="primary" @click="sava()">提交</mt-button>
    </div>
</template>
<script>
import { Field, Toast } from "mint-ui";
export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
      phone: null,
      birthday: null,
      guid: "",
      regisResult: {}
    };
  },
  methods: {
    sava() {
      this.$store.dispatch("regisResult", {
        guid: this.newguid(),
        username: this.username,
        email: this.email,
        password: this.password,
        phone: this.phone,
        birthday: this.birthday
      });
      this.regisResult = this.$store.state.regisResult;
      if (this.regisResult.code == 400) {
        Toast(this.regisResult.success);
      } else if (this.regisResult.code == 200) {
        Toast(this.regisResult.success);
        this.$router.push("/Login");
      }
    },
    newguid() {
      let guid = "";
      for (let i = 1; i <= 32; i++) {
        let n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
      }
      return guid;
    }
  }
};
</script>
<style lang="less" scoped>
.regis_web {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(./../../assets/a.jpg) no-repeat;
  background-size: 100% 100%;
  .lists {
    width: 80%;
    margin-left: 10%;
    margin-top: 30%;
  }
  .sava {
    width: 80%;
    height: 32px;
  }
}
</style>


