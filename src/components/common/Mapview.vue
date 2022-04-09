<template>
    <div class="mapview-pannel">
        <div id="mapview"></div>
        <div id="basemapToggle"></div>
        <div id="scaleBar"></div>
        <div id="zoom"></div>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
//第一步 引入gis api
const options = {
    url: 'https://js.arcgis.com/4.23/init.js',
    css: 'https://js.arcgis.com/4.23/esri/themes/light/main.css',
};
export default {
    name: 'MapView',
    components: {},
    mounted: function () {
        console.log(this.$store.state._defaultView);
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            //es6数组解构的语法
            const [Map, MapView, Basemap,TileLayer,BasemapToggle,ScaleBar,Zoom] = await loadModules(
                [
                    'esri/Map', 
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    "esri/widgets/BasemapToggle",
                    "esri/widgets/ScaleBar",
                    'esri/widgets/Zoom'
                ], 
                options);

            let basemap = new Basemap({
            baseLayers: [
                new TileLayer({
                url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
                title: "Basemap"
                })
            ],
            title: "basemap",
            id: "basemap"
            });

            const map = new Map({
                basemap: basemap,
            });
            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 12,
                center: [108.321905, 22.832938],
            });

            //实例化底图切换控件
            const basemapToggle = new BasemapToggle({
                view:view,
                nextBasemap: "hybrid",
                container:'basemapToggle'
            });
            view.ui.add(basemapToggle)
            //实例化比例尺
            const scaleBar = new ScaleBar({
                view: view,
                container:"scaleBar",
                unit:"metric"
            });
            // Add widget to the bottom left corner of the view
            view.ui.add(scaleBar)
            //实例化缩放控件
            const zoom = new Zoom({
                view: view,
                container:"zoom",
            });
            view.ui.add(zoom)

            //去除ui
            view.ui.components = [];

            this.$store.commit('_setDefaultView',view);
        },
    },
};
</script>

<style>
.mapview-pannel,#mapview {
    position: relative;
    height: 100%;
    width: 100%;
}
#basemapToggle{
    position:absolute;
    right: 15px;
    bottom:15px;
}
#scaleBar{
    position:absolute;
    left: 15px;
    bottom:15px;
}
#zoom{
    position:absolute;
    right: 15px;
    bottom:100px;
}
</style>
