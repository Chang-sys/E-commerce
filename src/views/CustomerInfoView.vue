<template>
    <Headers />
    <CustomerForm />
    <Footers />
</template>

<script>

import Headers from '../components/headers.vue';
import Footers from '../components/footers.vue';
import CustomerForm from '../components/customerForm.vue';

export default{
    name: "CustomerInfoView",

    components:{
        Headers,
        CustomerForm,
        Footers,
    }
}

</script>