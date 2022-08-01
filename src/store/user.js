import { reqGetCode, reqUserRegister, reqUserInfo, reqUserLogin, reqUserOut } from '@/api/index'
import { setToken, getToken, removeToken } from '@/utils/token'
const state = {
      code: "",
      token: getToken(),
      userInfo: {}
}
const mutations = {
      GETCODE(state, code) {
            state.code = code
      },
      USERLOGIN(state, token) {
            state.token = token
      },
      GETUSERINFO(state, userInfo) {
            state.userInfo = userInfo
      },
      CLEAR(state) {
            state.token = ""
            state.userInfo = {}
            removeToken()
      }
}
const actions = {
      // 验证码
      // getCode({ commit }, phone) {
      //       reqGetCode(phone).then((res) => {
      //             // console.log(res);
      //             if (res.code == 200) {
      //                   commit("GETCODE", res.data)
      //                   return "ok"
      //             } else {
      //                   return Promise.reject(new Error("false"))
      //             }
      //       })
      // }
      async getCode({ commit }, phone) {
            let result = await reqGetCode(phone)
            // console.log(result);
            if (result.code == 200) {
                  commit("GETCODE", result.data)
                  return "ok"
            } else {
                  return Promise.reject(new Error("false"))
            }
      },
      async userRegister({ commit }, user) {
            let result = await reqUserRegister(user)
            // console.log(result);
            if (result.code == 200) {
                  return "ok"
            } else {
                  return Promise.reject('1111')
            }
      },
      async userLogin({ commit }, data) {
            let result = await reqUserLogin(data)
            // console.log(result);
            // token  用户唯一标识  
            if (result.code == 200) {
                  commit("USERLOGIN", result.data.token)
                  // 永久存储token
                  setToken(result.data.token)
                  return "ok"
            } else {
                  return Promise.reject(new Error("false"))
            }
      },
      async getUserInfo({ commit }, token) {
            let result = await reqUserInfo()
            // console.log(result);
            if (result.code == 200) {
                  commit("GETUSERINFO", result.data)
                  return "ok"
            } else {
                  return Promise.reject(new Error("false"))
            }
      },
      async getUserOut({ commit }, out) {
            let result = await reqUserOut()
            // console.log(result);
            if (result.code == 200) {
                  // removeToken()
                  commit("CLEAR")
                  return "ok"
            } else {
                  return Promise.reject(new Error("false"))
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