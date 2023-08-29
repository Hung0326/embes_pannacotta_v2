<script>
export default {
  methods: {
    playOwlCarousel() {
      // (function ($) {
      //   $(".product-carousel").owlCarousel({
      //     autoplay: false,
      //     smartSpeed: 1500,
      //     margin: 30,
      //     dots: false,
      //     loop: true,
      //     nav : true,
      //     navText : [
      //       '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      //       '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      //     ],
      //     responsive: {
      //       0:{ items:1 },
      //       576:{ items:2 },
      //       768:{ items:3 },
      //       992:{ items:4 }
      //     }
      //   });
      // })(jQuery);
    }
  },
  mounted() {
    this.playOwlCarousel()
  }
}

</script>
<template>
  <div class="container-fluid py-4" @load="playOwlCarousel()">
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="section-title position-relative mb-5">Sản phẩm hiện tại</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="owl-carousel product-carousel embe">
            <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded pt-5 px-3">
              <div class="bg-primary mt-n5 py-3" style="width: 90px;">
                  <h4 class="font-weight-bold text-white mb-0">10.000</h4>
              </div>
              <div class="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
                  <img class="rounded-circle w-100 h-100" src="/src/assets/images/str.jpg" alt="Pannacotta Dâu tây" style="object-fit: cover;">
              </div>
              <h5 class="font-weight-bold mb-4">Vị Dâu Tây</h5>
            </div>
            <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded pt-5 px-3">
              <div class="bg-raspberry mt-n5 py-3" style="width: 90px;">
                  <h4 class="font-weight-bold text-white mb-0">10.000</h4>
              </div>
              <div class="position-relative bg-raspberry rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
                  <img class="rounded-circle w-100 h-100" src="/src/assets/images/raspberry.jpg" alt="Pannacotta Phúc Bồn Tử" style="object-fit: cover;">
              </div>
              <h5 class="font-weight-bold mb-4">Vị Phúc Bồn Tử</h5>
            </div>
            <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded pt-5 px-3">
              <div class="bg-kiwi mt-n5 py-3" style="width: 90px;">
                  <h4 class="font-weight-bold text-white mb-0">10.000</h4>
              </div>
              <div class="position-relative bg-kiwi rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
                  <img class="rounded-circle w-100 h-100" src="/src/assets/images/kiwi.jpg" alt="Pannacotta kiwi" style="object-fit: cover;">
              </div>
              <h5 class="font-weight-bold mb-4">Vị Kiwi</h5>
            </div>
            <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded pt-5 px-3">
              <div class="bg-pas mt-n5 py-3" style="width: 90px;">
                  <h4 class="font-weight-bold text-white mb-0">10.000</h4>
              </div>
              <div class="position-relative bg-pas rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
                  <img class="rounded-circle w-100 h-100" src="/src/assets/images/pas.jpg" alt="Pannacotta chanh dây" style="object-fit: cover;">
              </div>
              <h5 class="font-weight-bold mb-4">Vị Chanh Dây</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
