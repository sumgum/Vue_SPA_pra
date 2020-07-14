import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // strictはオーバーヘッドが大きいため、本番環境では無効化する
  strict: true,
  state: {
    count: 0,
  },
  mutations: {
    minus(state) {
      state.count--
    },
    plus(state) {
      state.count++
    },
  },
  actions: {
  },
  modules: {
  }
})
