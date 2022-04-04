<template>
  <div class="maptree-pannel" v-show="this.$store.getters._getDefaultMapTreeVisible">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';
const options = {
    url: 'https://js.arcgis.com/4.23/init.js',
    css: 'https://js.arcgis.com/4.23/esri/themes/light/main.css',
};

export default {
  name: 'MapTree',
  data() {
      return {
        data: [{
          label: '暖色系图层',
          layerid:'layerid',
          layerurl:'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '灰色系图层',
              layerid:'layerid',
              layerurl:'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer',
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
  methods:{
    async handleNodeClick(data) {
        console.log(data);
        if(data.layerurl){ //如果url存在
            const view = this.$store.getters._getDefaultView;
            // console.log(view);
            const resultLayer = view.map.findLayerById('layerid');
            if(resultLayer)  view.map.remove(resultLayer);
            //加载esri/layers/TileLayer模块
            const [TileLayer] = await loadModules(['esri/layers/TileLayer'], options);
            //实例化layer
            const layer = new TileLayer({url:data.layerurl, id:data.layerid});
            view.map.add(layer);
        }
        
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.maptree-pannel{
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: white;
    width: 200px;
    height: 300px;
}
</style>
