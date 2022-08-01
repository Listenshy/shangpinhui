import { reqGoodsInfo } from "@/api"
const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取产品信息
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        console.log(result);
        if (result.code == 200) {
            commit("GETGOODINFO", result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}