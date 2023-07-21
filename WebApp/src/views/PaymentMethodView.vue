<template>
    <Headers />
    <PaymentForm />
    <Footers />
</template>

<script>
import Headers from '../components/headers.vue';
import PaymentForm from '../components/paymentForm.vue';
import Footers from '../components/footers.vue';

export default{
    name: "PaymentView",
    components: {
        Headers,
        PaymentForm,
        Footers,
    },
}

</script>