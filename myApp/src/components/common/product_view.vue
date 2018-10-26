<template>
    <div>
        商品详情页{{goodsId}}
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      goodsId: this.$route.query.goodsId //必须要在这里获取，否则无法获取到
    };
  },
  methods: {},
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route(to, from) {
      // 取到路由带过来的参数
       this.goodsId = this.$route.query.goodsId;
    }
  }
};
</script>
<style lang="less" scoped>
</style>

