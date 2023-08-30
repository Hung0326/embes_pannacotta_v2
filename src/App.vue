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
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      },
      toHome() {
        document.querySelector('.nav-item.nav-link.active').classList.remove('active')
        this.component = 'HomeView'
        document.getElementById('Top0106').classList.add('active')
      },
      beforeEnter() {
        window.scrollTo(0,0)
      },
      animateLogo() {
        setTimeout(()=> {
          document.querySelector('.text-x').classList.add('show')
          document.querySelector('.text-z').classList.remove('show')
        }, 1500)

        setInterval(() => {
          document.querySelector('.text-z').classList.add('show')
          setTimeout(() => {
            document.querySelector('.text-z').classList.remove('show')
          }, 1000);
        }, 5000);

        setInterval(() => { document.querySelector('.icontact').classList.toggle('v2') }, 8000);
      },
      showBTT() {
        let btt = document.querySelector(".back-to-top");

        window.addEventListener("scroll", () => {
          var y = window.scrollY;
            if (y >= 300) {
              btt.classList.add('show')
            } else {
              btt.classList.remove('show')
            }
        });
      },
      fbInit() {
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "122102521010000778");
        chatbox.setAttribute("attribution", "biz_inbox");
        
        window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v17.0'
        });
      };
  
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },
    },
    mounted() {
      if (typeof FB === "undefined") {
        this.fbInit();
      } else {
        window.FB.XFBML.parse();
      }
      this.animateLogo()
      this.showBTT()
    },
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
          <h2 class="m-0 display-4 logo text-primary"><span class="text-secondary bg-white text-z show">EMBEs</span><span class="text-x">PannaCollta</span></h2>
        </a>
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

  <div class="profile__main">
    <router-view v-slot="{  }">
      <Transition name="slide-downr" mode="out-in" @before-enter="beforeEnter">
        <div v-if="component === 'HomeView'">
          <HomeView/>
        </div>
        <div v-else-if="component === 'ContactView'">
          <ContactView/>
        </div>
        <div v-else-if="component === 'PictureView'">
          <PictureView/>
        </div>
        <div v-else-if="component === 'ProductView'">
          <ProductView/>
        </div>
        <div v-else>
          <HomeView/>
        </div>
      </Transition>
    </router-view>
  </div>
  <VFooter/>

  <a @click="scrollTop" class="btn btn-secondary px-2 back-to-top" style="bottom:80px;"><i class="fa fa-angle-double-up"></i></a>
  <div class="bth-navinator">
    <a v-if="component === 'ContactView'" href="tel:0931604585" aria-label="phone">
      <span class="b-ico call"></span>
    </a>
    <div v-if="component != 'ContactView'" class="btt" aria-label="home" @click="navLoadComponents('Contact')">
      <span class="b-ico icontact"></span>
      <!-- <span class="b-ico icontact64"></span> -->
    </div>
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
<style>
.slide-down-enter-from {
  transform: translateX(100%);
}
.slide-down-leave-to {
	opacity: 0;
}

.slide-down-enter-active {
	transition: .2s ease-out;
  top: 0;
}
.slide-down-leave-active {
	transition: .1s ease-out;
}

.slide-down-enter {
  transform: translate(0, 0);
}

.slide-downr-enter-from {
	opacity: 0;
	transform: translateY(0px);
  position: relative;
  top: 0;
}

.slide-downr-leave-to {
	opacity: 0;
	transform: translateY(200px);
}

.slide-downr-enter-active,
.slide-downr-leave-active {
	transition: 0.25s ease-out;
}
</style>
