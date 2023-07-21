<script>
export default {
    name: "Invoice",
    data() {

    },
    methods: {
        routeToSuccess(){
            this.$router.push({ name: "myOrderCheck" });    
        }
    },
}
</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">COMPELED ORDER</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3"><a :href="'/'"
                    class="no-underline hover:text-[#80B435]">HOME</a><span>/COMPELED ORDER</span></h3>
        </div>
    </div>

    <div class="m-10 p-6 border border-gray-200 rounded-lg">
        <!-- Billing Detail start here -->

        <div class="flex flex-wrap gap-5 mt-3">
            <!-- Left content start here -->
            <div class="w-[60%] flex flex-col gap-x-3">
                <div class="flex flex-wrap gap-x-20 mt-10 ml-10 items-center">
                    <img class="w-[128px] h-[128px]" src="../assets/img/accept.png" alt="sucessfullImage">
                    <div class="flex flex-col justify-center">
                        <p class="text-3xl font-medium">order <span>#1212859836</span></p>
                        <p class="text-4xl font-bold">Thank you, <span>CustomerName!</span> </p>
                    </div>
                </div>

                <!-- line -->
                <div class="w- h-[1.5px] bg-black mt-8"></div>

                <p class="mt-8 text-3xl font-medium">Your Order is confirmed.<br>
                    We've accepted your order and we're getting it ready.</p>

                <!-- line -->
                <div class="w- h-[1.5px] bg-black mt-8"></div>

                <div class="flex flex-col mt-12">
                    <p class="text-4xl font-bold">Customer Information</p>
                    <p class="text-3xl font-bold mt-10">Shipping Address</p>
                    <p class="text-3xl font-medium">12 Waldo Road, PP, CAM 11220</p>

                    <p class="text-3xl font-bold mt-10">Shipping Method</p>
                    <p class="text-3xl font-medium">Cambodian Express, Free</p>

                    <!-- line -->
                    <div class="w- h-[1.5px] bg-black mt-8"></div>
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

                <div class="flex flex-wrap justify-between text-3xl font-semibold mt-8">
                    <p>Discount: </p>
                    <p>0%</p>
                </div>

                <!-- line -->
                <div class="w-full h-[3px] bg-gray-200 mt-9 mb-8"></div>

                <div class="flex justify-center items-center text-center justify-between font-bold text-5xl">
                    <p class="">Total :</p>
                    <p class="text-[#319B77]"> $ 65.00</p>
                </div>

                <div class="flex justify-center items-center text-center mt-3">
                    <button @click="routeToSuccess"
                        class="mt-10 w-96 px-8 h-[56px] bg-customGreen border rounded-2xl text-2xl font-bold text-white hover:bg-orange-500">Submit</button>
                </div>
            </div>
            <!-- Right content end here -->
        </div>
        <!-- Billing Detail end here -->
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