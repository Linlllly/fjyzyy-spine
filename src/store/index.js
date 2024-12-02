import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trainingIndex: null
  },
  getters: {
    getTrainingIndex: (state) => state.trainingIndex
  },
  mutations: {
    setTrainingIndex(state, index) {
      state.trainingIndex = index
    }
  },
  actions: {
    setTrainingIndex({ commit }, index) {
      commit('setTrainingIndex', index)
    }
  }
})
