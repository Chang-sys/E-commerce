<template>
    <Headers />
    <Invoice />
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue';
import Invoice from '../components/invoice.vue';
import Footers from '../components/footers.vue';

export default{
    name: "InvoiceView",
    components: {
        Headers,
        Invoice,
        Footers,
    },
}

</script>