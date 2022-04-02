import Vue from 'vue';
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';
import DataVisual from './../pages/DataVisual.vue'
import OneMap from './../pages/OneMap.vue'
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:DataVisual,
        },
        {
            path:'/onemap',
            component:OneMap,
        }
    ],
    mode:'history'
})