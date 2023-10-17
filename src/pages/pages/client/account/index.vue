<template>
  <ProfileTitle :title="$t('NAV.myAccount')" icon="fa-book-open" />

  <GeneralNotify
    v-if="deleteAccount"
    @onClose="submitLoading === false && (deleteAccount = false)"
  >
    <img src="~assets/images/profile/account/logout.png" alt="logout" />

    <h3 class="text-secondary font-bold text-[22px] text-center mb-5">
      {{ $t("HEADERS.deleteAccountConfirmation") }}
    </h3>

    <div class="grid grid-cols-12 gap-3">
      <button
        type="button"
        class="col-span-6 bg-transparent font-semibold text-[#F02B2B] h-[53px] border border-[#F02B2B] [&:not(:disabled)]:hover:bg-[#F02B2B] [&:not(:disabled)]:hover:text-white transition rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
        :disabled="submitLoading"
        @click="submitDeletion"
      >
        {{ $t("BUTTONS.yesDelete") }}
      </button>

      <button
        type="button"
        @click="deleteAccount = false"
        class="col-span-6 bg-[#EBEDF0] font-semibold text-description h-[53px] rounded-xl"
      >
        {{ $t("BUTTONS.cancel") }}
      </button>
    </div>
  </GeneralNotify>

  <GeneralNotify v-if="logout" @onClose="submitLoading === false && (logout = false)">
    <img src="~assets/images/profile/account/logout.png" alt="logout" />

    <h3 class="text-secondary font-bold text-[22px] text-center mb-5">
      {{ $t("labels.confirmLogout") }}
    </h3>

    <div class="grid grid-cols-12 gap-3">
      <button
        type="button"
        class="col-span-6 bg-transparent font-semibold text-[#F02B2B] h-[53px] border border-[#F02B2B] [&:not(:disabled)]:hover:bg-[#F02B2B] [&:not(:disabled)]:hover:text-white transition rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
        :disabled="submitLoading"
        @click="submitLogout"
      >
        {{ $t("BUTTONS.logout") }}
      </button>

      <button
        type="button"
        @click="submitLoading === false && (logout = false)"
        class="col-span-6 bg-[#EBEDF0] font-semibold text-description h-[53px] rounded-xl"
      >
        {{ $t("BUTTONS.cancel") }}
      </button>
    </div>
  </GeneralNotify>

  <div class="bg-white">
    <div class="container mx-auto lg:py-0 py-10">
      <div
        class="bg-white lg:p-10 p-5 rounded-3xl lg:-translate-y-20 border border-forth lg:mt-12"
      >
        <div class="grid grid-cols-12 gap-4 items-start">
          <div class="lg:col-span-4 col-span-12 bg-[#F6FAFC] p-3 rounded-lg">
            <NuxtLink
              :to="localePath('/client/account')"
              class="block p-4 rounded-xl text-center font-semibold hover:bg-white hover:text-secondary mb-3"
              :class="
                $route.path === localePath('/client/account')
                  ? 'bg-white text-secondary'
                  : 'text-text-dark'
              "
              >{{ $t("labels.profileInformation") }}</NuxtLink
            >

            <NuxtLink
              :to="localePath('/client/account/change-password')"
              class="block p-4 rounded-xl text-center font-semibold hover:bg-white hover:text-secondary mb-3"
              :class="
                $route.path === localePath('/client/account/change-password')
                  ? 'bg-white text-secondary'
                  : 'text-text-dark'
              "
              >{{ $t("NAV.changePassword") }}</NuxtLink
            >

            <button
              type="button"
              class="block p-4 text-center w-full text-[#f02b2b] font-semibold"
              @click="deleteAccount = true"
            >
              {{ $t("BUTTONS.deleteAccount") }}
            </button>

            <button
              type="button"
              class="block p-4 text-center w-full text-[#f02b2b] font-semibold"
              @click="logout = true"
            >
              {{ $t("BUTTONS.logout") }}
            </button>
          </div>

          <div class="lg:col-span-8 col-span-12 border border-[#f6fafc] rounded-3xl p-4">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";

useHead({
  title: "Account",
});

const config = useRuntimeConfig();

const mainStore = useGlobalStore();

const submitLoading = ref(false);

function afterSubmitSuccess() {
  useCookie("session-token").value = null;

  useCookie("user_type").value = null;

  location.reload();
}

const deleteAccount = ref(false);
async function submitDeletion() {
  submitLoading.value = true;

  await $fetch(
    `${config.public.baseURL}lawyer_web/delete_account/${mainStore.profile.id}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${useCookie("session-token").value}`,
      },
    }
  ).then(() => afterSubmitSuccess());
}

const logout = ref(false);
async function submitLogout() {
  submitLoading.value = true;

  await $fetch(`${config.public.baseURL}lawyer_web/logout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${useCookie("session-token").value}`,
    },
  }).then(() => afterSubmitSuccess());
}
</script>
