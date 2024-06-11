import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 通过设置一个 baseURL 便于为 axios 实例的方法传递相对 URL
// axios.defaults.baseURL = 'http://127.0.0.1:3000'
app.provide('$axios', axios)

app.mount('#app')
