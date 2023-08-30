<script>
  export default {
    methods: {
      loadVid(el) {
        const t = el.currentTarget
        let sourceEl = document.createElement("source", { type: "video/mp4", src: "/src/assets/images/real/2901376266035646338.mp4", onerror: '' });

        // t.type = "video/mp4"
        // t.src = "/src/assets/images/real/2901376266035646338.mp4"
        // t.onerror = ""
        document.getElementById('f-iv').appendChild(sourceEl);
      }
    }
  }
</script>
<template>
  <div class="container-fluid pb-2">
      <div class="container py-5">
          <div class="row justify-content-center">
              <div class="col-lg-7">
                  <h2 class="section-title position-relative text-center py-4">Được chế biến từ những nguyên liệu đảm bảo nhất</h2>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4 py-4">
                  <h1 class="font-weight-bold mb-3">Panna Cotta là gì?</h1>
                  <h5 class="text-muted mb-3">Panna Cotta là một món tráng miệng ngọt ngào đến từ đất nước Italia và đã chinh phục vị giác thực khách khắp thế giới.</h5>
                  <p>Panna Cotta (trong tiếng Italia nghĩa là kem nấu) là một món tráng miệng nấu kem, sữa và đường với bột thạch rồi đợi cho hỗn hợp đông lại. Công thức đầu tiên của Panna Cotta được bắt nguồn ở miền Bắc nước Italia, khi người ta đem làm đông kem sữa với xương cá (collagen trong xương cá sẽ làm đông đặc kem) và thưởng thức. Ngày nay, người ta thường dùng gelatin để chế biến Panna Cotta, cho ra món bánh có kết cấu mịn màng, tan nhẹ trong miệng. Ngoài ra, bạn cũng có thể tăng hương vị bằng các loại trái cây, nước sốt cho món Panna Cotta thêm phần hấp dẫn.</p>
              </div>
              <div class="col-lg-4" style="min-height: 400px;">
                <div class="position-relative h-100 f-iv overflow-hidden">
                  <video id="f-iv" frameborder="0" autoplay="true" muted="true" loop="true" playsinline="true" preload="auto" defaultMuted>
                    <source loading="lazy" src="/src/assets/images/real/2901376266035646338.webm" type="video/webm">
                    <source loading="lazy" src="/src/assets/images/real/2901376266035646338.mp4" type="video/mp4">
                  </video>
                </div>
              </div>
              <div class="col-lg-4 pt-5">
                  <h4 class="font-weight-bold mb-3">Nguyên liệu</h4>
                  <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Sữa tươi TH True Milk</h5>
                  <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Anchor whipping cream</h5>
                  <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Lá gelatin</h5>
              </div>
          </div>
      </div>
  </div>

  <div class="container-fluid my-5 py-2 px-0">
    <div class="row bg-primary m-0 text-center d-flex align-items-center justify-content-center">
      <div class="col-md-12 py-md-0 px-0">
        <div class="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
          <div class="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4 btn-play b" style="width: 60px; height: 70px;">
            <h3 class="font-weight-bold text-secondary mb-0">10.000</h3>
          </div>
          <h3 class="font-weight-bold text-white mt-3 mb-4">EMBEs PannaCotta</h3>
          <p class="text-white mb-4">Panna Cotta thơm lừng, sánh mịn, ngọt thanh dịu hoà quyện cùng vị béo tan chảy</p>
        </div>
      </div>
    </div>
  </div>
</template>
