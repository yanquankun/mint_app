<template>
    <div class="map_web">
        <mt-header title="地图导航">
            <router-link to="/index" slot="left">
                <mt-button icon="back">主页</mt-button>
            </router-link>
        </mt-header>
        <div class="map">
            <GDmap @drag="dragMap" class="mapbox"></GDmap>
        </div>
    </div>
</template>
<script>
import GDmap from "./../common/GDMap";
export default {
  components: {
    GDmap: GDmap
  },
  data() {
    return {
      dragData: {
        lng: null,
        lat: null,
        address: null,
        nearestJunction: null,
        nearestRoad: null,
        nearestPOI: null
      }
    };
  },
  methods: {
    dragMap(data) {
      console.log(data);
      this.dragData = {
        lng: data.position.lng,
        lat: data.position.lat,
        address: data.address,
        nearestJunction: data.nearestJunction,
        nearestRoad: data.nearestRoad,
        nearestPOI: data.nearestPOI
      };
    }
  }
};
</script>
<style lang="less" scoped>
.map_web {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
 
