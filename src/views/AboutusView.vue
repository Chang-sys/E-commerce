<template>
    <Headers />
    <Aboutus />>
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue';
import Aboutus from '../components/aboutus.vue';
import Footers from '../components/footers.vue';

export default{
    name: "AboutView",
    components: {
        Headers,
        Aboutus,
        Footers,
    },
}

</script>