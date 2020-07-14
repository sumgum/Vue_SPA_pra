import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_BOOK} from '../mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  // strictはオーバーヘッドが大きいため、本番環境では無効化する
  strict: true,
  state: {
    count: 0,
    name: '',
    books: [
      {
        isbn: '978-4-8222-5389-9',
        title: '作って楽しむプログラミング HTML5超入門',
        price: 2000,
      },
    ]
  },
  getters: {
    booksCount(state) {
      return state.books.length
    },
    getBooksByPrice(state) {
      return price => {
        return state.books.filter(book => book.price < price)
      }
    },
  },
  mutations: {
    updateName(state, name) {
      state.name = name
    },
    [ADD_BOOK](state, payload) {
      state.books.push(payload.book)
    },
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
