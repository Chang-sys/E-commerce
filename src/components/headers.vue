<script>

export default {
    name: 'Headers',
}

</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
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
                <button class="w-[40px] h-[40px]"><img src="../img/findIcon.png" alt=""></button>
                <button class="w-[40px] h-[40px]"><img src="../img/avatar.png" alt=""></button>
                <button class="w-[40px] h-[40px]"><img src="../img/notification.png" alt=""></button>
                <button class="w-[40px] h-[40px]"><img src="../img/add-to-cart.png" alt=""></button>
            </div>
        </div>
    </div>
</template>
