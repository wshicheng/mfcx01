import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from './router-config.js'
// console.log(routeConfig)

// function assignRouter() {
//     var data = '1100-1300-1301-1302'
//     var res = data.split('-')
//     var _index = null
//     var obj = {}
//     var arr = []
//     for (var i = 0; i < res.length; i++) {
//         routeConfig[2].children.map((item, index) => {
//             // 如果 存在 children
//             if (item.children) {
//                 for (var i = 0; i < item.children.length; i++) {
//                     for (var prop in item.children[i]) {
//                         if (prop === res[i]) {
//                             arr.push(item.children[i])
//                             _index = index
//                         }
//                     }
//                 }
//                 obj.children = arr
//             }
//         })
//     }
//     var routerItem = Object.assign({}, routeConfig[2].children[_index], { obj })
//     routeConfig[2].children.splice(_index, 1, routerItem)
//     console.log(routeConfig[2])

// }
// //assignRouter()
Vue.use(Router)
export default new Router({
    routes: routeConfig,
    mode: 'history'
})