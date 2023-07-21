<script>

export default {
    name: 'Headers',
    data() {
        return {
            popUpCart: false,
        };
    },
    methods: {
        toggleCart() {
            this.popUpCart = !this.popUpCart;
        },
        closeCart(event) {
            // Check if the click occurred outside the popup element
            if (!this.$el.contains(event.target)) {
                this.popUpCart = false;
            }
        },
        routeToCheckout() {
            this.$router.push({ name: "customer-info" });
        },
        routeToCart() {
            this.$router.push({ name: "cart" });
        }
    },
}

</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center sticky top-0 border border-b-Gray_100 z-0">
        <div class="ml-[200px] flex gap-[100px] items-center text-xl font-bold text-center">
            <a :href="'/'" class="no-underline hover:text-[#80B435]">Home</a>
            <a :href="'/aboutus'" class="hover:text-[#80B435]">About</a>
            <a :href="'/page_shop'" class="hover:text-[#80B435]">Page</a>
            <div class="w-[17%] pt-1.5 px-3.5 h-[70px] bg-[#80B435] text-center text-5xl">
                <a :href="'/'" class="text-white font-lobster font-bold">FruiTo</a>
            </div>
            <a :href="'/page_shop'" class="hover:text-[#80B435]">Shop</a>
            <a :href="'#'" class="hover:text-[#80B435]">Contact</a>

            <div class="flex items-center gap-[10px]">
                <button class="w-[40px] h-[40px]"><img src="../assets/img/findIcon.png" alt=""></button>
                <button class="w-[40px] h-[40px]"><img src="../assets/img/avatar.png" alt=""></button>
                <button class="w-[40px] h-[40px]"><img src="../assets/img/notification.png" alt=""></button>
                <button @click="toggleCart" class="w-[40px] h-[40px]"><img src="../assets/img/add-to-cart.png" alt="cartShopping"></button>
            </div>
        </div>
    </div>

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
                <button @click="routeToCheckout"
                    class="w-[50%] h-12 bg-gray-200 hover:bg-customGreen hover:text-white border rounded-r-lg">Checkout</button>
            </div>
        </div>
    </div>
</template>
