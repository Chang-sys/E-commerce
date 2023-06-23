<script>

export default {
    name: 'Headers',
}

</script>

<template>
    <div class="w-full h-fit">
        <div class="ml-[150px] flex gap-[100px] items-center text-xl font bold text-center">
            <a href="http://localhost:5173/" class="no-underline">Home</a>
            <a href="#">About</a>
            <a href="http://localhost:5173/page_shop">Page</a>
            <div class="w-[15%] h-[70px] bg-[#80B435] text-center text-5xl">
                <p class="pt-2 pr-1.5 text-white font-blenda">Fruito</p>
            </div>
            <a href="http://localhost:5173/page_shop">Shop</a>
            <a href="#">Contact</a>

            <div class="flex items-center gap[20px]">
                <button class="w-[64px] h-[64px]"><img src="../img/findIcon.png" alt=""></button>
                <button class="w-[64px] h-[64px]"><img src="../img/avatar.png" alt=""></button>
                <button class="w-[64px] h-[64px]"><img src="../img/notification.png" alt=""></button>
                <button class="w-[64px] h-[64px]"><img src="../img/add-to-cart.png" alt=""></button>
            </div>
        </div>

        <div class="bg-wrapper text-center">
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
