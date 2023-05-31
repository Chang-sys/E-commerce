
<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'

export default {
  name: "App",
  components: {
    HomeView,
  }
}
</script>
