<template>
    <Headers />
    <Shipping />
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue';
import Shipping from '../components/shipping.vue';
import Footers from '../components/footers.vue';

export default{
    name: "ShippingView",
    components: {
        Headers,
        Shipping,
        Footers,
    },
}

</script>