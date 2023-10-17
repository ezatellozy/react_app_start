<template>
  <div>
    <GeneralNotify v-if="bookedModel">
      <img src="~/assets/images/icons/check.png" alt="check-icon" />

      <h4 class="mb-5">{{ $t('HEADERS.thanksForBooking') }}</h4>

      <p class="text-text-dark text-center w-3/4 mx-auto">
        {{ $t('HEADERS.appointmentBookedSuccessfully') }}
      </p>
    </GeneralNotify>

    <ProfileTitle title="New Appointment" />

    <div class="bg-white">
      <div class="container mx-auto lg:py-0 py-10">
        <div
          class="bg-white lg:p-10 p-5 rounded-3xl lg:-translate-y-20 border border-forth lg:mt-12"
        >
          <div class="grid grid-cols-12 gap-7 items-start">
            <div class="lg:col-span-7 col-span-12 border border-forth rounded-3xl p-7">
              <div class="mb-9">
                <label class="block mb-5 text-secondary font-bold" for="paymentWay"
                  >{{ $t('labels.chooseYourPaymentMethod') }}</label
                >

                <div class="flex flex-col gap-4 items-start">
                  <div class="flex lg:items-center items-start gap-3 select-none">
                    <input
                      type="radio"
                      name="payment-way"
                      class="w-[24px] h-[24px] cursor-pointer border outline-none lg:mt-0 mt-3"
                      id="wallet"
                      value="wallet"
                      v-model="paymentWay"
                    />

                    <label
                      class="flex lg:flex-row flex-col lg:items-center items-start gap-1 cursor-pointer"
                      for="wallet"
                    >
                      <img src="/icons/wallet.png" alt="wallet-image" />

                      <span class="text-secondary font-semibold">{{ $t('HEADERS.wallet') }}</span>

                      <span class="text-text-dark">(Available 1000 LE)</span>
                    </label>
                  </div>

                  <div class="flex lg:items-center items-start gap-3 select-none">
                    <input
                      type="radio"
                      name="payment-way"
                      class="w-[24px] h-[24px] cursor-pointer border outline-none lg:mt-0 mt-3"
                      id="visa"
                      value="visa"
                      v-model="paymentWay"
                    />

                    <label
                      class="flex lg:items-center items-start lg:flex-row flex-col gap-1 cursor-pointer"
                      for="visa"
                    >
                      <img src="/icons/visa.png" alt="wallet-image" />

                      <span class="text-secondary font-semibold">{{ $t('HEADERS.wallet') }}</span>

                      <span class="text-text-dark">(Available 1000 LE)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-[#a5a5a5] font-bold mb-5">{{ $t('HEADERS.enterCreditCard') }}</h3>

                <div class="grid grid-cols-12 gap-3">
                  <div class="lg:col-span-6 col-span-12 flex items-start flex-col gap-2">
                    <label for="name" class="text-[#a5a5a5]">{{ $t('labels.name') }}</label>

                    <input
                      id="name"
                      type="text"
                      :placeholder="$t('labels.namePlaceholder')"
                      class="border border-forth rounded-lg h-[50px] px-5 w-full outline-none focus:border-primary duration-200"
                    />
                  </div>

                  <div class="lg:col-span-6 col-span-12 flex items-start flex-col gap-2">
                    <label for="cardNumber" class="text-[#a5a5a5]">{{ $t('labels.cardNumber') }}</label>

                    <input
                      id="cardNumber"
                      type="number"
                      :placeholder="$t('labels.cardNumberPlaceholder')"
                      class="border border-forth rounded-lg h-[50px] px-5 w-full outline-none focus:border-primary duration-200"
                    />
                  </div>

                  <div class="lg:col-span-3 col-span-6 flex items-start flex-col gap-2">
                    <label for="expiryDate" class="text-[#a5a5a5]">{{ $t('labels.expiryDate') }}</label>

                    <input
                      id="expiryDate"
                      type="number"
                      placeholder="MM / YY"
                      class="placeholder:text-center appearance-none text-center border border-forth rounded-lg h-[50px] px-5 w-full outline-none focus:border-primary duration-200"
                    />
                  </div>

                  <div class="lg:col-span-3 col-span-6 flex items-start flex-col gap-2">
                    <label for="cvv" class="text-[#a5a5a5]">CVV</label>

                    <input
                      id="cvv"
                      type="number"
                      placeholder="***"
                      class="placeholder:text-center appearance-none text-center border border-forth rounded-lg h-[50px] px-5 w-full outline-none focus:border-primary duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 col-span-12">
              <div
                class="mb-5 border border-forth rounded-3xl bg-[url('/client/appointment/payment-card.png')] h-[230px] bg-cover bg-no-repeat px-16 flex items-center justify-end"
              >
                <img src="/client/appointment/logo.png" alt="logo-image" />
              </div>

              <div class="p-7 rounded-3xl bg-[#F5FBFF] mb-5">
                <h3 class="font-bold text-secondary text-xl mb-7">{{ $t('HEADERS.paymentInfo') }}</h3>

                <div class="pb-3 mb-3 border-b border-[#D3E3F0] border-dashed">
                  <h5 class="mb-3 font-bold text-secondary">{{ $t('HEADERS.paymentDetails') }}</h5>

                  <div
                    class="flex lg:items-center items-start lg:flex-row flex-col gap-2 justify-between mb-2"
                  >
                    <li class="text-text-dark font-medium">{{ $t('HEADERS.consultationPrice') }}</li>

                    <h5 class="font-medium lg:ms-0 ms-6">
                      {{
                        new Intl.NumberFormat("en-us", {
                          style: "currency",
                          currency: "EGP",
                        }).format(100)
                      }}
                    </h5>
                  </div>

                  <div
                    class="flex lg:items-center items-start lg:flex-row flex-col gap-2 justify-between mb-2"
                  >
                    <li class="text-text-dark font-medium">{{ $t('HEADERS.fees') }}</li>

                    <h5 class="font-medium lg:ms-0 ms-6">
                      {{
                        new Intl.NumberFormat("en-us", {
                          style: "currency",
                          currency: "EGP",
                        }).format(100)
                      }}
                    </h5>
                  </div>
                </div>

                <div
                  class="flex lg:items-center items-start lg:flex-row flex-col justify-between gap-3"
                >
                  <div class="flex items-center gap-2">
                    <img src="/icons/money.png" alt="money-image" />

                    <h5 class="font-semibold text-lg text-secondary">{{ $t('HEADERS.totalCost') }}</h5>
                  </div>

                  <h5 class="font-bold lg:ms-0 ms-6">
                    {{
                      new Intl.NumberFormat("en-us", {
                        style: "currency",
                        currency: "EGP",
                      }).format(200)
                    }}
                  </h5>
                </div>
              </div>

              <button
                type="button"
                class="h-14 rounded-xl font-bold w-full outline-none"
                :class="
                  isDisabled
                    ? 'bg-[#F0F0F0] text-[#CACBD2] cursor-not-allowed'
                    : 'bg-primary text-secondary'
                "
              >
                Pay
                {{
                  new Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD",
                  }).format(120)
                }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Payment",
});



const paymentWay = ref("");

const isDisabled = computed(() => true);

const bookedModel = ref(false);
</script>
