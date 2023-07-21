<template>
    <Headers />
    <Myorder />
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue';
import Myorder from '../components/myOrder.vue';
import Footers from '../components/footers.vue';

export default{
    name: "AboutView",
    components: {
        Headers,
        Myorder,
        Footers,
    },
}

</script>