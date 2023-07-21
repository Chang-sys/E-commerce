<template>
    <div class="h-fit border-black border-b-2 border-dashed flex items-center justify-center my-5">

        <div class="w-[70%] h-[550px] container m-auto grid grid-cols-2 mb-8">

            <!-- FEATURE_1 -->
            <div
                class="w-[90%] h-[200px] bg-[#F3F0F8] ml-8 border-2 border-purple-200 rounded-tl-[120px] flex flex-row itemsi-center justify-between">
                <div class="w-[70%] ml-[100px] mt-3">
                    <hr class="w-[40%] h-[5px] bg-[#D9D9D9]">
                    <p class="text-bold">Fruit Collections</p>
                    <button class=" my-6 text-2xl text-[#F78600] text-bold hover:text-orange-600">Shop it now</button>
                </div>

                <div class="w-fit h-fit">
                    <img src="../assets/img/grape.png" class="w-[350px] h-[220px]">
                </div>
            </div>

            <!-- FEATURE_2 -->
            <div
                class="w-[90%] h-[250px] bg-[#FAEBEB] mt-6 border-2 border-pink-200 rounded-tr-[120px] flex flex-row itemsi-center justify-between">
                <div class="w-[70%] ml-3 mt-3">
                    <hr class="w-[30%] h-[5px] bg-[#D9D9D9]">
                    <p class="text-bold">Fruit Collections</p>
                    <button class=" my-6 text-2xl text-[#F78600] text-bold hover:text-orange-600">Shop it now</button>
                </div>

                <div class="w-fit h-fit mr-12">
                    <img src="../assets/img/orange.png" class="w-[250px] h-[250px]">
                </div>
            </div>

            <!-- FEATURE_3 -->
            <div
                class="top-[900px] left-[215px] w-[30%] h-[220px] bg-[#FBF9C9] mb-3 border-2 border-Amber-200 rounded-bl-[120px] flex flex-row itemsi-center justify-between absolute">
                <div class="ml-6 mt-3">
                    <hr class="w-[50%] h-[5px] bg-[#D9D9D9]">
                    <p class="text-bold">Fruit Collections</p>
                    <button class=" my-6 text-2xl text-[#F78600] text-bold hover:text-orange-600">Shop it now</button>
                </div>

                <div class="w-fit h-fit mr-12">
                    <img src="../assets/img/berry.png" class="w-[220px] h-[220px]">
                </div>
            </div>
            
            <!-- FEATURE_4 -->
            <div
                class="top-[950px] left-[695px] w-[32%] h-[250px] bg-[#F8EFDE] mt-5 border-2 border-Orange-200 rounded-br-[120px] flex flex-row itemsi-center justify-between absolute">
                <div class="w-fit h-fit">
                    <img src="../assets/img/chilliPapper.png" class="w-[400px] h-[230px]">
                </div>
                
                <div class="w-[70%] ml-3 mt-28">
                    <hr class="w-[36%] h-[5px] bg-[#D9D9D9]">
                    <p class="text-bold">Fruit Collections</p>
                    <button class=" my-6 text-2xl text-[#F78600] text-bold hover:text-orange-600">Shop it now</button>
                </div>
            </div>

        </div>
        
    </div>

    <div class="w-full h-fit text-center flex flex-col items-center">
        <p class="text-6xl font-bold mb-8"><span class="text-[#319B77]">Buy</span> Organic Product</p>
        
        <div class="w-[35%] flex items-center justify-between h-fit text-4xl font-bold mb-4">
            <button class="hover:text-green-600">All</button>
            <button class="hover:text-green-600">Fruits</button>
            <button class="hover:text-green-600">Vegatables</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'feature'
}

</script>