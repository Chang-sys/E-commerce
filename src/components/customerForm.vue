<script>

export default {
    name: "CustomerForm",
    methods: {
        routeToShipping() { 
            this.$router.push({ name: "shipping" });
        },
    }
}

</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">CUSTOMER INFORMATION</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3"><a :href="'/'"
                    class="no-underline hover:text-[#80B435]">HOME</a><span>/CUSTOMER INFOMATION</span></h3>
        </div>
    </div>

    <div class="m-10 border border-gray-200 rounded-lg p-6">
        <!-- Customer Information start here -->
        <p class="text-4xl font-bold text-customGreen mt-12 mb-12">Customer Information</p>
        <div class="flex flex-wrap gap-5 mt-3">
            <!-- Left content start here -->
            <div class="w-[60%] flex flex-col gap-x-3">
                <form>
                    <div class="grid md:grid-cols-2 md:gap-6 placeholder:font-bold">
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[32px] h-[32px]" src="../assets/img/account.png" alt="AccountImage">
                            <input v-model="firstName" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="First Name" required />
                        </div>
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[32px] h-[32px]" src="../assets/img/account.png" alt="AccountImage">
                            <input v-model="lastName" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold  text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="Last Name" required />
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6 placeholder:font-bold">
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[32px] h-[32px]" src="../assets/img/send.png" alt="EmailImage">
                            <input v-model="email" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="Email" required />
                        </div>
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[32px] h-[32px]" src="../assets/img/telephone.png" alt="">
                            <input v-model="phone" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold  text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="Phone" required />
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6 placeholder:font-bold">
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[30px] h-[30px]" src="../assets/img/google-maps.png" alt="googleMap">
                            <input v-model="street" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="Street" required />
                        </div>
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[30px] h-[30px]" src="../assets/img/google-maps.png" alt="googleMap">
                            <input v-model="home" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold  text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="Home/Apt number" required />
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6 placeholder:font-bold">
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[30px] h-[30px]" src="../assets/img/google-maps.png" alt="googleMap">
                            <input v-model="province_city" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="Province/City" required />
                        </div>
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <img class="w-[30px] h-[30px]" src="../assets/img/google-maps.png" alt="googleMap">
                            <input v-model="postCode" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold  text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="Post Code" required />
                        </div>
                    </div>

                    <div
                        class="flex flex-row gap-3 bg-LightGray mb-6 rounded-xl p-3 pl-3.5 hover:border-2 hover:border-black">
                        <img class="w-[30px] h-[30px]" src="../assets/img/google-maps.png" alt="googleMap">
                        <select v-model="country" id="country-select"
                            class="w-full pr-8 leading-tight text-base indent-2.5 text-semibold text-Gray_100 bg-LightGray border-none dark:text-black">
                            <option value="" disabled selected>Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="China">China</option>
                            <option value="East Timor">East Timor</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Israel">Israel</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="North Korea">North Korea</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Syria">Syria</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Yemen">Yemen</option>
                        </select>
                    </div>
                </form>
            </div>
            <!-- Left content end here -->

            <!-- Right content start here -->
            <div class="w-[38%] border border-black rounded-lg p-8 flex flex-col justify-center mb-3">
                <p class="text-3xl font-medium mb-6">Summary (<span>4</span> items)</p>
                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between items-center mt-6 text-2xl font-normal">
                    <div class="flex flex-col text-2xl font-medium">
                        <p>BlackGrape</p>
                        <p class="text-[#319B77] mt-3">$ <span>15.00</span></p>
                    </div>
                    <div class="w-[64px] h-[65px] bg-LightGray border rounded-2xl flex items-center justify-center">
                        <p class="text-Gray_100"> 1 </p>
                    </div>
                </div>

                <!-- line -->
                <div class="w-full h-[3px] bg-gray-200 mt-9 mb-8"></div>

                <div class="flex justify-center items-center text-center justify-between font-bold text-5xl">
                    <p class="">Total :</p>
                    <p class="text-[#319B77]"> $ 65.00</p>
                </div>

                <div class="flex justify-center items-center text-center mt-3">
                    <button @click="routeToShipping"
                        class="mt-10 w-fit px-8 h-[56px] bg-customGreen border rounded-xl text-2xl font-bold text-white hover:bg-orange-500">Continue
                        to Shipping Method</button>
                </div>
            </div>
            <!-- Right content end here -->
        </div>
        <!-- Customer Information end here -->
    </div>
</template> 

<style scoped>
.bg-wrapper {
    min-height: 190px;
    background: url('../assets/img/banner.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}

::placeholder {
    font-weight: 700;
    text-indent: 0.5rem;
}
</style>