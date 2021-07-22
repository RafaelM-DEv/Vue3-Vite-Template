import { createStore } from 'vuex'

import user from './modules/user.js'

export const store = createStore({
  modules: {
    user
  }
})

export default store
