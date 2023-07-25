<script>
export default {
    name: 'PaymentForm',
    data() {
        return {
            date: '',
            cvc: '',
            showInput: false,
            couponCode: "",
            storedCoupon: "",
        };
    },
    methods: {
        validatecvc() {
            // Remove non-digit characters from the input
            const sanitizedInput = this.cvc.replace(/\D/g, '');

            // Restrict input to maximum 3 digits
            this.cvc = sanitizedInput.substring(0, 3);
        },
        routeToInvoice() {
            this.$router.push({ name: "invoice" });
        },
        formatDate() {
            // Remove non-digit characters from the input
            const sanitizedInput = this.date.replace(/\D/g, '');

            // Extract month and year
            const month = sanitizedInput.substring(0, 2);
            const year = sanitizedInput.substring(2, 4);

            // Concatenate the formatted date
            this.date = `${month}/${year}`;
        },
        addCoupon() {
            // Store the coupon code
            this.storedCoupon = this.couponCode;
            this.couponCode = ""; // Reset the input field
            this.showInput = false;
        },
    },
    async mounted() { },
}
</script>

<template>
    <div class="w-full h-fit flex flex-col justify-center items-center">
        <div class="w-full bg-wrapper text-center">
            <h1 class="pt-3 text-5xl font-lobster font-bold text-orange-400">Fruito<span
                    class="ml-6 text-4xl font-sans font-bold text-gray-500">PAYMENT</span></h1>
            <h3 class="mt-2 text-3xl text-gray-500 font-medium ml-3"><a :href="'/'"
                    class="no-underline hover:text-[#80B435]">HOME</a><span>/PAYMENT</span></h3>
        </div>
    </div>

    <div class="m-10 border border-gray-200 rounded-lg p-6">
        <!-- Billing Detail start here -->
        <p class="text-4xl font-bold text-customGreen mb-3">Billing details</p>
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

                    <div
                        class="flex flex-row gap-3 bg-LightGray mb-6 rounded-xl p-3 pl-3.5 hover:border-2 hover:border-black">
                        <img class="w-[32px] h-[32px]" src="../assets/img/send.png" alt="EmailImage">
                        <input v-model="email" type="text"
                            class="w-full text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Email" required />
                    </div>

                    <div
                        class="flex flex-row gap-3 bg-LightGray mb-6 rounded-xl p-3 pl-3.5 hover:border-2 hover:border-black">
                        <img class="w-[32px] h-[32px]" src="../assets/img/location.png" alt="LocationImage">
                        <input v-model="address" type="text"
                            class="w-full text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Address" required />
                    </div>

                    <div class="grid md:grid-cols-3 md:gap-6 placeholder:font-bold">
                        <div
                            class="w-full flex flex-row gap-3 bg-LightGray mb-6 rounded-xl p-3 pl-3.5 hover:border-2 hover:border-black">
                            <img class="w-[30px] h-[30px]" src="../assets/img/google-maps.png" alt="googleMap">
                            <select v-model="country" id="country-select"
                                class="w-full pr-7 leading-tight text-base indent-2.5 text-semibold text-Gray_100 bg-LightGray border-none dark:text-black">
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
                </form>

                <!-- Payment Method Form start here -->
                <p class="text-4xl font-bold text-customGreen mb-5">Payment Methods</p>
                <form>

                    <div
                        class="flex flex-wrap gap-3 bg-LightGray mb-6 rounded-xl p-3 pl-3.5 hover:border-2 hover:border-black justify-between     items-center text-center">

                        <div class="flex items-center">
                            <input type="radio" name="payment_method" id="credit_card" value="credit_card"
                                class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                            <label for="credit_card" class="text-Gray_100 text-base font-semibold ml-3.5">Credit
                                Card</label>
                        </div>

                        <div class="flex flex-wrap gap-x-8">
                            <img class="w-[64px] h-[40px]" src="../assets/img/paypal.png" alt="paypalImage">
                            <img class="w-[64px] h-[40px]" src="../assets/img/visa.png" alt="visaImage">
                            <img class="w-[64px] h-[40px]" src="../assets/img/mastercard.png" alt="mastercardImage">
                        </div>
                    </div>

                    <div
                        class="flex flex-row gap-3 bg-LightGray mb-6 rounded-xl p-3 pl-3.5 hover:border-2 hover:border-black">
                        <img class="w-[32px] h-[32px]" src="../assets/img/number-blocks.png" alt="blockNumberImage">
                        <input v-model="address" type="text"
                            class="w-full text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Card Number" required />
                    </div>

                    <div class="flex flex-wrap justify-between items-center mt-6 mb-3">
                        <label for="date" class="text-xl font-bold ">Expire date</label>
                        <label for="code" class="text-xl font-bold mr-36">Security code</label>
                    </div>

                    <div class="grid md:grid-cols-2 justify-items-end md:gap-6 placeholder:font-bold ">
                        <div
                            class="flex flex-row z-0 w-full mb-6 py-2.5 px-2.5 pl-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <input v-model="date" @input="formatDate" type="text"
                                class="w-full ml-3 text-base indent-2.5 text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="MM/YYYY" required />
                        </div>
                        <div
                            class="w-32 mr-36 flex flex-row z-0 mb-6 py-2.5 px-2.5 pr-3.5 group bg-LightGray hover:border-2 hover:border-black rounded-xl">
                            <input v-model="cvc" @input="validatecvc" type="text"
                                class="w-full text-lg text-center text-semibold text-Gray_100 bg-transparent appearance-none dark:text-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder="CVC" required />
                        </div>
                    </div>

                    <div class="flex flex-row justify-center items-center text-Gray_100 mb-6 rounded-xl p-3 pl-3.5 font-bold">
                        <button v-if="!showInput" @click="showInput = true"
                            class="w-11/12 border-2 border-Gray_100 hover:border-2 hover:bg-orange-500 hover:text-white font-bold py-2 px-4 rounded-lg">
                            Add Promo code
                        </button>

                        <div v-if="showInput" class="flex">
                            <input v-model="couponCode" type="text" placeholder="Enter coupon code"
                                class="border-2 border-gray-400 p-2 rounded-l-lg indent-1 text-black" />
                            <button @click="addCoupon"
                                class="border-2 border-Gray_100 hover:bg-orange-500 hover:text-white font-bold py-2 px-4  rounded-r-lg">
                                Ok
                            </button>
                        </div>
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

                <div class="flex flex-wrap justify-between text-3xl font-semibold mt-8">
                    <p>Discount: </p>
                    <p>0%</p>
                </div>

                <!-- line -->
                <div class="w-full h-[3px] bg-gray-200 mt-9 mb-8"></div>

                <div class="flex justify-center items-center text-center justify-between font-bold text-5xl">
                    <p class="">Total :</p>
                    <p class="text-[#319B77]"> $ 65.00</p>
                </div>

                <div class="flex justify-center items-center text-center mt-3">
                    <button @click="routeToInvoice"
                        class="mt-10 w-96 px-8 h-[56px] bg-customGreen border rounded-2xl text-2xl font-bold text-white hover:bg-orange-500">Complete
                        order</button>
                </div>
            </div>
            <!-- Right content end here -->
        </div>
        <!-- Billing Detail end here -->
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