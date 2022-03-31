<template>
    <div id="mapview"></div>
</template>

<script>
import { loadModules } from 'esri-loader';
//第一步 引入gis api
const options = {
    url: 'https://js.arcgis.com/4.23/init.js',
    css: 'https://js.arcgis.com/4.23/esri/themes/light/main.css',
};
export default {
    name: 'Mapview',
    components: {},
    mounted: function () {
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            //es6数组解构的语法
            const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView'], options);
            const map = new Map({
                basemap: 'osm',
            });
            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 10,
                center: [108.321905, 22.832938],
            });
            //去除ui
            view.ui.components = [];
        },
    },
};
</script>

<style>
#mapview {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
