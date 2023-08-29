import './assets/main.css'
import '../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'

import '../node_modules/jquery/dist/jquery.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/owl.carousel/dist/owl.carousel.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
