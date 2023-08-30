<script>
import Isotope from 'isotope-layout'

export default {
  data() {
    return {
      portfolioIsotope: null,      
    };
  },
  methods: {
    initIsotope() {
      var grid = document.querySelector('.portfolio-container');
      this.portfolioIsotope = new Isotope( grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        filter: '*'
      });
    },
    filterImg(target) {
      const currentTarget = target.currentTarget
      const allTargets = document.querySelectorAll('#portfolio-flters li')
      allTargets.forEach(item => { item.classList.remove('active') })
      currentTarget.classList.add('active');
      this.portfolioIsotope.arrange({
        filter: currentTarget.dataset.filter
      });
    }
  },
  mounted() {
    this.initIsotope()
  }
}
</script>
<template>
  <div class="bg-white">
    <div class="jumbotron jumbotron-fluid page-header page-header-a mb-0">
      <div class="container text-center py-5">
        <h1 class="text-white display-3 mt-lg-5">Hình ảnh</h1>
      </div>
    </div>

    <div class="container py-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li class="breadcrumb-item active" aria-current="page">Hình ảnh</li>
        </ol>
      </nav>
    </div>

    <div class="container pb-2 pt-5">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <h1 class="section-title position-relative text-center mb-5">Danh mục</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <ul class="list-inline mb-4 pb-2" id="portfolio-flters">
            <li @click="filterImg($event)" class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">Tất cả</li>
            <li @click="filterImg($event)" class="btn btn-sm btn-outline-primary m-1" data-filter=".str">Dâu tây</li>
            <li @click="filterImg($event)" class="btn btn-sm btn-outline-primary m-1" data-filter=".raspberry">Phúc Bồn Tử</li>
            <li @click="filterImg($event)" class="btn btn-sm btn-outline-primary m-1" data-filter=".pas">Chanh dây</li>
            <li @click="filterImg($event)" class="btn btn-sm btn-outline-primary m-1" data-filter=".kiwi">Kiwi</li>
          </ul>
        </div>
      </div>
      <div class="top d-flex">
        <ul class="portfolio-container">
          <li class="portfolio-item raspberry">
              <a href="#img_3"><img src="/src/assets/images/real/b_5.jpg" alt="EMBEs Pannacotta"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_4"><img src="/src/assets/images/real/b_2.jpg" alt="EMBEs Pannacotta"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_5"><img src="/src/assets/images/real/b_3.jpg" alt="EMBEs Pannacotta"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_6"><img src="/src/assets/images/real/b_4.jpg" alt="EMBEs Pannacotta"></a>
          </li>
          <li class="portfolio-item kiwi">
              <a href="#img_7"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_1.jpg"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_8"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_6.jpg"></a>
          </li>
          <li class="portfolio-item pas">
              <a href="#img_9"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b1.jpg"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_10"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b2.jpg"></a>
          </li>
          <li class="portfolio-item str">
              <a href="#img_11"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_1.jpg"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_12"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_2.jpg"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_13"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_3.jpg"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_14"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_4.jpg"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_15"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_5.jpg"></a>
          </li>
          <li class="portfolio-item second">
              <a href="#img_16"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_6.jpg"></a>
          </li>
          <li class="portfolio-item pas">
              <a href="#img_17"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_7.gif"></a>
          </li>
        </ul>
        <a href="#_3" class="lightbox trans" id="img_3"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_5.jpg"></a>
        <a href="#_4" class="lightbox trans" id="img_4"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_2.jpg"></a>
        <a href="#_5" class="lightbox trans" id="img_5"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_3.jpg"></a>
        <a href="#_6" class="lightbox trans" id="img_6"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_4.jpg"></a>
        <a href="#_7" class="lightbox trans" id="img_7"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_1.jpg"></a>
        <a href="#_8" class="lightbox trans" id="img_8"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b_6.jpg"></a>
        <a href="#_9" class="lightbox trans" id="img_9"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b1.jpg"></a>
        <a href="#_10" class="lightbox trans" id="img_10"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/b2.jpg"></a>
        <a href="#_11" class="lightbox trans" id="img_11"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_1.jpg"></a>
        <a href="#_12" class="lightbox trans" id="img_12"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_2.jpg"></a>
        <a href="#_13" class="lightbox trans" id="img_13"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_3.jpg"></a>
        <a href="#_14" class="lightbox trans" id="img_14"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_4.jpg"></a>
        <a href="#_15" class="lightbox trans" id="img_15"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_5.jpg"></a>
        <a href="#_16" class="lightbox trans" id="img_16"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_6.jpg"></a>
        <a href="#_17" class="lightbox trans" id="img_17"><img loading="lazy" alt="EMBEs Pannacotta" src="/src/assets/images/real/c_7.gif"></a>
      </div>
    </div>
  </div>
</template>
<style>
.portfolio-item {
  transform:translate3d(0,0,0);
  -webkit-transform:translate3d(0,0,0);
  -moz-transform:translate3d(0,0,0);
}
</style>