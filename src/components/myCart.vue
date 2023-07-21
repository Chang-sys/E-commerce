<script>
export default {
    name: "MyCart",
    methods: {
        routeToCheckout() {
            this.$router.push({ name: "customer-info" });
        },
    },
}

</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">SHOPPING CART</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3">HOME<span>/SHOPPING CART</span></h3>
        </div>
    </div>

    <div class="m-10 border border-gray-200 rounded-lg p-6">
        <!-- My cart start here -->
        <p class="text-4xl font-bold text-customGreen mb-6">My Cart</p>
        <div class="flex flex-wrap gap-5 mt-3">
            <!-- Left content start here -->
            <div class="w-[65%] flex flex-col gap-y-3">
                <div class="flex flex-wrap p-1 gap-3 border border-b-Gray_100 rounded-xl items-center justify-between">
                    <div class="flex flex-wrap justify-center items-center">
                        <!-- image -->
                        <div class="w-[158px] h-[158px]"><img src="../assets/img/grape.png" alt=""></div>
                        <div class="flex flex-col">
                            <p class="text-3xl font-bold ml-3">BlackGrape</p>
                            <p class="text-3xl font-semibold text-[#319B77] ml-3 mt-1">$ <span>15.00</span></p>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center items-center">
                        <div
                            class="ml-[230px] bg-customGray border rounded-xl gap-x-6 flex flex-wrap w-[128px] h-[50px] text-Gray_100 justify-center items-center text-center">
                            <button class="text-3xl"> - </button>
                            <p class="text-2xl"> 1 </p>
                            <button class="text-3xl"> + </button>
                        </div>
                        <div class="p-3 mr-3 w-[48px] h-[48px] bg-customGray ml-2 border rounded-xl">
                            <button><img src="../assets/img/delete-icon.png" alt="delete-imag"></button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap p-1 gap-3 border border-b-Gray_100 rounded-xl items-center justify-between">
                    <div class="flex flex-wrap justify-center items-center">
                        <!-- image -->
                        <div class="w-[158px] h-[158px]"><img src="../assets/img/banana.png" alt=""></div>
                        <div class="flex flex-col">
                            <p class="text-3xl font-bold ml-3">BlackGrape</p>
                            <p class="text-3xl font-semibold text-[#319B77] ml-3 mt-1">$ <span>15.00</span></p>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center items-center">
                        <div
                            class="ml-[230px] bg-customGray border rounded-xl gap-x-6 flex flex-wrap w-[128px] h-[50px] text-Gray_100 justify-center items-center text-center">
                            <button class="text-3xl"> - </button>
                            <p class="text-2xl"> 1 </p>
                            <button class="text-3xl"> + </button>
                        </div>
                        <div class="p-3 mr-3 w-[48px] h-[48px] bg-customGray ml-2 border rounded-xl">
                            <button><img src="../assets/img/delete-icon.png" alt="delete-imag"></button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap p-1 gap-3 border border-b-Gray_100 rounded-xl items-center justify-between">
                    <div class="flex flex-wrap justify-center items-center">
                        <!-- image -->
                        <div class="w-[158px] h-[158px]"><img src="../assets/img/kiwi.png" alt=""></div>
                        <div class="flex flex-col">
                            <p class="text-3xl font-bold ml-3">BlackGrape</p>
                            <p class="text-3xl font-semibold text-[#319B77] ml-3 mt-1">$ <span>15.00</span></p>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center items-center">
                        <div
                            class="ml-[230px] bg-customGray border rounded-xl gap-x-6 flex flex-wrap w-[128px] h-[50px] text-Gray_100 justify-center items-center text-center">
                            <button class="text-3xl"> - </button>
                            <p class="text-2xl"> 1 </p>
                            <button class="text-3xl"> + </button>
                        </div>
                        <div class="p-3 mr-3 w-[48px] h-[48px] bg-customGray ml-2 border rounded-xl">
                            <button><img src="../assets/img/delete-icon.png" alt="delete-imag"></button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap p-1 gap-3 border border-b-Gray_100 rounded-xl items-center justify-between">
                    <div class="flex flex-wrap justify-center items-center">
                        <!-- image -->
                        <div class="w-[158px] h-[158px]"><img src="../assets/img/apple.png" alt=""></div>
                        <div class="flex flex-col">
                            <p class="text-3xl font-bold ml-3">BlackGrape</p>
                            <p class="text-3xl font-semibold text-[#319B77] ml-3 mt-1">$ <span>15.00</span></p>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center items-center">
                        <div
                            class="ml-[230px] bg-customGray border rounded-xl gap-x-6 flex flex-wrap w-[128px] h-[50px] text-Gray_100 justify-center items-center text-center">
                            <button class="text-3xl"> - </button>
                            <p class="text-2xl"> 1 </p>
                            <button class="text-3xl"> + </button>
                        </div>
                        <div class="p-3 mr-3 w-[48px] h-[48px] bg-customGray ml-2 border rounded-xl">
                            <button><img src="../assets/img/delete-icon.png" alt="delete-imag"></button>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Left content end here -->

            <!-- Right content start here -->
            <div class="w-[33.5%] border border-black rounded-lg p-8 flex flex-col justify-center">
                <p class="text-3xl indent-1.5 font-medium mb-2">Summary (<span>4</span> items)</p>
                <div class="flex flex-wrap justify-between items-start mt-16 text-2xl font-normal">
                    <p>Subtotal : </p>
                    <p>$ <span>65.00</span></p>
                </div>
                <div class="flex flex-wrap justify-between mt-16 text-2xl font-normal">
                    <p>Shipping : </p>
                    <p>$ <span>0.00</span></p>
                </div>
                <div class="flex flex-wrap justify-between mt-16 text-xl font-normal">
                    <p>Est.tax : </p>
                    <p>$ <span>0.00</span></p>
                </div>

                <div class="flex justify-center items-center text-center mt-16 justify-between font-bold text-5xl">
                    <p class="">Total :</p>
                    <p class="text-[#319B77]"> $ 65.00</p>
                </div>

                <div class="flex justify-center items-center text-center indent-[30%] mt-12">
                    <button @click="routeToCheckout"
                        class="mt-10 w-[300px] h-[56px] bg-customGreen border rounded-xl text-2xl font-bold text-white hover:bg-orange-500">CheckOut</button>
                </div>
            </div>
            <!-- Right content end here -->
        </div>
        <!-- My cart end here -->
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