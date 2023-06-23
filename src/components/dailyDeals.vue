<script>
export default {
    name: 'Feature',
}
</script>

<template>
    <!-- Daily deals start here -->
    <div class="w-full flex flex-col text-4xl my-6">
        <div class="text-center font-bold mb-10">
            <h4 class="text-orange-600">Daily <span class="text-black">Deals</span></h4>
        </div>

        <div class="w-full flex">
            <div class="ml-[100px] mr-10">
                <img class="w-[250px] h-[570px]" src="../img/freshBanner.png" alt="">
            </div>

            <!-- Product start here -->
            <div class="w-full grid grid-cols-3 gap-[60px]">

                <!-- item start here -->
                <div class="w-fit text-center flex flex-col">
                    <div class="w-full h-[275px] border border-black mb-6">
                        <img class="w-[300px] h-[250px] hover:shadow-lg shadow-gray-600/40" src="../img/apple.png" alt="">
                        <button class="w-fit mb-2 rounded-full hover:shadow-lg shadow-gray-600/40"><img
                                class="w-[40px] h-[40px]" src="../img/basket.png" alt=""></button>
                    </div>
                    <p class="text-2xl font-bold">Name item</p>
                    <div class="flex flex-row items-center justify-center my-3 gap-[15px]">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                    </div>
                    <div class="w-full flex flex-row items-center justify-center text-2xl gap-[20px] font-bold">
                        <p class="line-through text-center text-emerald-600">$ <span>10.00</span></p>
                        <p class="text-orange-600">$ <span>15.00</span></p>
                    </div>
                </div>

                <div class="w-fit text-center flex flex-col">
                    <div class="w-full h-[275px] border border-black mb-6">
                        <img class="w-[300px] h-[250px] hover:shadow-lg shadow-gray-600/40" src="../img/Avocado.jpg" alt="">
                        <button class="w-fit mb-2 rounded-full hover:shadow-lg shadow-gray-600/40"><img
                                class="w-[40px] h-[40px]" src="../img/basket.png" alt=""></button>
                    </div>
                    <p class="text-2xl font-bold">Name item</p>
                    <div class="flex flex-row items-center justify-center my-3 gap-[15px]">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                    </div>
                    <div class="w-full flex flex-row items-center justify-center text-2xl gap-[20px] font-bold">
                        <p class="line-through text-center text-emerald-600">$ <span>10.00</span></p>
                        <p class="text-orange-600">$ <span>15.00</span></p>
                    </div>
                </div>

                <div class="w-fit text-center flex flex-col">
                    <div class="w-full h-[275px] border border-black mb-6">
                        <img class="w-[300px] h-[250px] hover:shadow-lg shadow-gray-600/40" src="../img/orange_.png" alt="">
                        <button class="w-fit mb-2 rounded-full hover:shadow-lg shadow-gray-600/40"><img
                                class="w-[40px] h-[40px]" src="../img/basket.png" alt=""></button>
                    </div>
                    <p class="text-2xl font-bold">Name item</p>
                    <div class="flex flex-row items-center justify-center my-3 gap-[15px]">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                        <img class="w-[24px] h-[24px]" src="../img/star_1.png" alt="">
                    </div>
                    <div class="w-full flex flex-row items-center justify-center text-2xl gap-[20px] font-bold">
                        <p class="line-through text-center text-emerald-600">$ <span>10.00</span></p>
                        <p class="text-orange-600">$ <span>15.00</span></p>
                    </div>
                </div>

                <div class="w-[306px] h-[100px] flex flex-row">
                    <img class="w-[120px] h-[100px] border border-black hover:shadow-lg shadow-gray-600/40"
                        src="../img/vav.png" alt="">

                    <div class="w-full flex flex-col ml-[20px]">
                        <p class="text-xl font-bold mb-2">Name item</p>
                        <p class="text-base mb-2">Price: <span class="text-orange-600">$ 15.00</span></p>
                        <div class="flex flex-row gap-[10px] gap-3 ml-2">
                            <button class="rounded-full hover:shadow-lg shadow-gray-600/40"><img class="w-[32px] h-[32px]"
                                    src="../img/basket.png" alt=""></button>
                            <button class="rounded-full hover:shadow-lg shadow-gray-600/40"><img class="w-[32px] h-[32px]"
                                    src="../img/heart.png" alt=""></button>
                        </div>
                    </div>
                </div>

                <div class="w-[306px] h-[100px] flex flex-row">
                    <img class="w-[120px] h-[100px] border border-black hover:shadow-lg shadow-gray-600/40"
                        src="../img/carrot.png" alt="">

                    <div class="w-full flex flex-col ml-[20px]">
                        <p class="text-xl font-bold mb-2">Name item</p>
                        <p class="text-base mb-2">Price: <span class="text-orange-600">$ 15.00</span></p>
                        <div class="flex flex-row gap-[10px] gap-3 ml-2">
                            <button class="rounded-full hover:shadow-lg shadow-gray-600/40"><img class="w-[32px] h-[32px]"
                                    src="../img/basket.png" alt=""></button>
                            <button class="rounded-full hover:shadow-lg shadow-gray-600/40"><img class="w-[32px] h-[32px]"
                                    src="../img/heart.png" alt=""></button>
                        </div>
                    </div>
                </div>

                <div class="w-[306px] h-[100px] flex flex-row">
                    <img class="w-[120px] h-[100px] border border-black hover:shadow-lg shadow-gray-600/40"
                        src="../img/cucumber.png" alt="">

                    <div class="w-full flex flex-col ml-[20px]">
                        <p class="text-xl font-bold mb-2">Name item</p>
                        <p class="text-base mb-2">Price: <span class="text-orange-600">$ 15.00</span></p>
                        <div class="flex flex-row gap-[10px] gap-3 ml-2">
                            <button class="rounded-full hover:shadow-lg shadow-gray-600/40"><img class="w-[32px] h-[32px]"
                                    src="../img/basket.png" alt=""></button>
                            <button class="rounded-full hover:shadow-lg shadow-gray-600/40"><img class="w-[32px] h-[32px]"
                                    src="../img/heart.png" alt=""></button>
                        </div>
                    </div>
                </div>
                <!-- item end here -->

            </div>
            <!-- Product end here -->
        </div>
    </div>
    <!-- Daily Deal end here -->
</template>