<template>
    <Headers />
    <Reviewer />
    <Feature />
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue'
import Reviewer from '../components/reviewCustomer.vue';
import Feature from '../components/dailyDeals.vue';
import Footers from '../components/footers.vue';

export default{
    name: 'TestimonialView',

    components: {
        Headers,
        Reviewer,
        Feature,
        Footers,
    },
}

</script>