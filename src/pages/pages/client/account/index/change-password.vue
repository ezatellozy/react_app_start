<template>
  <h2 class="text-secondary font-bold lg:text-[32px] text-xl mb-5">
    {{ $t("NAV.changePassword") }}
  </h2>

  <form @submit.prevent="submitChangePassword">
    <div class="grid grid-cols-12 gap-4 mb-7">
      <div class="lg:col-span-6 col-span-12">
        <label
          for="currentPassword"
          class="block mb-2 text-[#b1b8c0] text-sm"
          >{{ $t("labels.currentPassword") }}</label
        >

        <div class="relative flex items-center justify-between">
          <input
            :type="showCurrentPassword ? 'text' : 'password'"
            id="currentPassword"
            :placeholder="$t('labels.currentPassword')"
            class="w-full h-14 p-3 pe-[45px] font-semibold placeholder:font-normal rounded-xl outline-none border border-forth text-secondary"
            v-model="currentPassword"
          />

          <button
            type="button"
            class="absolute end-[15px] outline-none"
            @click="showCurrentPassword = !showCurrentPassword"
          >
            <i
              class="fa-solid text-[#B1B8C0] text-lg"
              :class="showCurrentPassword ? 'fa-eye-slash' : 'fa-eye'"
            ></i>
          </button>
        </div>
      </div>

      <div class="col-span-12 grid grid-cols-12 gap-4 mb-7">
        <div class="lg:col-span-6 col-span-12">
          <label for="newPassword" class="block mb-2 text-[#b1b8c0] text-sm">{{
            $t("labels.newPassword")
          }}</label>

          <div class="relative flex items-center justify-between">
            <input
              :type="showNewPassword ? 'text' : 'password'"
              id="newPassword"
              :placeholder="$t('labels.enterNewPassword')"
              class="w-full h-14 p-3 pe-[45px] font-semibold placeholder:font-normal rounded-xl outline-none border border-forth text-secondary"
              v-model="newPassword"
            />

            <button
              type="button"
              class="absolute end-[15px] outline-none"
              @click="showNewPassword = !showNewPassword"
            >
              <i
                class="fa-solid text-[#B1B8C0] text-lg"
                :class="showNewPassword ? 'fa-eye-slash' : 'fa-eye'"
              ></i>
            </button>
          </div>
        </div>

        <div class="lg:col-span-6 col-span-12">
          <label
            for="confirmNewPassword"
            class="block mb-2 text-[#b1b8c0] text-sm"
            >{{ $t("labels.confirmNewPassword") }}</label
          >

          <div class="relative flex items-center justify-between">
            <input
              :type="showConfirmNewPassword ? 'text' : 'password'"
              id="confirmNewPassword"
              :placeholder="$t('labels.enterTheConfirmationPassword')"
              class="w-full h-14 p-3 pe-[45px] font-semibold placeholder:font-normal rounded-xl outline-none border border-forth text-secondary"
              v-model="confirmNewPassword"
            />

            <button
              type="button"
              class="absolute end-[15px] outline-none"
              @click="showConfirmNewPassword = !showConfirmNewPassword"
            >
              <i
                class="fa-solid text-[#B1B8C0] text-lg"
                :class="showConfirmNewPassword ? 'fa-eye-slash' : 'fa-eye'"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <button
      type="submit"
      :disabled="isDisabled || isSubmitting"
      class="w-[175px] h-14 block mx-auto bg-primary text-secondary font-semibold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {{ $t("BUTTONS.save") }}
    </button>
  </form>
</template>

<script setup>
// const pkg = require('vue-toastification');
// const useToast = pkg.useToast;
import { useToast } from "vue-toastification";

const config = useRuntimeConfig();

const i18n = useI18n();

const toast = useToast();

const currentPassword = ref("");
const showCurrentPassword = ref(false);
const newPassword = ref("");
const showNewPassword = ref(false);
const confirmNewPassword = ref("");
const showConfirmNewPassword = ref(false);

const isDisabled = computed(() => {
  return !currentPassword.value.trim() ||
    !newPassword.value.trim() ||
    newPassword.value.trim() !== confirmNewPassword.value.trim()
    ? true
    : false;
});

const isSubmitting = ref(false);
async function submitChangePassword() {
  isSubmitting.value = true;

  await $fetch(`${config.public.baseURL}client_web/edit_password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      lang: i18n.locale.value,
      Authorization: `Bearer ${useCookie("session-token").value}`,
    },
    body: {
      _method: "PUT",
      old_password: currentPassword.value,
      password: newPassword.value,
      password_confirmation: confirmNewPassword.value,
    },
  })
    .then((res) => {
      toast.success(res.message);

      currentPassword.value = "";
      newPassword.value = "";
      confirmNewPassword.value = "";
    })
    .catch((e) => toast.error(e.response._data.message))
    .finally(() => (isSubmitting.value = false));
}
</script>
