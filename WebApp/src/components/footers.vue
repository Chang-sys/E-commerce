<script>
export default {
    name: 'Footers',
}
</script>

<template>
    <footer class="w-full flex flex-row gap-10 bg-gray-500 p-6 mt-3">
        <div class="w-4/12 flex flex-col gap-5 font-bold">
            <a :href="'/'" class="w-[200px] h-20 pb-2 text-5xl text-white bg-[#80B435] font-lobster rounded-full text-center pt-3">
                FruiTo
            </a>

            <p class="text-normal font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue quis quam eget efficitur. Vestibulum
                venenatis tortor ipsum, at venenatis tellus aliquet eu. Orci varius natoque penatibus..
            </p>

            <div class="flex flex-row text-lg font-medium">
                <img class="w-[42px] h-[42px]" src="../assets/img/home.png" alt="">
                <p class="mt-2.5 ml-3">Home address</p>
            </div>

            <div class="flex flex-row text-lg font-medium">
                <img class="w-[42px] h-[42px]" src="../assets/img/phone.png" alt="">
                <p class="mt-2.5 ml-3">+0 123343434</p>
            </div>

            <div class="flex flex-row text-lg font-medium">
                <img class="w-[42px] h-[42px]" src="../assets/img/mail.png" alt="">
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
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-8">Vegatables</p>
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-2">Fruit</p>
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-2">All</p>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-3xl text-orange-500 font-bold">My Account</h1>
                    <div class="w-[120px] h-1 bg-orange-500 my-1"></div>
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-8">My Account</p>
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-2">Disscount</p>
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-2">Persion Information</p>
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-8">Order History</p>
                    <p class="text-xl mt-5 hover:underline hover:text-orange-500 hover:underline-offset-2">Wishlist</p>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-3xl text-orange-500 font-bold">Follow Us</h1>
                    <div class="w-[120px] h-1 bg-orange-500 my-1"></div>
                    <a :href="'https://www.facebook.com/'" class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../assets/img/facebook.png" alt="">
                        <p class="mt-3 ml-3 hover:underline hover:text-orange-500 hover:underline-offset-2">Facebook</p>
                    </a>
                    <a :href="'https://www.twitter.com/login'" class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../assets/img/twitter.png" alt="">
                        <p class="mt-3 ml-3 hover:underline hover:text-orange-500 hover:underline-offset-2">Twitter</p>
                    </a>
                    <a :href="'https://www.instagram.com/accounts/login/'" class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../assets/img/instagram.png" alt="">
                        <p class="mt-3 ml-3 hover:underline hover:text-orange-500 hover:underline-offset-8">Instagram</p>
                    </a>
                    <a :href="'https://www.youtube.com/'" class="flex flex-row text-lg font-medium mt-3">
                        <img class="w-[56px] h-[56px]" src="../assets/img/youtube.png" alt="">
                        <p class="mt-3 ml-3 hover:underline hover:text-orange-500 hover:underline-offset-2">Youtube</p>
                    </a>
                </div>

            </div>

        </div>

    </footer>
</template>