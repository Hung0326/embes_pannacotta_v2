<script>
export default {
  methods: {
    playOwlCarousel() {
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
      });
    }
  },
  mounted() {
    this.playOwlCarousel()
  }
}

</script>
<template>
  <div class="feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="section-header">
                    <p>Hãy chọn EMBEs</p>
                    <h2>Our Key Features</h2>
                </div>
                <div class="feature-text">
                  <div class="feature-img">
                      <div class="row">
                          <div class="col-6">
                              <img loading="lazy" src="/src/assets/images/real/b_5.jpg" alt="Panna Cotta">
                          </div>
                          <div class="col-6">
                              <img loading="lazy" src="/src/assets/images/real/b_6.jpg" alt="Panna Cotta">
                          </div>
                          <div class="col-6">
                              <img loading="lazy" src="/src/assets/images/real/b_2.jpg" alt="Panna Cotta">
                          </div>
                          <div class="col-6">
                              <img loading="lazy" src="/src/assets/images/real/b_3.jpg" alt="Panna Cotta">
                          </div>
                      </div>
                  </div>
                  <p>
                    Trên đây là những hình ảnh Pannacotta thưc tế của EMBEs. Bạn có thể xem thêm hình ảnh thực tế của những chiếc bánh Pannacotta <a target="_blank" href="/hinh-anh.html">tại đây</a>.
                  </p>
                </div>
            </div>
            <div class="col-lg-7 pt-5">
              <div class="row">
                <div class="col-sm-12 col-lg-6">
                  <div class="feature-item">
                    <i class="flaticon-ingredient"></i>
                    <h3>Nguyên liệu & sản phẩm chất lượng</h3>
                    <p>
                        EMBEs sử dụng Sữa tươi TH True Milk & Anchor whipping cream để tạo nên những chiếc bánh sánh mịn.
                    </p>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                  <div class="feature-item">
                    <i class="flaticon-safe"></i>
                    <h3>An toàn & vệ sinh</h3>
                    <p>
                      Những chiếc bánh sẽ được đóng hộp và bảo quản ở nhiệt độ từ 5 đến 10 độ.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-lg-6 w-100">
                  <div class="feature-item">
                    <i class="flaticon-gift"></i>
                    <h3>Món quà tuyệt vời</h3>
                    <p>
                      PannaCotta sẽ là món quà ngọt ngào cho gia đình, bạn bè, người thân.
                    </p>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-6 w-100">
                  <div class="feature-item">
                    <i class="flaticon-in-transit"></i>
                    <h3>Giao hàng nhanh chóng</h3>
                    <p>
                      Hỗ trợ giao hàng trong khu vực Thành Phố Hồ Chí Minh. EMBEs có nhận làm theo yêu cầu của khách hàng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>

  <div class="container-fluid py-1">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="owl-carousel testimonial-carousel">
            <div class="text-center">
              <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
              <h4 class="font-weight-light mb-4">Bằng sự tận tâm của mình, EMBEs sẽ cung cấp cho các bạn những chiếc bánh panna cotta ngon, béo mịn và đảm bảo chất lượng ạ! Chân thành cảm ơn các bạn đã ủng hộ EMBEs PannaCotta!</h4>
              <img class="testimonial-d img-fluid mx-auto mb-3" src="/src/assets/images//main-logo.png" alt="panna cotta">
              <h5 class="font-weight-bold m-0">EMBEs PannaCotta</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
