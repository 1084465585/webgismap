<template>
    <div class="onemap-page">
        <MapView/>
        <MapTools/>
        <MapTree/>
        <XZQHComponent/>
        <ResultTable />
    </div>
</template>

<script>
import MapView from './../components/common/MapView'
import MapTools from './../components/MapTools'
import MapTree from './../components/MapTree'
import XZQHComponent from './../components/XZQHComponent.vue'
import ResultTable from './../components/ResultTable';
export default {
    name: 'OneMap',
    components: {
        MapView,
        MapTools,
        MapTree,
        XZQHComponent,
        ResultTable,
    },
    methods: {},
};
</script>

<style>
.onemap-page{
    
    position: relative;
    width: 100%;
    height: 100%;
}

</style>
