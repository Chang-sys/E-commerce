<script>

export default {
    name: 'Reviewer',
}
</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">TESTIMONIAL</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3"><a :href="'/'" class="no-underline hover:text-[#80B435]">HOME</a><span>/TESTIMONIAL</span></h3>
        </div>
    </div>

    <div class="mt-3 ml-[330px] flex item-center gap-[20px] text-center text-6xl font-bold">
        <img class="w-[56px] h-[56px]" src="../assets/img/star.png" alt="#">
        <img class="w-[56px] h-[56px]" src="../assets/img/star.png" alt="#">
        <img class="w-[56px] h-[56px]" src="../assets/img/star.png" alt="#">
        <h1 class="mx-[20px]">TESTIMONIAL</h1>
        <img class="w-[56px] h-[56px]" src="../assets/img/star.png" alt="#">
        <img class="w-[56px] h-[56px]" src="../assets/img/star.png" alt="#">
        <img class="w-[56px] h-[56px]" src="../assets/img/star.png" alt="#">
    </div>
    <!-- TESTIMONIAL start here -->
    <div class="w-full mt-3 p-3 flex flex-row gap[100px] items-center justify-center">
        <div class="w-[42%] flex flex-row mt-3 p-3 gap-[30px] mr-3">    
            <img src="../assets/img/person.png" alt="#">
            <p class="mt-6"><span class="text-2xl font-bold">"</span>I'm always impressed with Fresh Harvest Produce's
                quality and freshness. Their diverse selection of
                fruits and vegetables is top-notch, and the flavors are incredible. Highly recommend! <span
                    class="text-2xl font-bold">"</span>
            </p>
        </div>
        <div class="w-[42%] flex flex-row mt-3 p-3 gap-[30px] ml-3">
            <img src="../assets/img/girl.png" alt="#">
            <p class="mt-6"><span class="text-2xl font-bold">"</span>Garden Delights Organic Farm offers the best
                organic produce. The taste and quality are outstanding. Picking my own fruits there is a fantastic
                experience. I love supporting their mission!<span class="text-2xl font-bold">"</span>
            </p>
        </div>
    </div>
    <!-- TESTIMONIAL end here -->
</template>

<style>
.bg-wrapper {
    min-height: 190px;
    background: url('../assets/img/banner.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}
</style>