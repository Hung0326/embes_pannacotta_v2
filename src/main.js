import './assets/main.css'
import './lib/jquery-3.4.1.min.js'
import './lib/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
