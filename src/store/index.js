import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
     _defaultView: '333',       //默认地图view
     _defaultMapTreeVisible: false,//地图目录树的显示/隐藏
};
 
const getters = {
 
    _getDefaultView() {          
        return state._defaultView;
    },
    _getDefaultMapTreeVisible() {          
        return state._defaultMapTreeVisible;
    }
};
 
const mutations = {
 
    _setDefaultView(state,value) {
        state._defaultView = value; 
    },
    _setDefaultMapTreeVisible(state,value) {          
        state._defaultMapTreeVisible = value; 
        
    }
};
 
const store = new Vuex.Store({
    state,
    getters,
    mutations
});
 

export default store;