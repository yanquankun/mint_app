 <template>
    <div>
        <mt-header title="个人照片展示">
            <router-link to="/Login" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="contract-list" v-for="item in list" :key="item.id">
            <img class="contract-item" v-lazy="item.img" alt="服务器出错啦^_^">
        </div>
    </div>
</template>
<script>
import { Lazyload } from "mint-ui";
import img1 from "./../../assets/5.jpg";
import img2 from "./../../assets/d7727071755e6bbcc176b58e9a049d1c.jpg";
import img3 from "./../../assets/timg.jpg";

export default {
  data() {
    return {
      list: [{ img: img1 }, { img: img2 }, { img: img3 }]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.contract-list {
  height: 300px;
  .contract-item {
    width: 100%;
    height: 300px;
  }
}
</style>


