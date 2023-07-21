<template>
    <Headers />
    <sellItem />
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue';
import sellItem from '../components/sellItem.vue';
import Footers from '../components/footers.vue';

export default{
    name: 'PageShopView',

    components: {
        Headers,
        sellItem,
        Footers,
    },
}

</script>