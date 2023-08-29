import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel'
import '../node_modules/isotope-layout/dist/isotope.pkgd.min.js'

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});


const app = createApp(App)

app.use(router)

app.mount('#app')
