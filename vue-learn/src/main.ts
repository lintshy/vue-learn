import { createApp } from 'vue'
import { createPinia } from 'pinia'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'
function SecretPiniaPlugin() {
    return { secret: 'the cake is a lie' }
}

const app = createApp(App)
const pinia = createPinia()
pinia.use(SecretPiniaPlugin)
app.use(pinia)

app.use(router)


app.mount('#app')
