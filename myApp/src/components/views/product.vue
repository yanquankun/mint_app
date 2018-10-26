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
                <van-card num="2" tag="贱卖" price="99.00" desc="描述信息" title="商品标题" :thumb="picurl" origin-price="10.00">
                    <div slot="footer">
                        <van-button size="mini" @click="look_pro()">查看</van-button>
                        <van-button size="mini" @click="buy()">购买</van-button>
                    </div>
                </van-card>
            </van-tab>
            <van-tab title="商品页二">内容 2</van-tab>
            <van-tab title="商品页三">内容 3</van-tab>
        </van-tabs>
        <!-- 商品详情 -->
        <van-sku v-model="showBase" :sku="sku" :goods="goods" :goods-id="goodsId" :hide-stock="sku.hide_stock" :quota="quota" :quota-used="quotaUsed" :reset-stepper-on-hide=true :reset-selected-sku-on-hide=true :close-on-click-overlay="closeOnClickOverlay" :disable-stepper-input="disableStepperInput" :show-add-cart-btn=true :message-config="messageConfig" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
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
      picurl: "./static/product1.jpg",
      search_value: "",
      isShowSearch: false,
      isShowProdcut: false,
      showBase: false,
      closeOnClickOverlay: true,
      disableStepperInput: true,
      goodsId: "1215",
      quota: 0,
      quotaUsed: 11,
      customStepperConfig: {
        // 自定义限购文案
        quotaText: "每次限购1件",
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
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placehold配置
        placeholderMap: {
          text: "请输入您的备注"
          //   tel: "123"
        }
      },
      goods: {
        // 商品标题
        title: "粉红性感小T恤",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/2.jpg"
      },
      sku: {
        tree: [
          {
            k: "颜色",
            k_id: "1",
            v: [
              {
                id: "30349",
                name: "天蓝色",
                imgUrl:
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
              },
              {
                id: "30350",
                name: "粉色",
                imgUrl:
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
              }
            ],
            k_s: "s1",
            count: 2
          },
          {
            k: "尺寸",
            k_id: "2",
            v: [
              {
                id: "1193",
                name: "L"
              },
              {
                id: "1194",
                name: "XL"
              }
            ],
            k_s: "s2",
            count: 2
          }
        ],
        list: [
          {
            id: 2257,
            price: 100,
            discount: 100,
            code: "",
            s1: "30349",
            s2: "1193",
            s3: "0",
            s4: "0",
            s5: "0",
            extend: null,
            kdt_id: 55,
            discount_price: 0,
            stock_num: 111,
            stock_mode: 0,
            is_sell: null,
            combin_sku: false,
            goods_id: 946755
          },
          {
            id: 2257,
            price: 100,
            discount: 100,
            code: "",
            s1: "30350",
            s2: "1193",
            s3: "0",
            s4: "0",
            s5: "0",
            extend: null,
            kdt_id: 55,
            discount_price: 0,
            stock_num: 111,
            stock_mode: 0,
            is_sell: null,
            combin_sku: false,
            goods_id: 946755
          },
          {
            id: 2258,
            price: 100,
            discount: 100,
            code: "",
            s1: "30349",
            s2: "1194",
            s3: "0",
            s4: "0",
            s5: "0",
            extend: null,
            kdt_id: 55,
            discount_price: 0,
            stock_num: 6,
            stock_mode: 0,
            is_sell: null,
            combin_sku: false,
            goods_id: 946755
          },
          {
            id: 2258,
            price: 100,
            discount: 100,
            code: "",
            s1: "30350",
            s2: "1194",
            s3: "0",
            s4: "0",
            s5: "0",
            extend: null,
            kdt_id: 55,
            discount_price: 0,
            stock_num: 6,
            stock_mode: 0,
            is_sell: null,
            combin_sku: false,
            goods_id: 946755
          }
        ],
        price: "1.00",
        stock_num: 227,
        collection_id: 2261,
        collection_price: 0,
        none_sku: false,
        sold_num: 0,
        min_price: "1.00",
        max_price: "1.00",
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
        hide_stock: false
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
      this.showBase = true;
      if (this.buy_count == 0) {
        this.buy_count = 1;
        this.isShowProdcut = true;
      } else {
        this.buy_count = 0;
        this.isShowProdcut = false;
      }
    },
    look_pro() {
      // 选用query方式跳转路由后会拼接参数，params方式不会
      this.$router.push({
        name: "product_view",
        query: { goodsId: this.goodsId }
      });
      //   this.$router.push({
      //     path: "/product_view",
      //     name: "product_view",
      //     params: {
      //       goodsId: this.goodsId
      //     }
      //   });
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
