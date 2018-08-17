<template>
    <div class="regis_web">
        <mt-header title="注册" >
            <router-link to="/Login" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="lists">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        </div>
        <mt-button class="sava" type="primary" @click="sava()">提交</mt-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
      phone: null,
      birthday: null
    };
  },
  methods:{
      sava(){
          console.log(this.username);
      }
  }
};
</script>
<style lang="less" scoped>
.regis_web {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(./../../assets/墙纸.jpg) no-repeat;
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


