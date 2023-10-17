<template>
  <div>
    <GeneralNotify v-if="confirmRemoveFile" @onClose="handleCloseRemovingFileModel">
      <img src="/icons/close.png" alt="logout" />

      <h3 class="text-secondary font-bold text-[22px] text-center mb-5">
        {{ $t("labels.confirmRemove") }}
      </h3>

      <div class="grid grid-cols-12 gap-3">
        <button
          type="button"
          class="col-span-6 bg-transparent font-semibold text-[#F02B2B] h-[53px] border border-[#F02B2B] [&:not(:disabled)]:hover:bg-[#F02B2B] [&:not(:disabled)]:hover:text-white transition rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
          :disabled="submitLoading"
          @click="handleRemovingFile"
        >
          {{ $t("BUTTONS.remove") }}
        </button>

        <button
          type="button"
          class="col-span-6 bg-[#EBEDF0] font-semibold text-description h-[53px] rounded-xl"
          @click="submitLoading === false && (confirmRemoveFile = false)"
        >
          {{ $t("BUTTONS.cancel") }}
        </button>
      </div>
    </GeneralNotify>

    <GeneralNotify v-if="scheduleModel" @onClose="handleCancelSchedule">
      <h5 class="text-secondary text-center font-bold text-[22px] mb-3">
        {{ $t("HEADERS.scheduleCancellation") }}
      </h5>

      <p class="text-text-dark mb-5">{{ $t("HEADERS.reasonCancellation") }}</p>

      <textarea
        v-model="scheduleReason"
        class="w-full border-forth border rounded-xl min-h-[156px] max-h-[200px] outline-none text-base p-3"
        placeholder="write .."
      />

      <div class="grid grid-cols-12 gap-3">
        <button
          type="button"
          class="col-span-6 bg-transparent font-semibold text-[#F02B2B] h-[53px] border border-[#F02B2B] lg:[&:not(:disabled)]:hover:bg-[#F02B2B] lg:[&:not(:disabled)]:hover:text-white transition rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
          :disabled="submitLoading"
          @click="submitScheduleReason"
        >
          {{ $t("BUTTONS.yesDelete") }}
        </button>

        <button
          type="button"
          @click="scheduleModel = false"
          class="col-span-6 bg-[#EBEDF0] font-semibold text-description h-[53px] rounded-xl"
        >
          {{ $t("BUTTONS.cancel") }}
        </button>
      </div>
    </GeneralNotify>

    <GeneralModel v-if="dateTimeModel" @onClose="dateTimeModel = false">
      <div class="mb-5">
        <h5 class="flex items-center gap-2 mb-3">
          <i class="fa-solid fa-calendar-days text-primary" />

          <span class="text-secondary">{{ $t("HEADERS.selectDate") }}</span>
        </h5>

        <Calendar v-model="date" inline />
      </div>

      <div class="mb-5">
        <h5 class="flex items-center gap-2 mb-3">
          <i class="fa-solid fa-calendar-days text-primary" />

          <span class="text-secondary">{{ $t("HEADERS.selectDate") }}</span>
        </h5>

        <div class="bg-[#F5FBFF] grid grid-cols-12 gap-x-1 gap-y-5 p-7 rounded-xl">
          <button
            v-for="(time, i) in availableTimes"
            :key="i"
            type="button"
            class="lg:col-span-3 rounded-[32px] border md:col-span-6 col-span-12 text-sm hover:text-primary py-2 px-2.5 duration-200 outline-none"
            :class="
              time === selectedTime
                ? 'border-primary text-primary'
                : 'text-secondary border-transparent'
            "
            @click="selectedTime = time"
          >
            {{ time }}
          </button>
        </div>
      </div>

      <div class="px-3 grid grid-cols-12 gap-3">
        <button
          type="button"
          class="bg-[#C8A45D] rounded-[10px] h-[50px] text-secondary col-span-6"
        >
          {{ $t("BUTTONS.apply") }}
        </button>

        <button
          type="button"
          class="bg-[#EBEDF0] rounded-[10px] h-[50px] text-text-dark col-span-6"
          @click="dateTimeModel = false"
        >
          {{ $t("BUTTONS.cancel") }}
        </button>
      </div>
    </GeneralModel>

    <GeneralModel v-show="uploadFilesModel" @onClose="uploadFilesModel = false">
      <h5 class="text-[22px] font-secondary text-center mb-5 font-bold">Upload Files</h5>

      <div class="mb-5">
        <input
          type="file"
          id="uploadFiles"
          class="hidden"
          multiple
          @change="uploadFiles"
        />

        <label for="uploadFiles" class="block text-[#B1B8C0] mb-4">{{
          $t("BUTTONS.upload")
        }}</label>

        <div class="border border-forth border-dashed rounded-3xl">
          <label
            for="uploadFiles"
            class="cursor-pointer flex items-center flex-col justify-center p-7 select-none hover:bg-[#F5FBFF] duration-200 overflow-hidden"
            :class="orderFiles.length ? 'mb-5 border-b border-forth border-dashed' : ''"
          >
            <img src="/icons/upload.png" alt="upload-image" />

            <h6 class="text-sm text-text-dark">{{ $t("HEADERS.dragAndDropFiles") }}</h6>
          </label>

          <div class="flex items-center flex-col gap-5 px-5 max-h-[300px] overflow-auto">
            <div
              v-for="file in modelOrderFiles"
              :key="file.id"
              class="flex items-center justify-between gap-3 p-3 border border-forth rounded-[11px] w-full"
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

              <button type="button" @click="removeFile(file.id)">
                <img src="/icons/remove.png" alt="remove-image" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="px-3 grid grid-cols-12 gap-3">
        <button
          type="button"
          class="bg-[#C8A45D] rounded-[10px] h-[50px] text-secondary font-semibold col-span-6 disabled:opacity-60 disabled:cursor-not-allowed"
          @click="editOrder"
          :disabled="uploadDisabled"
        >
          {{ $t("BUTTONS.upload") }}
        </button>

        <button
          type="button"
          class="bg-[#EBEDF0] rounded-[10px] h-[50px] text-text-dark font-semibold col-span-6"
          @click="
            uploadFilesModel = false;
            modelOrderFiles = orderFiles;
          "
        >
          {{ $t("BUTTONS.cancel") }}
        </button>
      </div>
    </GeneralModel>

    <p v-if="error" class="text-red-500 font-semibold text-xl text-center">
      {{ $t('HEADERS.errorText')  }}
    </p>

    <div v-else>
      <ProfileTitle :title="order.data.category.name" />

      <div class="bg-white">
        <div class="container mx-auto lg:py-0 py-10">
          <div
            class="bg-white lg:p-10 p-5 rounded-3xl lg:-translate-y-20 border border-forth lg:mt-12"
          >
            <div v-if="pending" class="v-full">
              <GeneralLoading />
            </div>

            <div v-else class="grid grid-cols-12 gap-7 items-center">
              <div class="xl:col-span-8 col-span-12">
                <div
                  class="w-full flex lg:flex-row flex-col lg:justify-start justify-center flex-start items-start border border-forth p-7 rounded-3xl gap-3 mb-5"
                >
                  <div
                    class="rounded-full flex mt-1 items-center justify-center bg-[#f9f6ef] w-12 h-12"
                  >
                    <img src="/profile/orders/order.png" alt="" />
                  </div>

                  <div class="lg:w-auto w-full flex-1 flex items-start flex-col gap-7">
                    <div class="flex items-start flex-col gap-1">
                      <h5 class="font-bold text-secondary capitalize text-lg">
                        {{ order.data.category.name }}
                      </h5>

                      <p class="text-text-dark">
                        {{ order.data.service.name }}
                      </p>
                    </div>

                    <div
                      class="w-full flex lg:flex-row flex-col lg:items-center items-start gap-3"
                    >
                      <h5 class="text-[##B1B8C0]">{{ $t("HEADERS.meetingLink") }}:</h5>

                      <div
                        class="flex lg:flex-row flex-col w-full gap-3 items-center justify-between lg:p-2 p-3 border border-forth rounded-[7px] lg:w-[75%] lg:gap-5"
                      >
                        <div class="flex items-center gap-2 relative">
                          <button
                            type="button"
                            class="outline-none"
                            @click="copyMeetingLink"
                          >
                            <i class="fa-solid fa-link text-primary" />
                          </button>

                          <a
                            :href="order.data.link ? order.data.link : '/'"
                            target="_blank"
                            class="text-secondary font-medium lg:max-w-[250px] truncate"
                            :title="order.data.link"
                          >
                            {{ order.data.link }}</a
                          >

                          <div
                            v-if="showCopied"
                            class="flex items-center gap-2 absolute py-1 px-3.5 text-sm rounded-3xl bg-secondary text-white top-[-130%]"
                          >
                            <i class="fa-solid fa-check-circle"></i>

                            <span>{{ $t("BUTTONS.linkCopied") }}</span>
                          </div>
                        </div>

                        <button
                          class="rounded-[7px] border border-primary text-primary hover:bg-primary hover:text-white duration-200 flex items-center justify-center gap-2 py-2 px-4 lg:w-[155px] w-full"
                        >
                          <i class="fa-solid fa-video text-sm" />

                          <span class="font-medium">{{ $t("BUTTONS.startVideo") }}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-12 items-start gap-5 mb-5">
                  <div
                    class="xl:col-span-6 col-span-12 border border-forth p-7 rounded-3xl"
                  >
                    <div class="flex items-center gap-2 justify-between mb-3">
                      <h5 class="font-bold">{{ $t("HEADERS.dateAndTime") }}</h5>

                      <button
                        type="button"
                        class="flex items-center gap-2 text-primary font-bold"
                        @click="dateTimeModel = true"
                      >
                        <i class="fa-solid fa-edit" />

                        <span>{{ $t("BUTTONS.edit") }}</span>
                      </button>
                    </div>

                    <div class="grid grid-cols-12 gap-3">
                      <div
                        class="col-span-6 p-3 border border-forth rounded-3xl min-h-[127px] flex flex-col items-center justify-center gap-1"
                      >
                        <i class="fa-solid fa-calendar-days mb-1 text-primary" />

                        <h5 class="text-secondary font-semibold">
                          {{ $t("HEADERS.date") }}
                        </h5>

                        <span class="font-light font-secondary">{{
                          order.data.date
                        }}</span>
                      </div>

                      <div
                        class="col-span-6 p-3 border border-forth rounded-3xl min-h-[127px] flex flex-col items-center justify-center gap-1"
                      >
                        <i class="fa-solid fa-clock mb-1 text-primary" />

                        <h5 class="text-secondary font-semibold">
                          {{ $t("HEADERS.time") }}
                        </h5>

                        <span class="font-light font-secondary">{{
                          order.data.time
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    class="xl:col-span-6 col-span-12 border border-forth p-7 rounded-3xl"
                  >
                    <div class="flex items-center gap-2 justify-between mb-3">
                      <h5 class="font-bold">{{ $t("HEADERS.filesUploaded") }}</h5>

                      <button
                        type="button"
                        class="flex items-center gap-2 text-primary font-bold"
                        @click="uploadFilesModel = true"
                      >
                        <i class="fa-solid fa-edit" />

                        <span>{{ $t("BUTTONS.edit") }}</span>
                      </button>
                    </div>

                    <p
                      v-if="!orderFiles.length"
                      class="text-center text-lg font-semibold text-secondary"
                    >
                      {{ $t("HEADERS.noFiles") }}
                    </p>

                    <div
                      v-else
                      v-for="(file, i) in orderFiles"
                      :key="file.id"
                      class="flex items-center justify-between gap-3 p-3 border border-forth rounded-[11px] w-full"
                      :class="i !== orderFiles.length - 1 ? 'mb-4' : ''"
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

                      <button
                        type="button"
                        @click="
                          currentFileToRemove = file.file;
                          confirmRemoveFile = true;
                        "
                      >
                        <img src="/icons/remove.png" alt="remove-image" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex justify-end">
                  <button
                    class="min-h-[48px] px-5 min-w-[186px] font-bold rounded-xl border lg:hover:text-white lg:hover:bg-[#F02B2B] duration-200 border-[#F02B2B] text-[#F02B2B]"
                    type="button"
                    @click="scheduleModel = true"
                  >
                    {{ $t("BUTTONS.cancelSchedule") }}
                  </button>
                </div>
              </div>

              <div class="xl:col-span-4 col-span-12 p-7 rounded-3xl bg-[#F5FBFF]">
                <h3 class="font-bold text-lg text-secondary mb-5">
                  {{ $t("HEADERS.paymentInfo") }}
                </h3>

                <div class="mb-10">
                  <div class="pb-3 mb-3 border-b border-[#D3E3F0] border-dashed">
                    <h5 class="mb-3 font-bold text-secondary">
                      {{ $t("HEADERS.paymentDetails") }}
                    </h5>

                    <div class="flex items-center gap-2 justify-between mb-2">
                      <li class="text-text-dark font-medium">
                        {{ $t("HEADERS.consultationPrice") }}
                      </li>

                      <h5 class="font-medium">
                        {{
                          new Intl.NumberFormat("en-us", {
                            style: "currency",
                            currency: "EGP",
                          }).format(order.data.service.price)
                        }}
                      </h5>
                    </div>

                    <div class="flex items-center gap-2 justify-between mb-2">
                      <li class="text-text-dark font-medium">{{ $t("HEADERS.fees") }}</li>

                      <h5 class="font-medium">
                        {{
                          new Intl.NumberFormat("en-us", {
                            style: "currency",
                            currency: "EGP",
                          }).format(order.data.vat)
                        }}
                      </h5>
                    </div>
                  </div>

                  <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                      <img src="/icons/money.png" alt="money-image" />

                      <h5 class="font-semibold text-lg text-secondary">
                        {{ $t("HEADERS.totalCost") }}
                      </h5>
                    </div>

                    <h5 class="font-bold">
                      {{
                        new Intl.NumberFormat("en-us", {
                          style: "currency",
                          currency: "EGP",
                        }).format(order.data.total_amount)
                      }}
                    </h5>
                  </div>
                </div>

                <h5 class="mb-3 font-bold text-secondary">
                  {{ $t("HEADERS.paymentMethod") }}
                </h5>

                <div class="bg-white rounded-[11px] p-3 flex items-center gap-3">
                  <img src="/icons/visa.png" alt="visa-image" />

                  <h5 class="font-semibold text-secondary">**** **** **** 8547</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Calendar from "primevue/calendar";
import { useToast } from "vue-toastification";

const route = useRoute();

const router = useRouter();

const config = useRuntimeConfig();

const token = useCookie("session-token");

const toast = useToast();

const i18n = useI18n();

const { data: order, pending, error, refresh } = await useAsyncData("order", () =>
  $fetch(`${config.public.baseURL}client_web/order/${route.params.name}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
      "Accept-Language": i18n.locale.value,
    },
  })
);

useHead({
  title: order ? order.value.data.category.name : "Name",
});

const date = ref("");

const availableTimes = ref([
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
]);
const selectedTime = ref("");

const submitLoading = ref(false);

/* Cancel schedule */
const scheduleModel = ref(false);
const scheduleReason = ref("");
async function submitScheduleReason() {
  submitLoading.value = true;

  await $fetch(`${config.public.baseURL}client_web/cancel/${route.params.name}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${token.value}`,
    },
    body: {
      reason: scheduleReason.value,
    },
  })
    .then(() => router.push("/client"))
    .catch((e) => toast.error(e.response._data.message));
}
function handleCancelSchedule() {
  if (!submitLoading.value) {
    scheduleModel.value = false;
  }
}
/* End of cancel schedule */

const dateTimeModel = ref(false);

/* Order files */
const orderFiles = ref(
  order.value.data.files
    ? order.value.data.files.map((file) => {
        return {
          id: order.value.data.files.length + 1,
          file: file,
        };
      })
    : []
);

const modelOrderFiles = ref(
  order.value.data.files
    ? order.value.data.files.map((file) => {
        return {
          id: order.value.data.files.length + 1,
          file: file,
        };
      })
    : []
);
const uploadFilesModel = ref(false);

function removeFile(id) {
  modelOrderFiles.value = modelOrderFiles.value.filter((file) => file.id !== id);
}

const currentFileToRemove = ref("");

const confirmRemoveFile = ref(false);

async function handleRemovingFile() {
  submitLoading.value = true;

  await $fetch(`${config.public.baseURL}general/delete_attachment`, {
    headers: {
      "Accept-Language": i18n.locale.value,
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    method: "POST",
    body: {
      file: currentFileToRemove.value,
      attachment_type: "image",
      model: "orders",
    },
  })
    .then((res) => {
      toast.success(res.message);

      currentFileToRemove.value = "";
      confirmRemoveFile.value = false;

      refresh();
    })
    .catch((e) => toast.error(e.response._data.message))
    .finally(() => (submitLoading.value = false));
}

function handleCloseRemovingFileModel() {
  if (!submitLoading.value) {
    confirmRemoveFile.value = false;
  }

  modelOrderFiles.value = orderFiles.value;
}

async function uploadFiles(e) {
  const form = new FormData();
  for (let i = 0; i < e.target.files.length; i++) {
    form.append(`files${i}`, e.target.files[i]);
  }
  form.set("model", "orders");
  form.set("attachment_type", "file");

  await $fetch(`${config.public.baseURL}general/attachment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
    body: form,
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => console.error(e));
}

const uploadDisabled = ref(true);
watch(modelOrderFiles, (newFiles) => {
  if (orderFiles.value.length === newFiles.length) {
    if (orderFiles.value.every((value, i) => value === newFiles[i])) {
      return true;
    }

    return false;
  } else {
    return true;
  }
});
/* End of the order files */

/* Handle copy of the meeting link */
const showCopied = ref(false);
function copyMeetingLink() {
  navigator.clipboard.writeText(order.value.data.link);

  showCopied.value = true;
  setTimeout(() => (showCopied.value = false), 2000);
}
/* End of the coping meeting link */

/* Handle edit order */
async function editOrder() {
  submitLoading.value = true;

  await $fetch(`${config.app.baseURL}client_web/order/${route.params.name}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
    body: {
      day: "Sunday",
      date: date.value,
      media_files: modelOrderFiles.map((item) => item.file),
      time: "10:50",
      _method: "Put",
    },
  })
    .then((res) => {
      console.log(res);

      refresh();
    })
    .catch((e) => toast.error(e.response._data.message))
    .finally(() => (submitLoading.value = false));
}
/* End of the edit order */
</script>
