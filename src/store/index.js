import { createStore } from 'vuex'
import api from '../api'

export default createStore({
  state: {
    userId: 4,
    user: null,
    loading: true,
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },

    SET_LOADING(state, payload) {
      state.loading = payload
    }
  },

  actions: {
    getUser({ state, commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await api.get(`/user/${state.userId}`)
  
          commit('SET_USER', data.data)
          commit('SET_LOADING', false)
          resolve()
        } catch (e) {
          commit('SET_USER', null)
          commit('SET_LOADING', false)
          console.log(`Failed to fetch user ${state.userId}`, e.message)
          reject()
        }
      })
    },
  },
})
