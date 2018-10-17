<template>
    <div class="product_web">
        <van-nav-bar title="商品" left-text="返回" @click-right="search()" left-arrow>
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <van-search v-show="isShowSearch" v-model="search_value" placeholder="请输入搜索关键词" show-action @search="onSearch">
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <!-- 商品展示 -->
        <van-tabs class="mid_view" type="card">
            <van-tab title="商品页一">
                <van-card num="2" tag="贱卖" price="2.00" desc="描述信息" title="商品标题" :thumb="picurl" origin-price="10.00">
                    <div slot="footer">
                        <van-button size="mini">查看</van-button>
                        <van-button size="mini" @click="buy()">购买</van-button>
                    </div>
                </van-card>
            </van-tab>
            <van-tab title="商品页二">内容 2</van-tab>
            <van-tab title="商品页三">内容 3</van-tab>
        </van-tabs>
        <!-- 商品详情 -->
        <van-sku v-model="product_data" v-show="isShowProdcut" :custom-stepper-config="customStepperConfig" :sku="sku" close-on-click-overlay=true :goods="goods" :goods-id="goodsId" :hide-stock=true :quota="quota" :quota-used="quotaUsed" :reset-stepper-on-hide=true :reset-selected-sku-on-hide=false @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
        <!-- 底部导航 -->
        <navs :active="active"></navs>
    </div>
</template>
<script>
import route_nav from "./../common/route_nav";
import { Toast } from "mint-ui";
export default {
  components: {
    navs: route_nav
  },
  data() {
    return {
      active: 2,
      count: 0,
      buy_count: 0,
      picurl: "./../../assets/product1.jpg",
      search_value: "",
      isShowSearch: false,
      isShowProdcut: false,
      goodsId:"",
      quota:5,
      quotaUsed:11,
      product_data:{},
      customStepperConfig: {
        // 自定义限购文案
        quotaText: "每次限购xxx件",
        // 自定义步进器超过限制时的回调
        handleOverLimit: data => {
          const { action, limitType, quota, quotaUsed } = data;
          if (action === "minus") {
            Toast("至少选择一件商品");
          } else if (action === "plus") {
            // const { LIMIT_TYPE } = Sku.skuConstants;
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              let msg = `单次限购${quota}件`;
              if (quotaUsed > 0) msg += `，您已购买${quotaUsed}`;
              Toast(msg);
            } else {
              Toast("库存不够了~~");
            }
          }
        }
      },
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1" // 是否必填 '1' 表示必填
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      }
    };
  },
  methods: {
    search() {
      if (this.count == 0) {
        this.count = 1;
        this.isShowSearch = true;
      } else {
        this.count = 0;
        this.isShowSearch = false;
      }
    },
    onSearch() {
      if (this.search_value == "") {
        Toast("请输入搜索关键词");
      } else {
        this.isShowSearch = false;
        // 占坑————————请求后台，当获取到数据时，删除搜索框，否则提示
      }
    },
    buy() {
      if (this.buy_count == 0) {
        this.buy_count = 1;
        this.isShowProdcut = true;
      } else {
        this.buy_count = 0;
        this.isShowProdcut = false;
      }
    },
    onBuyClicked() {
      alert("购买");
    },
    onAddCartClicked() {
      alert("加入购物车");
    }
  }
};
</script>
<style lang="less" scoped>
.product_web {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: rgb(255, 255, 255);
  .mid_view {
    margin-top: 20px;
  }
}
</style>
