<template>
    <div class="w-full h-fit container m-auto mt-8 grid grid-col-4 gap-2">

        <div class="flex gap-2" v-for="row in productRows" :key="row[0].name">
            <div class="w-full h-fit border-2 border-black p-2 flex flex-col items-center justify-center"
                v-for="product in row" :key="product.name">
                <img :src="product.imgeUrl" alt="" class="h-[231px]">
                <h1 class="text-2xl font-bold mb-2"> {{ product.name }} </h1>
                <p class="text-lg text-[#808080] font-bold mb-1">Weight: {{ product.weight }} kg</p>
                <p class="text-xl text-[#319B77] font-bold mb-1">$ {{ product.price }} </p>

                <div class="w-[70%] h-fit flex flex-row text-center items-center justify-between mb-1">
                    <button @click="decrement"
                        class="w-[25px] h-[26px] text-normal border-2 border-black text-center">-</button>
                    <p class="text-xl font-bold">{{ count }}</p>
                    <button @click="increment"
                        class="w-[25px] h-[26px] text-normal border-2 border-black text-center">+</button>
                </div>

                <button class="w-full h-fit m-2 bg-[#319B77] flex flex-row text-center items-center p-1 rounded">
                    <img src="../img/shopping-bag.png" class="ml-3 mr-[50px]">
                    <p class="text-2xl ml-1 text-white font-bold">Add To Cart</p>
                </button>
            </div>
        </div>

        <!-- Add new item button -->
        <!-- <div class="w-[24.55%] h-[450px] border-2 border-black p-2 flex flex-col items-center justify-center">
            <button class="flex items-center justify-center">
                <img src="../img/add-item.png" alt="">
            </button>
        </div> -->
    </div>

    <div class="w-full h-fit text-center flex flex-col items-center">
        <button class="w-[230px] h-fit mb-5 mt-5 border-2 border-[#FF7700] p-3">
            <p class="text-3xl text-[#FF7700] font-bold hover:text-orange-600">View All</p>
        </button>
    </div>

    <!-- <div class="w-full h-fit border-2 border-black p-2 flex flex-col items-center justify-center">
        <img src="../img/waterMelon.png" alt="WaterMelon" class="h-[231px]">
        <h1 class="text-2xl font-bold mb-2">Water Melon</h1>
        <p class="text-lg text-[#808080] font-bold mb-1">Weight: 1 kg</p>
        <p class="text-xl text-[#319B77] font-bold mb-1">$ 20.00</p>

        <div class="w-[70%] h-fit flex flex-row text-center items-center justify-between mb-1">
            <button class="w-[25px] h-[26px] text-normal border-2 border-black text-center">-</button>
            <p class="text-xl font-bold">0</p>
            <button class="w-[25px] h-[26px] text-normal border-2 border-black text-center">+</button>
        </div>

        <button class="w-full h-fit m-2 bg-[#319B77] flex flex-row text-center items-center p-1 rounded">
            <img src="../img/shopping-bag.png">
            <p class="text-2xl ml-1 text-white font-bold">Add To Cart</p>
        </button>
    </div> -->
</template>

<script>

import { onMounted, computed, ref } from 'vue';
import axios from 'axios';
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    name: 'ShoppingItem',

    setup() {
        const products = ref([]);

        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:3001/');
                products.value = response.data;
            } catch (err) {
                console.error(err);
            }
        });

        const productRows = computed(() => {
            const rows = [];
            for (let i = 0; i < products.value.length; i += 4) {
                rows.push(products.value.slice(i, i + 4));
            }
            return rows;
        });

        return { productRows };
    }
}

</script>