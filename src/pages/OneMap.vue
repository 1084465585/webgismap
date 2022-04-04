<template>
    <div class="onemap-page">
        <MapView/>
        <MapTools/>
        <MapTree/>
    </div>
</template>

<script>
import MapView from './../components/common/MapView'
import MapTools from './../components/MapTools'
import MapTree from './../components/MapTree'
export default {
    name: 'OneMap',
    components: {
        MapView,
        MapTools,
        MapTree,
    },
    
};
</script>

<style>
.onemap-page{
    
    position: relative;
    width: 100%;
    height: 100%;
}

</style>
