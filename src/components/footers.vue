<script>
export default {
    name: 'Footers',
}
</script>

<template>
    <footer class="w-full flex flex-row gap-10 bg-gray-500 p-6 mt-3">
        <div class="w-4/12 flex flex-col gap-5 font-bold">
            <a :href="'/'" class="w-[200px] h-20 pb-2 text-5xl text-white bg-green-500 rounded-full text-center pt-3">
                Fruito
            </a>

            <p class="text-normal font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue quis quam eget efficitur. Vestibulum
                venenatis tortor ipsum, at venenatis tellus aliquet eu. Orci varius natoque penatibus..
            </p>

            <div class="flex flex-row text-lg font-medium">
                <img class="w-[42px] h-[42px]" src="../img/home.png" alt="">
                <p class="mt-2.5 ml-3">Home address</p>
            </div>

            <div class="flex flex-row text-lg font-medium">
                <img class="w-[42px] h-[42px]" src="../img/phone.png" alt="">
                <p class="mt-2.5 ml-3">+0 123343434</p>
            </div>

            <div class="flex flex-row text-lg font-medium">
                <img class="w-[42px] h-[42px]" src="../img/mail.png" alt="">
                <p class="mt-2.5 ml-3">somone@lala.com</p>
            </div>
        </div>

        <div class="w-full flex flex-col items-start justify-start">

            <div class="flex gap-10 mb-6 ml-16">
                <h1 class="text-5xl font-bold text-orange-500">NEWSLETTER</h1>
                <div class="w-[600px] h-[60px] flex">
                    <form class="flex">
                        <input type="email" placeholder="Email"
                            class="w-[400px] h-[60px] px-4 py-2 bg-gray-500 text-black border border-black rounded-l-full focus:outline-none focus:ring focus:border-blue-500" />
                    </form>
                    <button type="submit"
                        class="w-[200px] h-[60px] px-4 py-2 bg-emerald-400 text-white font-bold rounded-r-md hover:bg-orange-500">SUBSCRIBE
                        NOW</button>
                </div>
            </div>

            <div class="flex flex-row gap-56 font-medium">
                <div class="flex flex-col">
                    <h1 class="text-3xl text-orange-500 font-bold">CATEGORIES</h1>
                    <div class="w-[120px] h-1 bg-orange-500 my-1"></div>
                    <p class="text-xl mt-5">Vegatables</p>
                    <p class="text-xl mt-5">Fruit</p>
                    <p class="text-xl mt-5">All</p>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-3xl text-orange-500 font-bold">My Account</h1>
                    <div class="w-[120px] h-1 bg-orange-500 my-1"></div>
                    <p class="text-xl mt-5">My Account</p>
                    <p class="text-xl mt-5">Disscount</p>
                    <p class="text-xl mt-5">Persion Information</p>
                    <p class="text-xl mt-5">Order History</p>
                    <p class="text-xl mt-5">Wishlist</p>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-3xl text-orange-500 font-bold">Follow Us</h1>
                    <div class="w-[120px] h-1 bg-orange-500 my-1"></div>
                    <div class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../img/facebook.png" alt="">
                        <p class="mt-3 ml-3">Facebook</p>
                    </div>
                    <div class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../img/twitter.png" alt="">
                        <p class="mt-3 ml-3">Twitter</p>
                    </div>
                    <div class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../img/instagram.png" alt="">
                        <p class="mt-3 ml-3">Instagram</p>
                    </div>
                    <div class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../img/youtube.png" alt="">
                        <p class="mt-3 ml-3">Youtube</p>
                    </div>
                </div>

            </div>

        </div>

    </footer>
</template>