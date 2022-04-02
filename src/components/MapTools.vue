<template>
  <div class="maptools-view">
    <span class="maptools-item">行政区导航</span>
    <span class="maptools-item">距离测量</span>
    <span class="maptools-item">面积测量</span>
    <span class="maptools-item">清屏</span>
  </div>
</template>

<script>
export default {
  name: 'MapTools',
  props: {
    msg: String
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
