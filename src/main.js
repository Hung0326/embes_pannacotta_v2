import './assets/main.css'
import $ from 'jquery'
window.$ = $;

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'owl.carousel';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'

$(document).ready(function($) {
  (function ($) {
    $(".product-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1500,
      margin: 30,
      dots: false,
      loop: true,
      nav : true,
      navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
        0:{ items:1 },
        576:{ items:2 },
        768:{ items:3 },
        992:{ items:4 }
      }
    });
  })(jQuery);
})
const app = createApp(App)

app.use(router)

app.mount('#app')
