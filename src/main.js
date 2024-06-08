import '@/assets/base.css'
import '@/assets/element-plus.css'
import '@/assets/tailwind.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import { piniaPluginPersistedState } from './stores/persist'
import '@/permission.js'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)


app.use(router)
app.use(pinia)


app.mount('#app')
