<template>
    <Header />
    <Feature />
    <StoreItem />
    <!-- <div class="w-full h-fit container m-auto mt-8 grid grid-cols-5 gap-2">
      <StoreItem name="Water Melon"></StoreItem>
    <div class="w-full h-fit text-center flex flex-col items-center">
    </div>
        <button class="w-[230px] h-fit mb-5 mt-5 border-2 border-[#FF7700] p-3">
            <p class="text-3xl text-[#FF7700] font-bold hover:text-orange-600">View All</p>
        </button>
    </div> -->
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
