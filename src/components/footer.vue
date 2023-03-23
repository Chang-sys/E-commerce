<template>
    <div class="h-fit border-t-2 mt-3 border-black flex flex-row">

        <div class="w-[20%] h-fit p-4 flex flex-col justify-between">
            <div class="w-[70%] h-[40px] bg-[#80B435] rounded-full text-center text-xl ">
                <button class="pt-1 pr-0.5 text-white">Fruito</button>
            </div>
            <p class="w-[90%] p-1 text-gray-500">We are one of the best & quality full in market. Let's join.</p>

            <div class="w-[90%] h-fit flex flex-col p-1 text-center text-gray-500">
                <div class="flex flex-row m-1">
                    <img src="../components/icons/homeAddress.png" class="w-[32px] h-[32px]">
                    <p class="text-sm pt-1.5 pl-6">Home address</p>
                </div>

                <div class="flex flex-row m-1">
                    <img src="../components/icons/call.png" class="w-[32px] h-[32px]">
                    <p class="text-sm pt-1.5 pl-6">+0 123 456 789</p>
                </div>

                <div class="flex flex-row m-1">
                    <img src="../components/icons/mail.png" class="w-[32px] h-[32px]">
                    <p class="text-sm pt-1.5 pl-6">somone@lala.com</p>
                </div>
            </div>
        </div>

        <div class="w-[20%] h-fit p-4 flex flex-col">
            <h2 class="text-2xl ">Services</h2>
            <div class="text-lg text-gray-500 mt-3 flex flex-col gap-2">
                <p>My Account</p>
                <p>Tracking Order</p>
                <p>Customer Services</p>
                <p>Compare</p>
                <p>Privacy Policy</p>
            </div>
        </div>

        <div class="w-[20%] h-fit p-4 flex flex-col">
            <h2 class="text-2xl ">Information</h2>
            <div class="text-lg text-gray-500 mt-3 flex flex-col gap-2">
                <p>Home</p>
                <p>About Us</p>
                <p>FAQs</p>
                <p>Shop Detail</p>
                <p>Blog</p>
            </div>
        </div>

        <div class="w-[20%] h-fit p-4 flex flex-col">
            <h2 class="text-2xl ">Help</h2>
            <div class="text-lg text-gray-500 mt-3 flex flex-col gap-2">
                <p>Delivery & Returns</p>
                <p>Payment</p>
                <p>E-Receipts</p>
            </div>
        </div>

        <div class="w-[20%] h-fit p-4 flex flex-col">
            <h2 class="text-2xl ">Follow Us</h2>
            <p class="w-[90%] text-gray-500">We are one of the best & quality full in market. Let's join.</p>

            <div class="h-[40px] flex items-center bg-white mt-6">
                <input type="search"
                    class="relative m-0 -mr-px block w-[1%] h-[40px] min-w-0 flex-auto rounded-l px-3 py-1.5 text-base font-normal border-2 border-orange-500 text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-orange-500 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-orange-600 dark:text-neutral-200 dark:placeholder:text-neutral-400"
                    placeholder="Email">

                <div class="w-[30%] h-[40px] bg-[#F78600] border-2 border-orange-500 text-center text-xl flex items-center justify-center">
                    <button type="button"
                        class="w-full flex items-center justify-center transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"><img
                            src="./icons/sent.png" class="w-[27px] h-[27px]"></button>
                </div>
            </div>
        </div>

    </div>

    <div class="flex flex-row h-fit items-center bg-[#D9D9D9]">
        
        <div class="w-[50%] h-fit flex flex-row items-center ml-2 justify-start">
            <img src="../img/paypal.png" class="w-[64px] h-[40px] m-1">
            <img src="../img/visa.png" class="w-[64px] h-[55px] m-1">
            <img src="../img/mastercard.png" class="w-[64px] h-[38px] m-1">
        </div>

        <div class="w-[50%] h-fit flex flex-row items-center mr-3 justify-end">
            <img src="../img/facebook.png">
            <img src="../img/twitter.png">
            <img src="../img/youtube.png">
            <img src="../img/instagram.png">
            </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>