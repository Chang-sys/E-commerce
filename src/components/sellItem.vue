<script>
import orange from '@/img/orange_.png'
import baba from '@/img/baba.png'
import kiwi from '@/img/kiwi.png'
import grape from '@/img/grape.png'
import banana from '@/img/banana.png'
import pipeApple from '@/img/pipeAplle.png'
import berry from '@/img/berry.png'


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
            currentIndex: 0
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        showNextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.showImage(this.currentIndex);
        },
        showPreviousImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.showImage(this.currentIndex);
        }
    },
    mounted() {
        this.showImage(this.currentIndex);
    }
}
</script>

<template>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#80B435" class="h-9 w-9">
                            <path fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
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

        <div class="w-full border border-black mr-4">
            <div class="grid grid-cols-2 gap-4 py-3 pl-3">
                <div class="p-2 w-[410px] h-[410px]"><img src="../img/Avocado.jpg" alt=""></div>
                <div class="flex flex-col h-[400px]">
                    <p class="h-[60px] text-[45px] font-bold">Avocado</p>
                    <p class="text-[35px] text-green-600">$<span>15.00</span></p>
                    <div class="flex flex-row">
                        <img class="w-8" src="../img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../img/star_1.png" alt="ratingStar">
                        <img class="w-8" src="../img/star_1_1.png" alt="ratingStar">
                    </div>
                    <p class="w-[350px] text-base font-semibold mt-3 mb-3 ">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                    <hr class="border-gray-300 mb-8">

                    <div class="flex flex-row gap-3 items-center">
                        <div class="flex flex-row p-2 items-center justfy-center border-2 border-black rounded-2xl">
                            <img class="w-[48px] h-[48px]" src="../img/minus.png" alt="minus-bottn">
                            <p class="text-4xl px-5 font-bold">1</p>
                            <img class="w-[48px] h-[48px]" src="../img/add.png" alt="add-bottn">
                        </div>

                        <div class="px-2 ">
                            <button class="w-36 h-16 p-3 text-xl text-white rounded-3xl bg-customGreen" type="">ADD
                                CART</button>
                        </div>
                        <img class="w-16 h-16" src="../img/like.png" alt="">
                    </div>

                    <hr class="border-gray-300 mt-8">

                    <p class="text-2xl text-gray-500 mt-6">Category : <span class="text-customGreen font-bold">&emsp;Fresh
                            Fruit</span></p>

                    <p class="text-2xl text-gray-500 mt-3">ID Product : <span
                            class="text-customGreen font-bold">&emsp;UZ234KSD</span></p>

                    <div class="flex flex-row">
                        <p class="text-2xl text-gray-500 mt-3">Share : &emsp;&emsp;&nbsp;</p>
                        <a :href="'https://www.facebook.com/'" target="_blank"><img class="w-[46px] h-[46px]"
                                src="../img/facebook_1.png" alt="facbookLogo"></a>
                        <a :href="'https://twitter.com/i/flow/single_sign_on'" target="_blank" class="mt-2.5"><img
                                class="w-[46px] h-[46px]" src="../img/twitter_1.png" alt="TwitterLogo"></a>
                        <a :href="'https://www.instagram.com/accounts/login/'" target="_blank" class="mt-1"><img
                                class="w-[46px] h-[46px]" src="../img/instagram_1.png" alt="IGLogo"></a>
                    </div>
                </div>
                <div class="flex justify-center gap-3">
                    <button @click="showPreviousImage"><img class="w-[56px] h-[56px]" src="../img/back.png" alt=""></button>
                    <!-- <div ref="imageContainer" class="flex space-x-4"></div>] -->
                    <button class="w-[158px] h-[158px] border border-balck p-3">
                        <div class="flex space-x-4">
                            <img :src="currentImage" alt="Image" />
                        </div>
                    </button>
                    <button @click="showNextImage"><img class="w-[48px] h-[48px]" src="../img/next.png" alt=""></button>
                </div>
            </div>
        </div>
    </div>
</template>