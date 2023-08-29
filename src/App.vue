<script>
  import HomeView from "@/views/HomeView.vue"
  import ContactView from "@/views/ContactView.vue"
  import PictureView from "@/views/PictureView.vue"
  import ProductView from "@/views/ProductView.vue"
  import VFooter from '@/components/shared/VFooter.vue'

  export default {
    name: "app",
    components: {
      HomeView,
      ContactView,
      PictureView,
      ProductView,
      VFooter
    },
    data() {
      return {
        component: "HomeView",
      };
    },
    methods: {
      loadComponents(name, e) {
        document.querySelector('.nav-item.nav-link.active').classList.remove('active')
        e.currentTarget.classList.add('active')
        this.component = `${name}View`
      },
      navLoadComponents(name) {
        this.component = `${name}View`
      },
      scrollTop() {
        window.scrollTo(0,0)
      },
      toHome() {
        document.querySelector('.nav-item.nav-link.active').classList.remove('active')
        this.component = 'HomeView'
        document.getElementById('Top0106').classList.add('active')
      }
    }
  }

</script>

<template>
  <!-- Topbar Start -->
  <div class="container-fluid bg-primary py-3 d-none d-md-block"></div>
  <!-- Topbar End -->
  
  <!-- Navbar Start -->
  <header class="container-fluid position-relative nav-bar p-0">
    <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0 navbar_v2">
        <a @click="toHome" class="navbar-brand d-block d-lg-none">
          <h2 class="m-0 display-4 logo text-primary"><span class="text-secondary">EMBEs</span>PannaCollta</h2>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" aria-label="menu" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav ml-auto py-0">
            <a @click="loadComponents('Home', $event)" class="nav-item nav-link active" id="Top0106" role="button">Trang Chủ</a>
            <a @click="loadComponents('Product', $event)" class="nav-item nav-link" role="button">Sản Phẩm</a>
          </div>
          <a @click="toHome('Home')" class="navbar-brand mx-5 d-none d-lg-block">
            <h2 class="m-0 display-4 logo text-primary"><span class="text-secondary">EMBEs</span>PannaCollta</h2>
          </a>
          <div class="navbar-nav mr-auto py-0">
            <a @click="loadComponents('Picture', $event)" class="nav-item nav-link" role="button">Hình Ảnh</a>
            <a @click="loadComponents('Contact', $event)" class="nav-item nav-link" role="button">Liên Hệ</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- Navbar End -->

  <!-- <HomeView/> -->
  <keep-alive>
    <component :is="component" />
  </keep-alive>
  <VFooter/>

  <a href="#" @click="scrollTop" class="btn btn-secondary px-2 back-to-top" style="bottom:80px;"><i class="fa fa-angle-double-up"></i></a>
  <div class="bth-navinator">
    <a href="tel:0931604585" aria-label="phone">
      <span class="b-ico call"></span>
    </a>
    <div class="btt" aria-label="home" @click="navLoadComponents('Home')">
      <span v-if="component === 'HomeView'" class="b-ico home-active"></span>
      <span v-else class="b-ico home"></span>
    </div>
    <div class="btt" aria-label="picture" @click="navLoadComponents('Picture')">
      <span v-if="component === 'PictureView'" class="b-ico picture-active"></span>
      <span v-else class="b-ico picture"></span>
    </div>
    <div class="btt" @click="scrollTop">
      <span class="b-ico top"></span>
    </div>
  </div>
</template>
