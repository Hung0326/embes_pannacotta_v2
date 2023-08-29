import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'owl.carousel';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
