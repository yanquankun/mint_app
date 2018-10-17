<template>
    <div class="route_nav_web">
        <van-tabbar :value="active_data" :z-index=zed>
            <van-tabbar-item icon="shop" to="/index">主页</van-tabbar-item>
            <van-tabbar-item icon="photo" to="/images">个人照片</van-tabbar-item>
            <van-tabbar-item icon="shop" dot to="/product">商品</van-tabbar-item>
            <van-tabbar-item icon="cart" to="/shop_car" info="￥">购物车</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  props: ["active"],
  computed:{
      active_data:function(){
          return this.active;
      }
  },
  data() {
    return {
      zed: 99
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

