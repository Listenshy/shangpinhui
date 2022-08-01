// Search 模块小仓库
import { reqGetSearchInfo } from '@/api/index'
const state = {
    searchinfo: {}
}
const mutations = {
    GETSEARCHINFO(state, searchinfo) {
        state.searchinfo = searchinfo
    }
}
const actions = {
                            //默认空对象 
    getSearchInfo({ commit }, params = {}) {
        // 传入params之后看res
        reqGetSearchInfo(params).then((res) => {
            // console.log(res.data);
            commit('GETSEARCHINFO', res.data)
        })
    }
}
// 计算属性(简化仓库中的数据)
const getters = {
    // state 当前仓库的state
    goodsList(state) {
        // console.log(state);
        return state.searchinfo.goodsList
    },
    edit() {
        // console.log(22222)
    },
    trademarkList(state) {
        // console.log(state.searchinfo.trademarkList);
        return state.searchinfo.trademarkList
    },
    attrsList(state) {
        // console.log(state.searchinfo.attrsList);
        return state.searchinfo.attrsList
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}