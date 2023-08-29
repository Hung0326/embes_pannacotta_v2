<script setup>
  import Testimonial from '@/components/cp_home/Testimonial.vue'
  import Contact from '@/components/shared/Contact.vue'
  import Footer from '@/components/shared/Footer.vue'
</script>
<template>
  <div class="jumbotron jumbotron-fluid page-header page-header-a mb-0">
    <div class="container text-center py-5">
      <h1 class="text-white display-3 mt-lg-5">Liên hệ</h1>
    </div>
  </div>

  <div class="container py-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
        <li class="breadcrumb-item active" aria-current="page">Liên hệ</li>
      </ol>
    </nav>
  </div>

  <Testimonial/>
  <Contact/>
  <Footer/>
</template>
<style scope>
  body {
    background-color: white;
  }
</style>