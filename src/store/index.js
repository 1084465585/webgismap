import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    _defaultView: '',       //默认地图view
    _defaultXZQHVisible: false, //行政区划面板显示/隐藏
    _defaultMapTreeVisible: false, //地图目录树显示/隐藏
    _defaultQueryResultVisible: false, //空间查询结果面板
    _defaultQueryResult: [], //空间查询结果
};
const getters = {
    _getDefaultView() {          
        return state._defaultView;
    },
    _getDefaultXZQHVisible() {
        return state._defaultXZQHVisible;
    },
    _getDefaultMapTreeVisible() {          
        return state._defaultMapTreeVisible;
    },
    _getDefaultQueryResultVisible() {
        return state._defaultQueryResultVisible;
    },
    _getDefaultQueryResult() {
        return state._defaultQueryResult;
    }
    
};
const mutations = {
    _setDefaultView(state,value) {
        state._defaultView = value; 
    },
    _setDefaultXZQHVisible(state, value) {
        state._defaultXZQHVisible = value;
    },
    _setDefaultMapTreeVisible(state,value) {          
        state._defaultMapTreeVisible = value;       
    },
    _setDefaultQueryResultVisible(state, value) {
        state._defaultQueryResultVisible = value;
    },
    _setDefaultQueryResult(state, value) {
        state._defaultQueryResult = value;
    }
};
const store = new Vuex.Store({
    state,
    getters,
    mutations
});
 

export default store;