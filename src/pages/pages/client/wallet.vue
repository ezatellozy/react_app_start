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

    <ProfileTitle :title="$t('HEADERS.wallet')" icon="fa-wallet" />

    <div class="bg-white">
      <div class="container mx-auto lg:py-0 py-10">
        <div
          class="lg:p-10 p-5 rounded-3xl lg:-translate-y-20 lg:mt-12 grid grid-cols-12 gap-5 items-start"
        >
          <div class="lg:col-span-4 col-span-12 p-9 rounded-3xl bg-[#F5FBFF]">
            <div class="flex flex-col justify-center items-center mb-3.5">
              <h5 class="text-text-dark">{{ $t("HEADERS.mainBalance") }}</h5>

              <div class="my-3 w-full" v-if="walletPending">
                <GeneralSkeleton height="43px" width="100%" />
              </div>

              <h1 v-else-if="wallet" class="font-bold text-[40px] text-secondary">
                {{
                  new Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD",
                  }).format(wallet.data.balance)
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

          <div
            class="bg-white rounded-3xl lg:p-9 p-5 lg:col-span-8 col-span-12 border border-forth"
          >
            <h2 class="font-bold lg:text-[32px] text-lg mb-5">
              {{ $t("HEADERS.transactions") }}
            </h2>

            <div
              class="lg:w-fit w-full p-3 rounded-xl flex lg:flex-row flex-col items-center gap-3 bg-[#F6FAFC] mb-5"
            >
              <button
                type="button"
                class="h-12 outline-none px-3 lg:min-w-[150px] min-w-full rounded-md hover:bg-white hover:text-secondary lg:text-lg duration-200 font-semibold"
                :class="
                  currentTransaction === 'withdrawal'
                    ? 'bg-white text-secondary'
                    : 'text-text-dark'
                "
                @click="
                  currentTransaction = 'withdrawal';
                  refresh();
                "
              >
                {{ $t("HEADERS.withdraw") }}
              </button>

              <button
                type="button"
                class="h-12 outline-none px-3 lg:min-w-[150px] min-w-full rounded-md hover:bg-white hover:text-secondary lg:text-lg duration-200 font-semibold"
                :class="
                  currentTransaction === 'charge'
                    ? 'bg-white text-secondary'
                    : 'text-text-dark'
                "
                @click="
                  currentTransaction = 'charge';
                  refresh();
                "
              >
                {{ $t("HEADERS.transfer") }}
              </button>

              <button
                type="button"
                class="h-12 outline-none px-3 lg:min-w-[150px] min-w-full rounded-md hover:bg-white hover:text-secondary lg:text-lg duration-200 font-semibold"
                :class="
                  currentTransaction === 'pay_for_reversation'
                    ? 'bg-white text-secondary'
                    : 'text-text-dark'
                "
                @click="
                  currentTransaction = 'pay_for_reversation';
                  refresh();
                "
              >
                {{ $t("BUTTONS.payForReservations") }}
              </button>
            </div>

            <div class="w-full overflow-auto table-overflow">
              <table v-if="pending" class="table-auto w-full">
                <thead>
                  <tr>
                    <th
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("HEADERS.transactions") }}
                    </th>
                    <th
                      v-if="currentTransaction === 'pay_for_reversation'"
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("HEADERS.reservationId") }}
                    </th>
                    <th
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("HEADERS.date") }}
                    </th>
                    <th
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("labels.amount") }}
                    </th>
                  </tr>
                </thead>

                <tr v-for="i in 5" :key="i">
                  <td
                    v-for="d in currentTransaction === 'pay_for_reversation' ? 4 : 3"
                    :key="d"
                    class="whitespace-nowrap py-7 px-3"
                    :class="i !== 5 ? 'border-b-2 border-forth' : ''"
                  >
                    <GeneralSkeleton width="100%" height="30px" />
                  </td>
                </tr>
              </table>

              <table v-else-if="transactions?.data?.length" class="table-auto w-full">
                <thead>
                  <tr>
                    <th
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("HEADERS.transactions") }}
                    </th>
                    <th
                      v-if="currentTransaction === 'pay_for_reversation'"
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("HEADERS.reservationId") }}
                    </th>
                    <th
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("HEADERS.date") }}
                    </th>
                    <th
                      class="text-center whitespace-nowrap text-text-dark text-lg font-normal border-b-2 border-forth py-5 px-3"
                    >
                      {{ $t("labels.amount") }}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(transaction, i) in transactions.data" :key="transaction.id">
                    <td
                      class="whitespace-nowrap py-7 px-3"
                      :class="
                        i !== transactions.length - 1 ? 'border-b-2 border-forth' : ''
                      "
                    >
                      <div class="flex items-center justify-center gap-3">
                        <div
                          class="flex items-center justify-center rounded-full w-10 h-10 bg-[#C8A45D1A] text-primary"
                        >
                          <i
                            class="pi"
                            :class="
                              currentTransaction === 'withdrawal'
                                ? 'pi-arrow-up-left'
                                : 'pi-arrow-down-left'
                            "
                          />
                        </div>

                        <h5 class="font-semibold text-secondary lg:text-lg">
                          {{ transaction.title.title }}
                        </h5>
                      </div>
                    </td>
                    <td
                      v-if="currentTransaction === 'pay_for_reversation'"
                      class="whitespace-nowrap py-7 px-3 text-center font-semibold text-secondary"
                      :class="i !== 7 ? 'border-b-2 border-forth' : ''"
                    >
                      #{{ transaction.id }}
                    </td>
                    <td
                      class="whitespace-nowrap py-7 px-3 text-center font-semibold text-secondary"
                      :class="i !== 7 ? 'border-b-2 border-forth' : ''"
                    >
                      {{ transaction.created_at }}
                    </td>
                    <td
                      class="whitespace-nowrap py-7 px-3 text-center font-bold text-primary"
                      :class="i !== 7 ? 'border-b-2 border-forth' : ''"
                    >
                      {{ currentTransaction === "withdrawal" ? "-" : "+"
                      }}{{
                        new Intl.NumberFormat("en-us", {
                          style: "currency",
                          currency: "USD",
                        }).format(transaction.amount)
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p v-else class="text-center text-secondary font-bold text-lg py-5">
                No transactions found!
              </p>
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
  title: "Wallet",
});

const currentTransaction = ref("withdrawal");

const toast = useToast();

const config = useRuntimeConfig();

const token = useCookie("session-token");

const submitLoading = ref(false);

/* Fetch all transactions */
const { data: transactions, pending, refresh } = await useAsyncData(`transactions`, () =>
  $fetch(`${config.public.baseURL}general/wallet`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    params: {
      type: currentTransaction.value,
    },
  })
);

/* Fetch wallet balance */
const { data: wallet, pending: walletPending } = await useFetch(
  `${config.public.baseURL}general/wallet/get_fee_wallet/`,
  {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  }
);

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
</script>

<style scoped>
.table-overflow::-webkit-scrollbar {
  height: 3px;
}
</style>
