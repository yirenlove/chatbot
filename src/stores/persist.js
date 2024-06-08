import { createPersistedState } from 'pinia-plugin-persistedstate'


export const piniaPluginPersistedState = createPersistedState({
  key: key => `__persist__${key}`
})
