// 所有api接口进行统一管理
import requests from './request'
// mock
import mockRequests from './request copy'
// 三级联动接口  /api/product/getBaseCategoryList  get  无参数
// axios发请求返回promise对象
export const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "get" })
// mock 轮播图接口
export const reqGetBannerList = () => mockRequests.get('/banner')
// 获取floor
export const reqFloorList = () => mockRequests.get('/floor')
// 搜素商品 (post 至少传一个空对象) /api/list
export const reqGetSearchInfo = (params) => requests.post('/list', params)
// 获取产品详情
export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`)








// 验证码
// export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" })
export const reqGetCode = (phone) => requests.get(`/user/passport/sendCode/${phone}`)
// 注册密码
export const reqUserRegister = (data) => requests.post('/user/passport/register', data)
// 登录
export const reqUserLogin = (data) => requests.post("/user/passport/login", data)
// 获取用户信息 /user/passport/auth/getUserInfo  token
export const reqUserInfo = () => requests.get("/user/passport/auth/getUserInfo")
// 退出登录
export const reqUserOut = () => requests.get("/user/passport/logout")