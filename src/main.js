import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'owl.carousel';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 200) {
//     document.querySelector('.bth-navinator').classList.add('active')
//   } else {
//     document.querySelector('.bth-navinator').classList.remove('active')
//   }
// });

const app = createApp(App)

app.use(router)

app.mount('#app')
