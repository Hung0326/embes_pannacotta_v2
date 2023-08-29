import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './lib/jquery-3.4.1.min.js'
import './lib/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
