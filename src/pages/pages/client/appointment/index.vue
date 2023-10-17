<template>
  <div>
    <ProfileTitle :title="$t('HEADERS.newAppointment')" />

    <div class="bg-white">
      <div class="container mx-auto lg:py-0 py-10">
        <div
          class="bg-white lg:p-10 p-5 rounded-3xl lg:-translate-y-20 border border-forth lg:mt-12"
        >
          <div class="grid grid-cols-12 gap-7 items-start">
            <div class="lg:col-span-7 col-span-12">
              <div class="border border-forth p-7 rounded-3xl mb-7">
                <h3 class="text-secondary font-bold text-xl mb-4">
                  {{ $t("HEADERS.consultationType") }}
                </h3>

                <div class="mb-7">
                  <h5 class="text-[#B1B8C0] mb-4">{{ $t("HEADERS.choose") }}</h5>

                  <div class="grid grid-cols-12 gap-5">
                    <button
                      type="button"
                      v-for="(consultation, i) in consultationTypes"
                      :key="i"
                      class="min-h-[115px] outline-none flex items-center justify-center flex-col gap-2 lg:col-span-3 md:col-span-6 col-span-12 border duration-300 hover:border-primary border-forth rounded-[15px]"
                      :class="
                        consultation.id === consultationType ? 'border-primary' : ''
                      "
                      @click="consultationType = consultation.id"
                    >
                      <div
                        type="button"
                        class="rounded-full flex mt-1 duration-200 items-center justify-center bg-[#f9f6ef] w-12 h-12"
                      >
                        <img src="/profile/orders/order.png" alt="" />
                      </div>

                      <h5 class="text-secondary font-medium capitalize">
                        {{ consultation.name }}
                      </h5>
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    for="consultationType"
                    class="block text-secondary font-medium mb-3"
                  >
                    {{ $t("HEADERS.chooseRightConsultation") }}
                  </label>

                  <select
                    id="consultationType"
                    class="border border-forth rounded-xl h-14 outline-none duration-200 focus:border-primary cursor-pointer lg:w-3/4 w-full px-4 text-[#B1B8C0] capitalize"
                    v-model="selectedType"
                  >
                    <option value="0" disabled>Choose</option>
                    <option
                      v-for="(type, i) in selectTypes"
                      :key="i"
                      :value="type"
                      class="capitalize text-secondary"
                    >
                      {{ type }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="border border-forth p-7 rounded-3xl">
                <h3 class="text-secondary font-bold text-xl mb-4">
                  {{ $t("HEADERS.uploadFiles") }}
                </h3>

                <div>
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
                      :class="
                        uploadedFiles.length
                          ? 'mb-5 border-b border-forth border-dashed'
                          : ''
                      "
                    >
                      <img src="/icons/upload.png" alt="upload-image" />

                      <h6 class="text-sm text-text-dark">
                        {{ $t("HEADERS.dragAndDropFiles") }}
                      </h6>
                    </label>

                    <div
                      class="flex items-center flex-col gap-5 px-5 max-h-[300px] overflow-auto"
                    >
                      <div
                        v-for="file in uploadedFiles"
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
              </div>
            </div>

            <div class="lg:col-span-5 col-span-12">
              <div
                class="rounded-3xl bg-[#F5FBFF] py-7 px-5"
                :class="showPayment ? 'mb-7' : 'mb-0'"
              >
                <h5 class="text-secondary font-bold text-xl mb-7">
                  {{ $t("HEADERS.dateAndTime") }}
                </h5>

                <div class="mb-7">
                  <h5 class="flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-calendar-days text-primary" />

                    <span class="text-secondary">{{ $t("HEADERS.selectDate") }}</span>
                  </h5>

                  <Calendar v-model="date" inline />
                </div>

                <div>
                  <h5 class="flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-calendar-days text-primary" />

                    <span class="text-secondary">{{ $t("HEADERS.selectTime") }}</span>
                  </h5>

                  <div class="bg-white grid grid-cols-12 gap-x-1 gap-y-7 p-7 rounded-xl">
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
              </div>

              <div v-if="showPayment" class="border border-forth p-7 rounded-3xl">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-secondary font-medium">Consultation Price</h5>

                  <p class="text-secondary font-bold text-2xl">
                    {{
                      new Intl.NumberFormat("en-us", {
                        style: "currency",
                        currency: "USD",
                      }).format(120)
                    }}
                  </p>
                </div>

                <button
                  type="button"
                  class="bg-primary outline-none h-14 rounded-xl text-secondary w-full font-bold"
                >
                  Continue To Payment
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
import Calendar from "primevue/calendar";

useHead({
  title: "Appointment",
});



const consultationType = ref("");
const consultationTypes = ref([
  { id: 1, name: "criminal" },
  { id: 2, name: "Administrative" },
  { id: 3, name: "criminal" },
  { id: 4, name: "Administrative" },
  { id: 5, name: "criminal" },
  { id: 6, name: "Administrative" },
]);

const selectTypes = ref([
  "criminal",
  "Administrative",
  "criminal",
  "Administrative",
  "criminal",
  "Administrative",
]);
const selectedType = ref("0");

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

const uploadedFiles = ref([]);
function uploadFiles(e) {
  for (let file of e.target.files) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      uploadedFiles.value.push({ id: crypto.randomUUID(), file: reader.result });
    };
  }
}
function removeFile(id) {
  uploadedFiles.value = uploadedFiles.value.filter((file) => file.id !== id);
}

const showPayment = computed(() => {
  return consultationType.value &&
    selectedType.value &&
    date.value &&
    selectedTime.value &&
    uploadedFiles.value.length
    ? true
    : false;
});
</script>
