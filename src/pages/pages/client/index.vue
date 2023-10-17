<template>
  <div>
    <GeneralModel
      v-if="transferModel"
      @onClose="!submitLoading & handleCloseTransferModel()"
    >
      <h3 class="text-secondary font-bold text-[22px] text-center mb-5">
        {{ $t("HEADERS.transferMoney") }}
      </h3>

      <form @submit.prevent="submitTransfer">
        <h5 class="text-secondary font-semibold mb-4">
          {{ $t("labels.enterCreditCard") }}
        </h5>

        <div class="mb-5">
          <label for="amount" class="text-secondary text-sm block mb-2">{{
            $t("labels.amount")
          }}</label>

          <input
            type="number"
            id="amount"
            class="outline-none w-full p-3 rounded-lg border border-forth focus:border-primary"
            :placeholder="$t('labels.amountPlaceholder')"
            v-model="amount"
          />
        </div>

        <div class="mb-5">
          <label for="name" class="text-secondary text-sm block mb-2">{{
            $t("labels.name")
          }}</label>

          <input
            id="name"
            class="outline-none w-full p-3 rounded-lg border border-forth focus:border-primary"
            :placeholder="$t('labels.cardNamePlaceholder')"
            v-model="name"
          />
        </div>

        <div class="mb-5">
          <label for="cardNumber" class="text-secondary text-sm block mb-2">{{
            $t("labels.cardNumber")
          }}</label>

          <input
            id="cardNumber"
            class="outline-none w-full p-3 rounded-lg border border-forth focus:border-primary"
            :placeholder="$t('labels.cardNumberPlaceholder')"
            v-model="cardNumber"
          />
        </div>

        <div class="grid grid-cols-12 gap-5">
          <button
            class="col-span-6 h-14 rounded-xl text-secondary font-semibold bg-primary disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            :disabled="submitLoading"
          >
            {{ $t("HEADERS.transfer") }}
          </button>

          <button
            class="col-span-6 h-14 rounded-xl text-text-dark font-semibold bg-[#EBEDF0]"
            type="button"
            @click="transferModel = false"
          >
            {{ $t("BUTTONS.cancel") }}
          </button>
        </div>

        <p
          v-if="transferError"
          class="py-5 flex items-center gap-3 text-lg text-red-500 font-semibold"
        >
          <i class="fa-solid fa-circle-exclamation" />

          <span>{{ transferError }}</span>
        </p>
      </form>
    </GeneralModel>

    <GeneralModel
      v-if="withdrawModel"
      @onClose="!submitLoading && handleCloseWithdrawModel()"
    >
      <h3 class="text-secondary font-bold text-[22px] text-center mb-5">
        {{ $t("HEADERS.withdrawMoney") }}
      </h3>

      <form @submit.prevent="submitWithdraw">
        <h5 class="text-secondary font-semibold mb-4">
          {{ $t("labels.enterCreditCard") }}
        </h5>

        <div class="mb-5">
          <label for="bankName" class="text-secondary text-sm block mb-2">{{
            $t("labels.bankName")
          }}</label>

          <input
            type="text"
            id="bankName"
            class="outline-none w-full p-3 rounded-lg border border-forth focus:border-primary"
            :placeholder="$t('labels.bankNamePlaceholder')"
            v-model="bankName"
          />
        </div>

        <div class="mb-5">
          <label for="userName" class="text-secondary text-sm block mb-2">{{
            $t("labels.name")
          }}</label>

          <input
            type="text"
            id="userName"
            class="outline-none w-full p-3 rounded-lg border border-forth focus:border-primary"
            :placeholder="$t('labels.namePlaceholder')"
            v-model="userName"
          />
        </div>

        <div class="mb-5">
          <label for="ibanNumber" class="text-secondary text-sm block mb-2">IBAN</label>

          <input
            type="number"
            id="ibanNumber"
            class="outline-none w-full p-3 rounded-lg border border-forth focus:border-primary"
            :placeholder="$t('labels.ibanPlaceholder')"
            v-model="ibanNumber"
          />
        </div>

        <div class="mb-7">
          <label for="withdrawAmount" class="text-secondary text-sm block mb-2">{{
            $t("labels.enterCreditCard")
          }}</label>

          <input
            type="number"
            id="withdrawAmount"
            class="outline-none w-full p-3 rounded-lg border border-forth focus:border-primary"
            :placeholder="$t('labels.amountPlaceholder')"
            v-model="withdrawAmount"
          />
        </div>

        <div class="grid grid-cols-12 gap-5">
          <button
            class="col-span-6 h-14 rounded-xl text-secondary font-semibold bg-primary disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            :disabled="submitLoading"
          >
            {{ $t("HEADERS.withdraw") }}
          </button>

          <button
            class="col-span-6 h-14 rounded-xl text-text-dark font-semibold bg-[#EBEDF0]"
            type="button"
            @click="withdrawModel = false"
          >
            {{ $t("BUTTONS.cancel") }}
          </button>
        </div>

        <p
          v-if="withdrawError"
          class="py-5 flex items-center gap-3 text-lg text-red-500 font-semibold"
        >
          <i class="fa-solid fa-circle-exclamation" />

          <span>{{ withdrawError }}</span>
        </p>
      </form>
    </GeneralModel>

    <GeneralNotify v-if="transferredSuccessfullyModel">
      <img src="~/assets/images/icons/check.png" alt="check-icon" />

      <h4>{{ $t("HEADERS.moneyTransferredSuccessfully") }}</h4>
    </GeneralNotify>

    <ProfileHeader image="/client/home.png" />

    <div v-if="isLoading">
      <GeneralLoading />
    </div>

    <div v-else class="bg-white py-14">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-5 mb-5">
          <div
            class="h-[228px] lg:col-span-8 col-span-12 relative rounded-3xl bg-secondary px-9 py-3"
          >
            <div
              class="py-8 px-5 bg-[url('/client/home/trust-bg.png')] bg-no-repeat bg-contain"
            >
              <h3 class="font-bold text-white text-2xl mb-3">
                {{ $t("HEADERS.weBuild") }}
                <span class="text-primary">{{ $t("HEADERS.trust") }}</span>
              </h3>

              <h6 class="mb-7 text-white">
                {{ $t("HEADERS.rightsViolated") }}
              </h6>

              <NuxtLink
                :to="localePath('/client/appointment')"
                class="outline-none rounded-[10px] bg-primary text-secondary h-12 px-7 w-fit min-w-[226px] flex items-center justify-center gap-5"
              >
                <span class="font-bold">{{ $t("BUTTONS.bookAppointment") }}</span>

                <i class="pi pi-arrow-up-right text-sm" />
              </NuxtLink>
            </div>

            <img
              src="/client/home/end-bg.png"
              class="absolute -top-[38px] end-[-1px]"
              alt=""
            />
          </div>

          <div class="lg:col-span-4 col-span-12 p-9 rounded-3xl bg-[#F5FBFF]">
            <div class="flex flex-col justify-center items-center mb-3.5">
              <h5 class="text-text-dark">{{ $t("HEADERS.mainBalance") }}</h5>

              <h1 class="font-bold text-[40px] text-secondary">
                {{
                  new Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD",
                  }).format(wallet)
                }}
              </h1>
            </div>

            <div class="flex items-center justify-around gap-3">
              <button
                type="button"
                class="outline-none flex items-center justify-center flex-col gap-3"
                @click="withdrawModel = true"
              >
                <img src="/client/home/icons/withdraw.png" alt="withdraw-icon" />

                <h5 class="font-semibold text-primary">{{ $t("HEADERS.withdraw") }}</h5>
              </button>

              <div class="w-[2px] min-h-[55px] bg-primary" />

              <button
                type="button"
                class="outline-none flex items-center justify-center flex-col gap-3"
                @click="transferModel = true"
              >
                <img src="/client/home/icons/transfer.png" alt="withdraw-icon" />

                <h5 class="font-semibold text-primary">{{ $t("HEADERS.transfer") }}</h5>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-12 items-start gap-5">
          <div class="lg:col-span-8 col-span-12 rounded-3xl p-9 border border-forth">
            <div class="flex items-center gap-3 justify-between font-bold mb-7">
              <h3 class="text-secondary text-xl">
                {{ $t("HEADERS.upcomingSchedules") }}
              </h3>

              <NuxtLink
                :to="localePath('/client/reservations/upcoming')"
                class="outline-none text-[#B1B8C0]"
                >{{ $t("BUTTONS.seeAll") }}</NuxtLink
              >
            </div>

            <div v-if="orders.length" class="grid grid-cols-12 gap-3">
              <div
                v-for="order in orders"
                :key="order.id"
                class="lg:col-span-6 col-span-12"
              >
                <ProfileOrder :order="order" client />
              </div>
            </div>

            <div v-else class="flex items-center justify-center flex-col gap-2 mb-5">
              <img src="/client/home/no-schedules.png" alt="no-schedules-image" />

              <h5 class="text-text-dark text-xl">{{ $t("HEADERS.noSchedulesYet") }}</h5>
            </div>
          </div>

          <div class="lg:col-span-4 col-span-12 rounded-3xl p-7 border border-forth">
            <div class="flex items-center gap-3 justify-between font-bold mb-7">
              <h3 class="text-secondary text-xl">{{ $t("HEADERS.transactions") }}</h3>

              <button
                type="button"
                class="outline-none text-[#B1B8C0]"
                @click="$router.push(localePath(`/client/wallet`))"
              >
                {{ $t("BUTTONS.seeAll") }}
              </button>
            </div>

            <div v-if="transactions.length">
              <div
                class="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-forth"
                v-for="transaction in transactions"
                :key="transaction.id"
              >
                <div class="flex items-start gap-2">
                  <div
                    class="flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#C8A45D1A] text-primary"
                  >
                    <i
                      class="pi"
                      :class="
                        transaction.type === 'withdrawal'
                          ? 'pi-arrow-up-right'
                          : 'pi-arrow-down-left'
                      "
                    />
                  </div>

                  <div class="flex flex-col items-start gap-1">
                    <h5 class="text-secondary font-medium">
                      {{ transaction.title.title }}
                    </h5>

                    <h5 class="text-text-dark">{{ transaction.created_at }}</h5>
                  </div>
                </div>

                <h5 class="text-primary font-bold">
                  {{ transaction.type === "withdrawal" ? "-" : "" }}
                  {{
                    new Intl.NumberFormat("en-us", {
                      style: "currency",
                      currency: "USD",
                    }).format(transaction.amount)
                  }}
                </h5>
              </div>
            </div>

            <div v-else class="flex items-center justify-center flex-col gap-2 mb-5">
              <img src="/client/home/no-transactions.png" alt="no-transactions-image" />

              <h5 class="text-text-dark text-xl">
                {{ $t("HEADERS.noTransactionsYet") }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

useHead({
  title: "Client",
});

const toast = useToast();

const isLoading = ref(true);

const orders = ref([]);

const wallet = ref(0);

const transactions = ref([]);

const { data, pending } = await useAPILazyFetch(`client_web/home`, {
  method: "GET",
});
watch(data, (homeData) => {
  transactions.value = homeData.data.transactions;
  wallet.value = homeData.data.wallet;
  orders.value = homeData.data.orders;
});
watch(pending, (load) => {
  isLoading.value = load;
});

const config = useRuntimeConfig();
const token = useCookie("session-token");

const submitLoading = ref(false);

/* Transfer model */
const transferModel = ref(false);
const amount = ref(0);
const name = ref("");
const cardNumber = ref("");
const expireDate = ref("");
const cvv = ref("");
const transferredSuccessfullyModel = ref(false);

const transferError = ref("");

function handleCloseTransferModel() {
  transferModel.value = false;
  amount.value = "";
  name.value = "";
  cardNumber.value = "";
  expireDate.value = "";
  cvv.value = "";

  transferError.value = "";
}

async function submitTransfer() {
  transferError.value = "";

  submitLoading.value = true;

  await $fetch(`${config.public.baseURL}general/wallet/charge`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: {
      amount: amount.value,
    },
    method: "POST",
  })
    .then(() => {
      transferModel.value = false;

      handleCloseTransferModel();

      transferredSuccessfullyModel.value = true;
      setTimeout(() => (transferredSuccessfullyModel.value = false), 3000);
    })
    .catch((e) => {
      console.error(e);

      transferError.value = e.response._data.message;
    })
    .finally(() => (submitLoading.value = false));
}
/* End of the transfer model */

/* Withdraw model */
const withdrawModel = ref(false);
const withdrawAmount = ref("");
const bankName = ref("");
const userName = ref("");
const ibanNumber = ref("");

const withdrawError = ref("");

function handleCloseWithdrawModel() {
  withdrawModel.value = false;
  withdrawAmount.value = "";
  bankName.value = "";
  userName.value = "";
  withdrawError.value = "";
}

async function submitWithdraw() {
  withdrawError.value = "";

  submitLoading.value = true;

  await $fetch(`${config.public.baseURL}general/wallet/withdrawal`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: {
      amount: withdrawAmount.value,
      bank_name: bankName.value,
      iban: ibanNumber.value.toString(),
      account_name: userName.value,
    },
    method: "POST",
  })
    .then((res) => {
      toast.success(res.message);

      handleCloseWithdrawModel();
    })
    .catch((e) => {
      console.error(e.response._data.message);

      withdrawError.value = e.response._data.message;
    })
    .finally(() => (submitLoading.value = false));
}
/* End of the withdraw model */
</script>
