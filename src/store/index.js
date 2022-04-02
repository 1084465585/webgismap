import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
     _defaultView: '333',       //默认地图view
};
 
const getters = {
 
    _getDefaultView() {          
        return state._defaultView;
    }
};
 
const mutations = {
 
    _setDefaultView(state,value) {
        state._defaultView = value; 
    }
};
 
const store = new Vuex.Store({
    state,
    getters,
    mutations
});
 

export default store;