import Vue from 'vue';
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';
import DataVisual from './../pages/DataVisual.vue'
import OneMap from './../pages/OneMap.vue'
Vue.use(VueRouter);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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