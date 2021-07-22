import axios from 'axios'

axios.defaults.baseURL = 'https://api.adviceslip.com/'

const store = {
  user: {},
  advice: {}
}

const getters = {
  user: store => store.user,
  advice: store => store.advice
}

const actions = {
  getUser ({ commit }, user) {
    commit('setUser', user)
  },

  async getAdvice ({ commit }) {
    try {
      const advice = await axios.get('/advice')
      commit('setAdvice', advice.data)
    } catch (error) {
      console.log(error)
    }
  }
}
const mutations = {
  setUser (state, payload) {
    state.user = payload
  },

  setAdvice (store, payload) {
    store.advice = payload
  }
}

export default {
  namespaced: false,
  store,
  getters,
  actions,
  mutations
}
