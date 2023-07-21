<script>
export default {
    name: 'Shipping',
    data() {
        return {
            deliveryServices: ['Food Panda', 'J&T', 'ZTO', 'VirakBunTham'],
            selectedServices: [],
        };
    },
    methods:{
        routeToPayment(){
            this.$router.push({ name: "payment" });
        }
    },
}
</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">SHIPPING</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3"><a :href="'/'"
                    class="no-underline hover:text-[#80B435]">HOME</a><span>/SHIPPING</span></h3>
        </div>
    </div>

    <div class="m-10 border border-gray-200 rounded-lg p-6 pt-1">

        <div class="flex flex-wrap gap-x-[80px] mt-3">
            <!-- Left content start here -->
            <div class="flex flex-col">
                <div class="flex flex-wrap justify-between">
                    <div class="w-[60%] flex flex-wrap">
                        <p class="text-3xl font-bold mt-3 mb-3">Shopping Address - <span class="text-3xl font-normal">12
                                Waldo
                                Road,
                                PP, CAM 11220</span></p>
                    </div>
                    <button
                        class="text-3xl font-semibold text-blue-500 underline hover:text-blue-700 hover:underline-bule-700 border-none">Edit</button>
                </div>
                <div class="flex flex-col text-3xl mt-12">
                    <div class="md:flex md:flex-wrap mb-6">
                        <p>Shiipping Method -<span class="text-blue-500"> Free</span></p>
                    </div>

                    <div class="ml-6 mb-2" v-for="service in deliveryServices" :key="service">
                        <label class="inline-flex items-center mb-6">
                            <input type="radio" v-model="selectedServices" :value="service"
                                class="form-radio h-5 w-5 text-blue-600">
                            <span class="ml-2 text-gray-700">{{ service }}</span>
                        </label>
                    </div>
                </div>

            </div>

            <!-- Left content end here -->

            <!-- Right content start here -->
            <div class="w-[38%] border border-black rounded-lg p-8 flex flex-col justify-center mb-3">
                <p class="text-3xl font-medium mb-6">Summary (<span>4</span> items)</p>
                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <!-- line -->
                <div class="w-full h-[3px] bg-gray-200 mt-9 mb-8"></div>

                <div class="flex justify-center items-center text-center justify-between font-bold text-5xl">
                    <p class="">Total :</p>
                    <p class="text-[#319B77]"> $ 65.00</p>
                </div>

                <div class="flex justify-center items-center text-center mt-3">
                    <button @click="routeToPayment"
                        class="mt-10 w-fit px-8 h-[56px] bg-customGreen border rounded-xl text-2xl font-bold text-white hover:bg-orange-500">Continue
                        to Payment Method</button>
                </div>
            </div>
            <!-- Right content end here -->
        </div>
        <!-- Customer Information end here -->
    </div>
</template>

<style>
.bg-wrapper {
    min-height: 190px;
    background: url('../assets/img/banner.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}
</style>