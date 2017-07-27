import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    consumeData: [],
    earningsDate: [],
    settlementDate: [],
    timeline: [],
    allData: [],
    partnerList: [],
    partnerAdded: false,
    accountMangerData: []
}

const mutations = {
    consumeData_evaluation(state, { newArr }) {
        console.log('[[ consumeData_evaluation is commited ]]')
        state.consumeData = newArr.newArr
        console.log(state.consumeData)
    },
    earningDate_detail(state, { arr }) {
        console.log('[[ earningDate_detail is commited ]]')
        state.earningsDate = arr
    },
    settlementDate_detail(state, { arr }) {
        console.log('[[ settlementDate_detail is commited ]]')
        state.settlementDate = arr
    },
    addAcount(state, {obj}) {
        state.accountMangerData.unshift(obj)
    },
    setTimeLine(state, { obj }) {
        console.log('[[ timeline is setted ]]')
        state.timeline = obj
    },
    setAllData(state, { obj }) {
        console.log('[[ setAllData is setted ]]')
        state.allData = obj
    },
    setPartnerList(state, obj) {
        console.log('[[ setPartnerList ]]')
        // console.log(arr.newArr)
            var newoObj = {}
            newoObj.name = obj.name
            newoObj.sex = obj.sex
            newoObj.IDcard = obj.idCard
            newoObj.tel = obj.phoneNo
            newoObj.email = obj.email
            newoObj.cars = obj.bikeNum
            newoObj.partnerId = obj.id
            state.partnerList.push(newoObj)
    }
}

const actions = {
    //  报表管理 消费数据模块 start ====>
    consumeData_action: ({ commit }, newArr) => commit('consumeData_evaluation', { newArr }),
    //  <=====  end
    // 营收记录 收益明细 结算记录模块 start ====>
    earningsDate_action: ({ commit }, arr) => commit('earningDate_detail', { arr }),
    settlementDate_action: ({ commit }, arr) => commit('settlementDate_detail', { arr }),
    //  <====== end
    // 报表管理时间段传递  start  ====>
    timeline_action: ({ commit }, obj) => commit('setTimeLine', { obj }),
    // <===== end
    // 报表管理走势图数据  start  ====>
    alldata_action: ({ commit }, obj) => commit('setAllData', { obj }),
    // <===== end 
    // 合伙人管理模块 start ====>
    partner_action: ({ commit }, arr) => commit('setPartnerList', { arr })
    // <=====

}

const getters = {

}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})