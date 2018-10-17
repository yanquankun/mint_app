<template>
    <div class="shop_web">
        购物车功能
        <navs :active="active"></navs>
    </div>
</template>
<script>
import route_nav from "./../common/route_nav";
export default {
  components: {
    navs: route_nav
  },
  data() {
    return {
      active: 3
    };
  }
};
</script>
<style lang="less" scoped>
.shop_web {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
