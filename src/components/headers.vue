<script>

export default {
    name: 'Headers',
}

</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="ml-[200px] flex gap-[100px] items-center text-xl font bold text-center">
            <a :href="'/'" class="no-underline">Home</a>
            <a :href="'#'">About</a>
            <a :href="'/page_shop'">Page</a>
            <div class="w-[15%] h-[70px] bg-[#80B435] text-center text-5xl">
                <a :href="'/'" class="pt-2 pr-1.5 text-white font-blenda">Fruito</a>
            </div>
            <a :href="'/page_shop'">Shop</a>
            <a :href="'#'">Contact</a>

            <div class="flex items-center gap[20px]">
                <button class="w-[56px] h-[56px]"><img src="../img/findIcon.png" alt=""></button>
                <button class="w-[56px] h-[56px]"><img src="../img/avatar.png" alt=""></button>
                <button class="w-[56px] h-[56px]"><img src="../img/notification.png" alt=""></button>
                <button class="w-[56px] h-[56px]"><img src="../img/add-to-cart.png" alt=""></button>
            </div>
        </div>

        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-6xl font-bold text-orange-600">Fruito <span
                    class="text-6xl font-bold text-black">TESTIMONIAL</span></h1>
            <h3 class="mt-2 text-3xl font-medium">HOME<span>/TESTIMONIAL</span></h3>
        </div>
    </div>
    
</template>

<style>
.bg-wrapper {
    min-height: 190px;
    background: url('../img/banner.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
