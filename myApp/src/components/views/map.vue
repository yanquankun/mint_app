<template>
    <div class="map_web">
        <mt-header class="nav" title="地图导航">
            <router-link to="/index" slot="left">
                <mt-button icon="back">主页</mt-button>
            </router-link>
        </mt-header>
        <div class="amap-page-container">
            <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
            <el-amap ref="map" vid="amapDemo" :plugin="plugin" :zoomEnable="zoomEnable" :scrollWheel="scrollWheel" :dragEnable="dragEnable" :center="center" :zoom="zoom" class="amap-demo">
                <el-amap-marker v-for="marker in markers" :key="marker.index" :position="marker"></el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>
<script>
import AMap from "vue-amap";
export default {
  data() {
    let self = this;
    return {
      zoom: 10,
      center: [116.480983, 39.989628],
      markers: [],
      //   AMap,
      markers: [],
      dragEnable: true,
      scrollWheel: true,
      zoomEnable: true,
      searchOption: {
        city: "全国",
        citylimit: false
      },
      plugin: [
        {
          pName: "OverView",
          events: {
            init(instance) {}
          }
        },
        {
          pName: "Scale",
          position: "RB",
          events: {
            init(instance) {
              //   console.log(instance);
            }
          }
        },
        {
          pName: "ToolBar",
          position: "LB",
          autoPosition: true,
          liteStyle: true,
          events: {
            init(instance) {
              //   console.log(instance);
            }
          }
        }
      ]
    };
  },
  methods: {
    onSearchResult(pois) {
      this.markers = [];
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.center = [center.lng, center.lat];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.map_web {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .mint-header {
    z-index: 9999;
  }
  .amap-page-container {
    height: 100%;
    width: 100%;
    .search-box {
      position: absolute;
      height: 30px;
      line-height: 30px;
      width: 80%;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.8;
    }
    .amap-demo {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      width: 100%;
    }
    .amap-scalecontrol {
      left: 50px;
    }
  }
}
</style>
 
