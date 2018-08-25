<template>
    <div class="index_web">
        <mt-header title="MINT_APP 登录" >
        <router-link to="/images" slot="left">
            <mt-button icon="back">个人相册</mt-button>
        </router-link>
        </mt-header>
        <a class="git" href="https://github.com/yanquankun">个人Git</a>
        <iframe class="ifr" src="http://blog.sina.com.cn/yanqk" frameborder="0"></iframe>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.index_web {
  position: absolute;
  width: 100%;
  height: 100%;
  .ifr {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
  }
  .git{
      z-index: 10000;
      position: absolute;
      top: 9px;
      right: 16px;
      color: rgb(243, 243, 243);
      font-size: 14px;
      text-decoration:none;
  }
}
</style>
