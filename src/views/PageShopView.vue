<template>
    <Headers />
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue'
import Footers from '../components/footers.vue';

export default{
    name: 'PageShopView',

    components: {
        Headers,
        Footers,
    },
}

</script>