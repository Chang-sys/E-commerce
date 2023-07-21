<script>
export default {
    name: 'Aboutus',
}
</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">ABOUT US</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3"><a :href="'/'" class="no-underline hover:text-[#80B435]">HOME</a><span>/ABOUT US</span></h3>
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