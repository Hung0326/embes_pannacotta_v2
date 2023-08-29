<script setup>
  import Footer from '@/components/shared/Footer.vue'
</script>
<template>
  <div class="jumbotron jumbotron-fluid page-header page-header-a mb-0">
    <div class="container text-center py-5">
      <h1 class="text-white display-3 mt-lg-5">Sản phẩm</h1>
    </div>
  </div>

  <div class="container py-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sản phẩm</li>
      </ol>
    </nav>
  </div>

  <div class="container-fluid pb-2 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <h1 class="section-title position-relative text-center mb-5">Danh sách sản phẩm</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 pb-2">
          <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
            <div class="bg-primary mt-n5 py-3" style="width: 90px;">
              <h4 class="font-weight-bold text-white mb-0">10.000</h4>
            </div>
            <div class="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
              <img class="rounded-circle w-100 h-100" src="/src/assets/images/str.jpg" alt="Pannacotta Dâu tây" style="object-fit: cover;">
            </div>
            <h5 class="font-weight-bold mb-4">Vị Dâu Tây</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 pb-2">
          <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
            <div class="bg-raspberry mt-n5 py-3" style="width: 90px;">
              <h4 class="font-weight-bold text-white mb-0">10.000</h4>
            </div>
            <div class="position-relative bg-raspberry rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
              <img class="rounded-circle w-100 h-100" src="/src/assets/images/raspberry.jpg" alt="Pannacotta Phúc Bồn Tử" style="object-fit: cover;">
            </div>
            <h5 class="font-weight-bold mb-4">Vị Phúc Bồn Tử</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 pb-2">
          <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
            <div class="bg-pas mt-n5 py-3" style="width: 90px;">
              <h4 class="font-weight-bold text-white mb-0">10.000</h4>
            </div>
            <div class="position-relative bg-pas rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
              <img class="rounded-circle w-100 h-100" src="/src/assets/images/pas.jpg" alt="Pannacotta chanh dây" style="object-fit: cover;">
            </div>
            <h5 class="font-weight-bold mb-4">Vị Chanh Dây</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 pb-2">
          <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
            <div class="bg-kiwi mt-n5 py-3" style="width: 90px;">
              <h4 class="font-weight-bold text-white mb-0">10.000</h4>
            </div>
            <div class="position-relative bg-kiwi rounded-circle mt-n3 mb-4 p-3" style="width: 150px; height: 150px;">
              <img class="rounded-circle w-100 h-100" src="/src/assets/images/kiwi.jpg" alt="Pannacotta kiwi" style="object-fit: cover;">
            </div>
            <h5 class="font-weight-bold mb-4">Vị Kiwi</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</template>
<style scope>
  body {
    background-color: white;
  }
</style>