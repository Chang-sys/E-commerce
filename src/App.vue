
<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TestimonialView from './views/TestimonialView.vue'
import PageShopView from './views/PageShopView.vue'
import AboutusView from './views/AboutusView.vue'

export default {
  name: "App",
  components: {
    HomeView,
    TestimonialView,
    PageShopView,
    AboutusView,
  }
}
</script>
