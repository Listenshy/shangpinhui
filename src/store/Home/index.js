import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api/index.js'
// Home 模块小仓库
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    // 通过api里面的函数调用 向服务器发送请求 获取服务器数据
    // async categoryList() {
    //     let result = await reqCategoryList()
    //     console.log(result);
    // }
    categoryList({ commit }) {
        reqCategoryList().then((res) => {
            // console.log(res);
            commit("CATEGORYLIST", res.data)
        })
    },
    getBannerList({ commit }) {
        reqGetBannerList().then((res) => {
            // console.log(res);
            commit('GETBANNERLIST', res.data)
        })
    },
    getFloorList({ commit }) {
        reqFloorList().then((res) => {
            // console.log(res.data);
            commit('GETFLOORLIST', res.data)
        })
    }
}
// 计算属性
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}