<template>
  <div class="maptools-view">
    <span class="maptools-item" @click="handleMapToolsitemClick" id="xzqh">行政区导航</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="maptree">目录树管理</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="distance">距离测量</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="area">面积测量</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="clear">清屏</span>
  </div>
</template>

<script>
export default {
  name: 'MapTools',
  props: {
    msg: String
  },
  methods:{
    handleMapToolsitemClick(e){
      console.log(e.target.id);
      switch(e.target.id){
        case 'xzqh':
          break;
        case 'maptree':
          // this.$store.commit('_setDefaultMapTreeVisible',true);
          this.open();
          break;
        case 'distance':
          break;
        case 'area':
          break;
        case 'clear':
          break;
        default:
          break;
      }
    },
    open(){
      const currentVisible = this.$store.getters._getDefaultMapTreeVisible;
      this.$store.commit('_setDefaultMapTreeVisible',!currentVisible);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.maptools-view{
    position: absolute;
    height: 30px;
    padding: 0 15px;
    top: 15px;
    right: 15px;
    background-color: #fff;
}
.maptools-item{
    line-height: 30px;
    margin-left: 15px;
    color: black;
    cursor: pointer;
}
.maptools-item:first-child{
    margin-left:0px ;
}
</style>
