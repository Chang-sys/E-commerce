<script setup>
import orange from '../assets/img/orange_.png';
import baba from '../assets/img/baba.png';
import kiwi from '../assets/img/kiwi.png';
import grape from '../assets/img/grape.png';
import banana from '../assets/img/banana.png';
import pipeApple from '../assets/img/pipeAplle.png';
import berry from '../assets/img/berry.png';

</script>

<script>
export default {
    name: 'sellItem',
    data() {
        return {
            images: [
                orange,
                baba,
                kiwi,
                grape,
                banana,
                pipeApple,
                berry
            ],
            currentIndex: 0,
            counter: 0,
            popUpCart: false,
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        increment() {
            this.counter++;
            console.log(this.counter);
        },
        decrement() {
            if (this.counter > 0) {
                this.counter--;
                console.log(this.counter);
            }
        },
        showImage(index) {
            this.currentImage = this.images[index];
        },
        showNextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.showImage(this.currentIndex);
        },
        showPreviousImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.showImage(this.currentIndex);
        },
        toggleCart() {
            this.popUpCart = !this.popUpCart;
        },
        closeCart(event) {
            // Check if the click occurred outside the popup element
            if (!this.$el.contains(event.target)) {
                this.popUpCart = false;
            }
        },

    },
    mounted() {
        this.showImage(this.currentIndex);
    },
};
</script>

<template>
    <!-- My popup cart -->
    <div v-if="popUpCart" @click="closeCart" class="w-[400px] relative bg-white">
        <div class="left-[1090px] bg-white border border-balck rounded-2xl flex flex-col absolute w-full h-fit p-3">
            <p class="text-xl font-bold">Item Added To Cart</p>
            <div class="w-full h-[2px] bg-black mt-1"></div>

            <div class="flex flex-col bg-gray-200 w-full mt-2 p-2 rounded-lg font-medium">
                <p>Avocado</p>
                <p>Qty: <span>1</span> - $ <span>15.00</span></p>
            </div>

            <div class="flex flex-row mt-8 font-medium text-gray-600 text-lg text-center">
                <button @click="routeToCart" class="w-[50%] h-12 bg-gray-200 hover:bg-customGreen hover:text-white border rounded-l-lg">View
                    Cart</button>
                <button @click="routeToCart"
                    class="w-[50%] h-12 bg-gray-200 hover:bg-customGreen hover:text-white border rounded-r-lg">Checkout</button>
            </div>
        </div>
    </div>


    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-4xl font-bold text-orange-400 ml-3">Fruito <span
                    class="text-4xl font-bold text-black">SHOP</span></h1>
            <h3 class="mt-2 text-3xl font-medium ml-3">HOME<span>/SHOP</span></h3>
        </div>
    </div>

    <div class="w-full h-fit flex flex-row mt-6 gap-6">
        <!-- left-content start here -->
        <div class="w-[30%] h-fit flex flex-col ml-6">
            <!-- search icon start here-->
            <div class="h-[50px] w-[450px] mb-3 flex items-center bg-white border-2 border-black rounded-lg">
                <input type="search"
                    class="relative m-0 -mr-px block w-[60px] h-10 min-w-0 flex-auto rounded-l px-3 py-1.5 text-base font-normal text-neutral-700 transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400"
                    placeholder="Search Product Here">

                <div class="m-3 p-1 rounded-lg">
                    <button type="button" class="">
                        <img src="../assets/img/find.png" alt="findIcon">
                    </button>
                </div>
            </div>
            <!-- End search icon -->

            <div class="w-full mt-3 flex flex-col">
                <p class="text-4xl font-bold">Product Category</p>
                <div class="flex flex-row justify-between mt-5 pb-3 border-b-2 mt-3 border-gray-500">
                    <p class="text-[30px] font-semibold text-gray-500">Fresh Fruits</p>
                    <p class="text-[30px] font-semibold text-customGreen">15</p>
                </div>

                <div class="flex flex-row justify-between mt-5 pb-3 border-b-2 mt-3 border-gray-500">
                    <p class="text-[30px] font-semibold text-gray-500">Fresh Vegatables</p>
                    <p class="text-[30px] font-semibold text-customGreen">15</p>
                </div>

                <div class="flex flex-row justify-between mt-5 pb-3 border-b-2 mt-3 border-gray-500">
                    <p class="text-[30px] font-semibold text-gray-500">Dired Fruits</p>
                    <p class="text-[30px] font-semibold text-customGreen">15</p>
                </div>
            </div>

            <div class="flex flex-row mt-8 mb-4 text-center items-center">
                <button class="w-[180px] h-[60px] bg-customGreen border rounded-full">
                    <p class="p-3 text-2xl text-white font-bold hover:underline underline-offset-[6px] decoration-2 ">
                        Decription</p>
                </button>
                <div class="relative">
                    <div class="w-7 h-7 rounded-full bg-Gray absolute top-[-15px] right-[-15px]"></div>
                </div>
                <button class="w-[180px] h-[60px] bg-customGreen border rounded-full">
                    <p class="p-3 text-2xl text-white font-bold  hover:underline underline-offset-4 decoration-2">Review</p>
                </button>
            </div>

            <div class="flex flex-col">
                <p class="text-3xl font-bold text-customGreen mb-5">Product Desciption</p>
                <p class="text-base font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
                    maximus lacus. Duis ut mauris eget
                    justo dictum tempus sed vel tellus. Vestibulum sit amet maximus turpis.</p>
            </div>
        </div>
        <!-- left-content end here -->

        <!-- right content start here -->
        <div class="w-full border border-black mr-4">
            <div class="grid grid-cols-2 gap-4 py-3 pl-3">
                <div class="p-2 w-[410px] h-[410px]"><img src="../assets/img/Avocado.jpg" alt=""></div>
                <div class="flex flex-col h-[400px]">
                    <p class="h-[60px] text-[45px] font-bold">Avocado</p>
                    <p class="text-[35px] text-green-600">$<span>15.00</span></p>
                    <div class="flex flex-row">
                        <img class="w-8" src="../assets/img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../assets/img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../assets/img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../assets/img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../assets/img/star_1_1.png" alt="ratingStar">
                    </div>
                    <p class="w-[350px] text-base font-semibold mt-3 mb-3 ">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                    <hr class="border-gray-300 mb-8">

                    <div class="flex flex-row gap-3 items-center">
                        <div class="flex flex-row p-2 items-center justfy-center border-2 border-black rounded-2xl">
                            <button @click="decrement"><img class="w-[48px] h-[48px]" src="../assets/img/minus.png"
                                    alt="minus-bottn"></button>
                            <p class="text-4xl px-5 font-bold"> {{ counter }} <span
                                    class="text-xl font-thin text-gray-400">kg</span> </p>
                            <!-- <p class="text-4xl px-5 font-bold" v-text="counter"></p> -->
                            <button @click="increment"><img class="w-[48px] h-[48px]" src="../assets/img/add.png"
                                    alt="add-bottn"></button>
                        </div>

                        <div class="px-2 ">
                            <button @click="toggleCart"
                                class="w-36 h-16 p-3 text-xl text-white rounded-3xl bg-customGreen hover:bg-orange-500"
                                type="">ADD
                                CART</button>
                        </div>
                        <button><img class="w-16 h-16" src="../assets/img/like.png" alt="FavoriteImage"></button>
                    </div>

                    <hr class="border-gray-300 mt-8">

                    <p class="text-2xl text-gray-500 mt-6">Category : <span class="text-customGreen font-bold">&emsp;Fresh
                            Fruit</span></p>

                    <p class="text-2xl text-gray-500 mt-3">ID Product : <span
                            class="text-customGreen font-bold">&emsp;UZ234KSD</span></p>

                    <div class="flex flex-row">
                        <p class="text-2xl text-gray-500 mt-3">Share : &emsp;&emsp;&nbsp;</p>
                        <a :href="'https://www.facebook.com/'" target="_blank"><img class="w-[46px] h-[46px]"
                                src="../assets/img/facebook_1.png" alt="facbookLogo"></a>
                        <a :href="'https://twitter.com/i/flow/single_sign_on'" target="_blank" class="mt-2.5"><img
                                class="w-[46px] h-[46px]" src="../assets/img/twitter_1.png" alt="TwitterLogo"></a>
                        <a :href="'https://www.instagram.com/accounts/login/'" target="_blank" class="mt-1"><img
                                class="w-[46px] h-[46px]" src="../assets/img/instagram_1.png" alt="IGLogo"></a>
                    </div>
                </div>
                <div class="flex justify-center gap-3">
                    <button @click="showPreviousImage"><img class="w-[56px] h-[56px]" src="../assets/img/back.png" alt=""></button>
                    <button class="w-[158px] h-[158px] border border-balck p-3">
                        <div class="flex space-x-4">
                            <img :src="currentImage" alt="Image" />
                        </div>
                    </button>
                    <button @click="showNextImage"><img class="w-[48px] h-[48px]" src="../assets/img/next.png" alt=""></button>
                </div>
            </div>
        </div>
        <!-- right content end here -->
    </div>

    <!-- relative product start here -->
    <div class="flex flex-col ml-3 mt-6">
        <!-- title -->
        <p class="text-4xl font-bold mb-6">Relative Product</p>

        <!-- item start here -->
        <div class="ml-[290px] w-[70%] h-fit grid grid-cols-3 gap-6 pl-12 justify-items-center content-center">
            <div class="w-11/12 border-2 border-black p-2 flex flex-col items-center justify-center">
                <img src="../assets/img/waterMelon.png" alt="WaterMelon" class="h-[231px]">
                <h1 class="text-2xl font-bold mb-2">Water Melon</h1>
                <p class="text-lg text-[#808080] font-bold mb-1">Weight: 1 kg</p>
                <p class="text-xl text-[#319B77] font-bold mb-1">$ 20.00</p>

                <div class="w-[70%] h-fit flex flex-row text-center items-center justify-between mb-1">
                    <button @click="decrement"
                        class="w-[26px] h-[28px] text-normal border-2 border-black text-center">-</button>
                    <p class="text-xl font-bold"> {{ counter }} <span class="text-xl font-thin text-gray-400">kg</span></p>
                    <button @click="increment"
                        class="w-[26px] h-[26px] text-normal border-2 border-black text-center">+</button>
                </div>

                <button class="w-full h-fit m-2 bg-[#319B77] flex flex-row text-center items-center p-1 rounded">
                    <img class="ml-3" src="../assets/img/shopping-bag.png">
                    <p class="text-2xl ml-12 text-white font-bold">Add To Cart</p>
                </button>
            </div>

            <div class="w-11/12 border-2 border-black p-2 flex flex-col items-center justify-center">
                <img src="../assets/img/baba.png" alt="WaterMelon" class="h-[231px]">
                <h1 class="text-2xl font-bold mb-2">Baba</h1>
                <p class="text-lg text-[#808080] font-bold mb-1">Weight: 1 kg</p>
                <p class="text-xl text-[#319B77] font-bold mb-1">$ 20.00</p>

                <div class="w-[70%] h-fit flex flex-row text-center items-center justify-between mb-1">
                    <button class="w-[25px] h-[26px] text-normal border-2 border-black text-center">-</button>
                    <p class="text-xl font-bold">0</p>
                    <button class="w-[25px] h-[26px] text-normal border-2 border-black text-center">+</button>
                </div>

                <button class="w-full h-fit m-2 bg-[#319B77] flex flex-row text-center items-center p-1 rounded">
                    <img class="ml-3" src="../assets/img/shopping-bag.png">
                    <p class="text-2xl ml-12 text-white font-bold">Add To Cart</p>
                </button>
            </div>

            <div class="w-11/12 border-2 border-black p-2 flex flex-col items-center justify-center">
                <img src="../assets/img/apple.png" alt="WaterMelon" class="h-[231px] w-[230px]">
                <h1 class="text-2xl font-bold mb-2">Apple</h1>
                <p class="text-lg text-[#808080] font-bold mb-1">Weight: 1 kg</p>
                <p class="text-xl text-[#319B77] font-bold mb-1">$ 20.00</p>

                <div class="w-[70%] h-fit flex flex-row text-center items-center justify-between mb-1">
                    <button class="w-[25px] h-[26px] text-normal border-2 border-black text-center">-</button>
                    <p class="text-xl font-bold">0</p>
                    <button class="w-[25px] h-[26px] text-normal border-2 border-black text-center">+</button>
                </div>

                <button class="w-full h-fit m-2 bg-[#319B77] flex flex-row text-center items-center p-1 rounded">
                    <img class="ml-3" src="../assets/img/shopping-bag.png">
                    <p class="text-2xl ml-12 text-white font-bold">Add To Cart</p>
                </button>
            </div>

        </div>
        <!-- item end here -->
    </div>
    <!-- relative product end here -->
</template>

<style>
.bg-wrapper {
    min-height: 190px;
    background: url('../assets/img/banner.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}
</style>