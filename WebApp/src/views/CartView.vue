<template>
    <Headers />
    <MyCart />
    <Footers />
</template>

<script>
import Headers from "../components/headers.vue"
import Footers from "../components/footers.vue"
import MyCart from "../components/myCart.vue";

export default{
    name: "CartView",
    components: {
        Headers,
        MyCart,
        Footers,
    },
}
</script>