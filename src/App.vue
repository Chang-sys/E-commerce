
<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TestimonialView from './views/TestimonialView.vue'
// import Page

export default {
  name: "App",
  components: {
    HomeView,
    TestimonialView,
  }
}
</script>
