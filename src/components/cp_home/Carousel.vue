<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
}
</script>

<template>
  <Carousel :items-to-show="1" :autoplay="4500" :wrap-around="true">
    <Slide :key="1">
      <div class="carousel__item active">
        <img class="w-100" src="/src/assets/images/carousel-2.jpg" alt="Panna cotta embes">
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div class="" style="max-width: 900px;">
            <div class="sell-content pc d-none d-md-block d-lg-block">
              <h2 class="mt-0 display-3 text-white">Hiện tại EMBEs chỉ đang bán hàng với hình thức <strong>ONLINE</strong></h2>
              <h4 class="text-white text-uppercase">
                Quý khách mua hàng vui lòng liên hệ số điện thoại cũng như page của <strong>EMBEs PannaCotta</strong>
              </h4>
              <h4 class="text-white text-uppercase">0931.604.585 (Min)</h4>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61550251735509" class="contact"><h3 class="text-primary"><strong>EMBEs PannaCotta</strong></h3></a>
            </div>
            <div class="sell-content d-sm-block d-md-none">
              <h4 class="mt-0 text-white">Hiện tại EMBEs chỉ đang bán hàng với hình thức <strong>ONLINE</strong></h4>
              <p>
                Quý khách mua hàng vui lòng liên hệ số điện thoại cũng như page của <strong>EMBEs PannaCotta</strong>
              </p>
              <p>0931.604.585 (Min)</p>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61550251735509" class="contact">EMBEs PannaCotta</a>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <Slide :key="1">
      <div class="carousel__item active">
        <img class="w-100" loading="lazy" src="/src/assets/images/carousel-1.jpg" alt="Panna Cotta">
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div class="p-3" style="max-width: 900px;">
            <h2 class="display-3 text-white mb-md-4">Panna Cotta</h2>
            <h4 class="text-white text-uppercase mb-md-3">Ngọt ngào & sánh mịn</h4>
          </div>
        </div>
      </div>
    </Slide>
    
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<style>
.carousel__item {
  width: 100%;
  max-height: 600px;
}
.carousel__item img {
  aspect-ratio: 16/9;
}
.carousel__prev, .carousel__next {
  color: white;
  outline: none !important;;
}

.carousel__prev:hover ,
.carousel__next:hover {
  color: white;
  outline: none !important;;
}
</style>