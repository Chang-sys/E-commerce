<template>
    <Header />
    <Feature />
    <StoreItem />
    <Footer />
</template>

<script>
import Header from '../components/header.vue'
import Feature from '../components/feature.vue'
import StoreItem from '../components/StoreItem.vue'
import Footer from '../components/footer.vue'

export default {
  name: "HomeView",
  components: {
    Header,
    Feature,
    StoreItem,
    Footer,
  },
}
</script>
