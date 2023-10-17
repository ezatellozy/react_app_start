<template>
  <h2 class="text-secondary font-bold lg:text-[32px] text-xl mb-5">
    {{ $t("labels.profileInformation") }}
  </h2>

  <form @submit.prevent="handleSubmit">
    <div class="flex items-center justify-center">
      <input
        type="file"
        id="uploadProfileImage"
        class="hidden"
        @change="handleProfileImage"
        accept="image/*"
      />

      <div class="relative mb-7">
        <img
          class="rounded-full w-[108px] h-[108px] object-cover"
          :src="profileImage ? profileImage : '/profile/profile.png'"
          alt="profile-image"
        />

        <label
          for="uploadProfileImage"
          class="rounded-full cursor-pointer absolute -end-1 -bottom-2 flex items-center justify-center w-[44px] h-[44px] bg-[#f9f6ef]"
        >
          <img src="~/assets/images/icons/camera.png" alt="camera-image" />
        </label>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mb-7">
      <div class="lg:col-span-6 col-span-12">
        <label for="name" class="block mb-2 text-[#b1b8c0] text-sm">{{
          $t("labels.name")
        }}</label>

        <input
          type="text"
          id="name"
          :placeholder="$t('labels.enterYourName')"
          class="w-full h-14 p-3 font-semibold placeholder:font-normal rounded-xl outline-none border border-forth text-secondary"
          v-model="name"
        />
      </div>

      <div class="lg:col-span-6 col-span-12">
        <label class="block mb-2 text-[#b1b8c0] text-sm">{{ $t("labels.email") }}</label>

        <input
          type="email"
          :placeholder="$t('labels.enterYourEmail')"
          class="w-full h-14 p-3 font-semibold placeholder:font-normal rounded-xl outline-none border border-forth text-secondary"
          v-model="email"
        />
      </div>

      <div class="lg:col-span-6 col-span-12">
        <input-phone @code_change="updateCode($event)" name="phone" v-model="phone" />
      </div>
    </div>

    <button
      type="submit"
      :disabled="isDisabled || submitLoading"
      class="w-[175px] h-14 block mx-auto bg-primary text-secondary font-semibold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {{ $t("BUTTONS.save") }}
    </button>
  </form>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { useGlobalStore } from "~/stores/global";

const toast = useToast();

const mainStore = useGlobalStore();

const config = useRuntimeConfig();

const i18n = useI18n();

const avatar = ref("");
const profileImage = ref(mainStore.profile ? mainStore.profile.image : "");
async function handleProfileImage(e) {
  const form = new FormData();
  form.append("file", e.target.files[0]);
  form.set("model", "users");
  form.set("attachment_type", "image");

  await $fetch(`${config.public.baseURL}general/attachment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
    body: form,
  })
    .then((res) => (avatar.value = res.data))
    .catch((e) => console.error(e));

  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    profileImage.value = reader.result;
  };
}

const name = ref(mainStore.profile?.full_name);
const email = ref(mainStore.profile?.email);
const phone = ref(mainStore.profile?.phone);
function updateCode(code) {
  phone.phone_code = code.phone_code;
  phone.value = code.phone_number_limit;
}

const isDisabled = computed(() => {
  return !name.value.trim() ||
    !email.value.trim() ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-z])*$/.test(
      email.value
    ) ||
    !phone.value
    ? true
    : false;
});

const submitLoading = ref(false);
async function handleSubmit() {
  submitLoading.value = true;

  await $fetch(`${config.public.baseURL}client_web/profile_edit`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${useCookie("session-token").value}`,
    },
    body: {
      full_name: name.value,
      email: email.value,
      _method: "Put",
      avatar: avatar.value,
      phone_code: phone.phone_code,
      phone: phone.value,
    },
  })
    .then((res) => {
      toast.success(res.message);

      mainStore.setProfile(res.data);
    })
    .catch((e) => toast.error(e.response._data.message))
    .finally(() => (submitLoading.value = false));
}
</script>
