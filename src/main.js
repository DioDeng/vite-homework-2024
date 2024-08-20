import './assets/stylesheets/all.scss'

import { createApp } from 'vue'
import 'bootstrap'
import mitt from 'mitt' // Import mitt
const emitter = mitt()
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.provide('emitter', emitter)

app.mount('#app')
