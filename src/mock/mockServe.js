import Mock from 'mockjs'

import banner from './banner.json'
import floor from './floor.json'
// mock  第一个参数请求地址  第二个参数请求数据
Mock.mock("/mock/banner", { code: 200, data: banner })//模拟轮播图
Mock.mock("/mock/floor", { code: 200, data: floor })