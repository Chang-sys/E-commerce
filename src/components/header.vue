<template>
    <div class="h-fit">
        <div class="h-fit bg-[#D9D9D9] flex items-center justify-between border-b-2 border-black">
            <div class="w-[15%] h-[60px] bg-[#80B435] rounded-tr-3xl text-center text-4xl">
                <a href="/" class="pt-2 pr-1.5 text-white font-blenda">Fruito</a>
            </div>

            <div class="w-[100px] h-[60px] flex items-center flex-row mr-7">
                <button><img src="./icons/avatar.png" alt=""></button>
                <button><img src="./icons/add-to-cart.png" alt=""></button>
            </div>
        </div>

        <div class="h-[100px] bg-[#D9D9D9] px-3 pt-3 flex flex-col justify-start relative">
            <div class="w-[35%] h-[40px] flex items-center bg-white rounded-md">
                <input type="search"
                    class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400"
                    placeholder="Type Here To Search">

                <div class="w-[130px] h-[35px] bg-[#949494] m-3 p-1 rounded-lg text-center text-xl">
                    <button type="button"
                        class="w-full flex flex-row transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"><img
                            src="./icons/search.png" class="w-[27px] h-[27px]">&emsp;Search</button>
                </div>
            </div>

            <div class="flex w-4/12 justify-between m-1">
                <a href="/Testimonial"
                    class="hover:text-green-500 hover:duration-300 w-[50px] h-[50px] flex justify-center items-center font-bold">Home</a>
                <a href="/page_shop"
                    class="hover:text-green-500 hover:duration-300 w-[50px] h-[50px] flex justify-center items-center font-bold">Page</a>
                <a href="/page_shop"
                    class="hover:text-green-500 hover:duration-300 w-[50px] h-[50px] flex justify-center items-center font-bold">Shop</a>
                <a
                    class="hover:text-green-500 hover:duration-300 w-[50px] h-[50px] flex justify-center items-center font-bold">Blog</a>
                <a
                    class="hover:text-green-500 hover:duration-300 w-[50px] h-[50px] flex justify-center items-center font-bold">About</a>
                <a
                    class="hover:text-green-500 hover:duration-300 w-[50px] h-[50px] flex justify-center items-center font-bold">Contact</a>
            </div>

            <img src="../img/woman.png" class="w-[600px] h-[580px] absolute right-1 z-10">
        </div>

        <div class="h-[480px] bg-gradient-to-r from-orange-600 to-orange-300 p-5 relative z-0">
            <div class="w-[60%]">
                <p class="text-6xl text-white font-Roboto font-bold subpixel-antialiased">Natural 100% Organic Market</p>
                <p class="w-[60%] text-2xl text-gray-500 mt-12 font-bold">Tem con pelescitatem ipsa cus autati autem facea est
                    aspeles
                    reiumquo volestis ra dolum
                    dolorepe posi.</p>
                <button
                    class="w-[30%] h-[60px] bg-emerald-600 hover:bg-emerald-400 text-white font-bold text-xl py-2 px-4 mt-24 border-b-4 border-black hover:border-emerald-500 rounded-lg">
                    SHOP NOW
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>