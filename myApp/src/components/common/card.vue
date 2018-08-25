<template>
    <div class="card_web" v-if="isCardshow" @click="clickMask()">
      <div class="card_content" >
          <header class="card_herder">{{cardTitle}}</header>
          <div class="card_body" v-html="card_content"></div>
      </div>
    </div>
</template>
<script>
export default {
  props: ["cardTitle", "card_content", "isCardshow"],
  data() {
    return {};
  },
  methods: {
    clickMask() {}
  }
};
</script>
<style lang="less" scoped>
.card_web {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  .card_content {
    width: 70%;
    height: 30%;
    position: fixed;
    left: 50%;
    top: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    background-color: rgb(246, 247, 248);
    .card_herder {
      height: 25px;
      margin-bottom: 5px;
      border-bottom: 1px solid #000;
    }
  }
}
</style>
