<template>
  <ProfileTitle title="Order Details" icon="fa-book-open" />

  <GeneralNotify
    v-if="cancelOrderModal"
    @onClose="cancelLoading === false && (cancelOrderModal = false)"
  >
    <h3 class="text-secondary font-bold text-[22px] text-center">Order Cancellation</h3>

    <h5 class="text-text-dark my-4 text-center">
      {{ $t("HEADERS.cancellationReason") }}
    </h5>

    <form @submit.prevent="cancelOrder">
      <textarea
        v-model="cancelReason"
        class="w-full min-h-[156px] mb-4 rounded-xl outline-none border border-forth p-4 placeholder:text-[rgba(177, 184, 192, 1)] placeholder:text-sm"
        :placeholder="$t('labels.write')"
      />

      <div class="grid grid-cols-12 gap-3">
        <button
          type="submit"
          class="col-span-6 bg-transparent font-semibold text-[#F02B2B] h-[53px] border border-[#F02B2B] [&:not(:disabled)]:hover:bg-[#F02B2B] [&:not(:disabled)]:hover:text-white transition rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
          :disabled="cancelLoading || !cancelReason.trim()"
        >
          {{ $t("BUTTONS.yesCancel") }}
        </button>

        <button
          type="button"
          @click="cancelLoading === false && (cancelOrderModal = false)"
          class="col-span-6 bg-primary font-semibold text-secondary h-[53px] rounded-xl"
        >
          {{ $t("BUTTONS.no") }}
        </button>
      </div>
    </form>
  </GeneralNotify>

  <GeneralNotify
    v-if="orderCancelledSuccessfully"
    @onClose="orderCancelledSuccessfully = false"
  >
    <img src="~/assets/images/icons/check.png" class="" alt="check-image" />

    <h4>{{ $t("HEADERS.cancelledSuccessfully") }}</h4>
  </GeneralNotify>

  <div class="bg-white">
    <div class="container mx-auto lg:py-0 py-10">
      <div
        class="bg-white lg:p-10 p-3 rounded-3xl lg:-translate-y-20 border border-forth lg:mt-12 mt-0"
      >
        <p v-if="error" class="text-center text-red-500 font-semibold text-lg">
          {{ $t('HEADERS.errorText')  }}!
        </p>

        <div v-else-if="pending">
          <GeneralLoading />
        </div>

        <div v-else>
          <div class="flex items-center justify-center flex-col relative">
            <button
              v-if="order && order?.data.status !== 'cancelled'"
              type="button"
              class="lg:block hidden text-[#F02B2B] font-semibold rounded-xl px-12 border h-12 hover:bg-[#F02B2B] hover:text-white transition top-0 end-0 absolute border-[#F02B2B]"
              @click="cancelOrderModal = true"
            >
              {{ $t("BUTTONS.cancelOrder") }}
            </button>

            <div
              class="flex items-center justify-center rounded-full bg-[#C8A45D1A] h-16 w-16 mb-4"
            >
              <img src="~/assets/images/profile/orders/video.png" alt="video-image" />
            </div>

            <h3 class="text-secondary font-bold text-2xl">
              {{ order?.data.service.name }}
            </h3>

            <h5 class="text-lg text-text-dark mb-4">
              {{ order?.data.category.name }}
            </h5>

            <span
              class="px-7 py-2 rounded-3xl"
              :class="[
                order?.data.status === 'in call'
                  ? 'bg-[#29CA8C1A] text-[#29CA8C]'
                  : 'text-primary bg-[#C8A45D1A]',
              ]"
              >{{ order?.data.status }}</span
            >

            <button
              v-if="order && order?.data?.status !== 'cancelled'"
              type="button"
              class="lg:hidden block mt-4 text-[#F02B2B] font-semibold rounded-xl px-12 border h-12 hover:bg-[#F02B2B] hover:text-white transition border-[#F02B2B]"
              @click="cancelOrderModal = true"
            >
              {{ $t("BUTTONS.cancelOrder") }}
            </button>
          </div>

          <div class="flex items-center justify-center lg:gap-20 gap-4 flex-wrap my-9">
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-user text-primary"></i>

              <h5 class="font-semibold text-secondary">{{ $t("HEADERS.clientName") }}</h5>

              <h6 class="text-sm">{{ order?.data.client_name }}</h6>
            </div>

            <div class="flex items-center gap-3">
              <i class="fa-solid fa-clock text-primary"></i>

              <h5 class="font-semibold text-secondary">{{ $t("HEADERS.time") }}</h5>

              <h6 class="text-sm">{{ order?.data.time }}</h6>
            </div>

            <div class="flex items-center gap-3">
              <i class="fa-solid fa-calendar-days text-primary"></i>

              <h5 class="font-semibold text-secondary">{{ $t("HEADERS.date") }}</h5>

              <h6 class="text-sm">{{ order?.data.date }}</h6>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-4">
            <div class="lg:col-span-6 col-span-12 border border-forth rounded-3xl p-4">
              <h5 class="text-secondary font-bold mb-2">
                {{ $t("HEADERS.filesUploaded") }}
              </h5>

              <div
                class="flex lg:items-center gap-4 lg:flex-row flex-col p-3 justify-between border border-forth rounded-3xl mb-3"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="~/assets/images/profile/orders/file.png"
                    class="rounded-md w-12 h-12 object-cover"
                    alt="file-image"
                  />

                  <div class="flex flex-col gap-1">
                    <h6 class="text-secondary">Pdf_3542</h6>

                    <h6 class="text-[rgba(177, 184, 192, 1)] text-sm">5.9 MB</h6>
                  </div>
                </div>

                <button type="button" class="flex items-center gap-1.5 text-primary">
                  <i class="fa-solid fa-file text-sm"></i>

                  <span class="text-sm">Download File</span>
                </button>
              </div>
            </div>

            <div class="lg:col-span-6 col-span-12 border border-forth rounded-3xl p-4">
              <div class="h-full" v-if="order?.data.status === 'cancelled'">
                <h5 class="text-secondary block font-bold mb-2">
                  {{ $t("HEADERS.reasons") }}
                </h5>

                <p class="text-sm text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  aspernatur sed nostrum ipsa rerum error, impedit perferendis eligendi
                  suscipit aperiam. Repudiandae, fugiat quas. Quibusdam maiores
                  perspiciatis totam quam dicta officia.
                </p>
              </div>
              <div class="min-h-full" v-else>
                <label
                  class="text-secondary select-none block font-bold mb-2"
                  for="report"
                  >{{ $t("labels.report") }}</label
                >

                <textarea
                  id="report"
                  class="min-h-[155px] max-h-[200px] outline-none rounded-3xl border border-forth w-full p-4 placeholder:text-[rgba(177, 184, 192, 1)] placeholder:text-sm mb-3"
                  v-model="report"
                  :placeholder="$t('labels.leaveNote')"
                />

                <button
                  type="button"
                  class="h-[50px] w-full rounded-3xl bg-primary font-bold text-secondary disabled:opacity-60 disabled:cursor-not-allowed"
                  :disabled="addReportLoading || !report.trim()"
                  @click="addReport"
                >
                  {{ $t("BUTTONS.addReport") }}
                </button>
              </div>
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
  title: "Order Details",
});

const token = useCookie("session-token");

const i18n = useI18n();

const route = useRoute();
const router = useRouter();

const config = useRuntimeConfig();

const toast = useToast();

const addReportLoading = ref(false);
const report = ref("");
async function addReport() {
  addReportLoading.value = true;

  await $fetch(`${config.public.baseURL}lawyer_web/add_report/${route.params.id}`, {
    method: "POST",
    body: {
      report: report.value,
      _method: "Put",
    },
    headers: {
      Accept: "application/json",
      "Accept-Language": useCookie("lawyer_website_lang").value,
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((res) => {
      console.log(res);
      toast.success(res.message);
    })
    .catch((e) => console.error(e))
    .finally(() => (addReportLoading.value = false));
}

const cancelOrderModal = ref(false);
const cancelLoading = ref(false);
const reasons = ref(true);
const cancelReason = ref("");
const orderCancelledSuccessfully = ref(false);
async function cancelOrder() {
  cancelLoading.value = true;

  await $fetch(`${config.public.baseURL}lawyer_web/cancel/${route.params.id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": useCookie("lawyer_website_lang").value,
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((res) => {
      toast.success(res.message);

      refresh();

      cancelOrderModal.value = false;
    })
    .catch((e) => console.error(e))
    .finally(() => (cancelLoading.value = false));
}

const { data: order, pending, error, refresh } = useFetch(
  `${config.public.baseURL}lawyer_web/order/${route.params.id}`,
  {
    headers: {
      Authorization: `Bearer ${token.value}`,
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }
);
</script>
