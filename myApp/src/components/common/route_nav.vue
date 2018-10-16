<template>
    <div class="route_nav_web">
        <van-tabbar v-model="active" :z-index=zed >
            <van-tabbar-item icon="shop" to="/index">index页面</van-tabbar-item>
            <van-tabbar-item icon="chat" dot url="https://github.com/yanquankun">个人git</van-tabbar-item>
            <van-tabbar-item icon="records" to="/images">个人照片</van-tabbar-item>
            <van-tabbar-item icon="gold-coin" info="map">地图</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      zed:99
    };
  }
};
</script>
<style lang="less" scoped>
.route_nav_web {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

