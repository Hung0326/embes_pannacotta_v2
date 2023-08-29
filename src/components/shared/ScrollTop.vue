<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0,0)
    }
  }
}
</script>
<template>
  <a href="#" @click="scrollTop" class="btn btn-secondary px-2 back-to-top" style="bottom:80px;"><i class="fa fa-angle-double-up"></i></a>
</template>
