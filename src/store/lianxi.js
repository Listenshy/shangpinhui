const state = {
      jiaoxue: '' 
}
const mutations = {
      SET_JIAOXUE(state, jiaoxue) {
            state.jiaoxue = jiaoxue
      }
}
const actions = {
      setJiaoxue({ commit }, jiaoxue) {
            commit('SET_JIAOXUE', jiaoxue)
      }
}
export default {
      state,
      mutations,
      actions,
}