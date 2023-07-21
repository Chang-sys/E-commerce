<script>
export default {
    name: 'Myorder',
}
</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">SUCCESSFULL ORDER</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3"><a :href="'/'"
                    class="no-underline hover:text-customGreen">HOME</a><span>/SUCCESSFULL ORDER</span></h3>
        </div>
    </div>


    <div class="flex flex-col gap-6 m-10 border border-gray-200 rounded-lg p-6">
        <div class="flex flex-col justify-center items-center">
            <p class="text-4xl text-customGreen font-bold">Thank You For Shipping</p>
            <p class="text-xl font-medium mt-4">Hi Lola, we received your order and are getting it ready to be shipped</p>
            <p class="text-xl font-medium mt-2"> we will notify you when it's on its way!</p>
        </div>

        <div class="flex flex-col gap-y-3">
            <p class="text-5xl text-customGreen font-bold">My order</p>
            <div class="flex flex-wrap justify-between items-center">
                <p class="text-3xl text-customOrange font-semibold">Order No: <span>1212859836</span></p>
                <p class="text-3xl text-customOrange font-semibold">Order Date: <span>Jan.28,2023</span></p>
            </div>

            <div class="flex flex-wrap p-1 gap-3 mt-6 border border-b-Gray_100 rounded-xl items-center justify-between">
                <div class="flex flex-wrap justify-center items-center">
                    <!-- image -->
                    <div class="w-[158px] h-[158px]"><img src="../assets/img/grape.png" alt=""></div>
                    <div class="flex flex-col">
                        <p class="text-3xl font-bold ml-3">BlackGrape</p>
                        <p class="text-3xl font-semibold text-[#319B77] ml-3 mt-1">$ <span>15.00</span></p>
                    </div>
                </div>
                <div class="w-[64px] h-[65px] mr-20 bg-LightGray border rounded-2xl flex items-center justify-center">
                    <p class="text-black font-bold"> 1 </p>
                </div>
            </div>

            <div class="flex flex-wrap gap-3 p-1 mt-6 border border-b-Gray_100 rounded-xl items-center justify-between">
                <div class="flex flex-wrap justify-center items-center">
                    <!-- image -->
                    <div class="w-[158px] h-[158px]"><img src="../assets/img/banana.png" alt=""></div>
                    <div class="flex flex-col">
                        <p class="text-3xl font-bold ml-3">BlackGrape</p>
                        <p class="text-3xl font-semibold text-[#319B77] ml-3 mt-1">$ <span>15.00</span></p>
                    </div>
                </div>
                <div class="w-[64px] h-[65px] mr-20 bg-LightGray border rounded-2xl flex items-center justify-center">
                    <p class="text-black font-bold"> 1 </p>
                </div>
            </div>

            <div class="flex flex-wrap p-1 gap-3 mt-6 border border-b-Gray_100 rounded-xl items-center justify-between">
                <div class="flex flex-wrap justify-center items-center">
                    <!-- image -->
                    <div class="w-[158px] h-[158px]"><img src="../assets/img/apple.png" alt=""></div>
                    <div class="flex flex-col">
                        <p class="text-3xl font-bold ml-3">BlackGrape</p>
                        <p class="text-3xl font-semibold text-[#319B77] ml-3 mt-1">$ <span>15.00</span></p>
                    </div>
                </div>
                <div class="w-[64px] h-[65px] mr-20 bg-LightGray border rounded-2xl flex items-center justify-center">
                    <p class="text-black font-bold"> 1 </p>
                </div>
            </div>
        </div>

        <!-- line -->
        <div class="w-full h-[3px] bg-transparent border-dashed border-t-2 border-gray-600 mt-9 mb-8"></div>

        <div class="flex flex-wrap gap-3">
            <div class="w-[60%] flex flex-col ">
                <p class="text-5xl text-customGreen font-bold">Payment & Shipping detail</p>
                <div class="w-[71%] flex flex-wrap justify-between mt-10 mr-5">
                    <p class="text-3xl font-semibold">Payment Method</p>
                    <p class="text-3xl font-semibold">Credit card</p>
                </div>
                <div class="w-[71%] flex flex-wrap justify-between mt-3 mr-5">
                    <p class="text-3xl font-semibold">Delivered to</p>
                    <p class="text-3xl font-semibold">Lola Sunday</p>
                </div>
                <div class="w-[71%] flex flex-wrap justify-between mt-3 mr-5">
                    <p class="text-3xl font-semibold">Delivered Address</p>
                    <p class="text-3xl font-semibold">330 St, No-5, PP</p>
                </div>
            </div>

            <div class="w-[36%] flex flex-col bg-customGreen border rounded-[50px] p-8 gap-y-8">
                <div class="flex flex-wrap justify-between items-center">
                    <p class="text-white text-3xl font-semibold">Subtotal</p>
                    <p class="text-white text-3xl font-semibold">$ 65.00</p>
                </div>

                <div class="flex flex-wrap justify-between items-center">
                    <p class="text-white text-3xl font-semibold">Shipping Fees</p>
                    <p class="text-white text-3xl font-semibold">$ 0.00</p>
                </div>

                <div class="flex flex-wrap justify-between items-center">
                    <p class="text-customOrange text-3xl font-medium">Total</p>
                    <p class="text-customOrange text-3xl font-medium">$ 65.00</p>
                </div>

            </div>
        </div>

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