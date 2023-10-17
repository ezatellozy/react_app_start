<template>
  <div>
    <div class="flex items-center lg:flex-row flex-col justify-between gap-3 e mb-7">
      <h5 class="text-xl font-bold text-secondary capitalize">
        {{ $t(`HEADERS.${$route.params.type}`) }} {{ $t("HEADERS.schedules") }}
      </h5>

      <button
        type="button"
        @click="$router.push('/client/appointment')"
        class="bg-primary text-secondary font-semibold flex items-center justify-center px-3 min-w-[215px] min-h-[48px] gap-3 rounded-xl"
      >
        <i class="fa-solid fa-calendar-days" />

        <span>{{ $t("BUTTONS.newAppointment") }}</span>
      </button>
    </div>

    <div class="grid grid-cols-12 gap-3">
      <h5 v-if="!orders.data?.length" class="col-span-12 font-bold text-center">
        {{ $t("HEADERS.noSchedules") }}
      </h5>

      <div
        v-else
        class="xl:col-span-6 col-span-12"
        v-for="order in orders.data"
        :key="order.id"
      >
        <ProfileOrder :order="order" client />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

definePageMeta({
  validate: (value) => {
    if (
      value.params.type === "upcoming" ||
      value.params.type === "finished" ||
      value.params.type === "canceled"
    ) {
      return true;
    } else {
      return false;
    }
  },
});

function returnCapitalWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

useHead({
  title: returnCapitalWord(route.params.type),
});

const config = useRuntimeConfig();

const i18n = useI18n();

const token = useCookie("session-token");

const { data: orders, error } = await useFetch(
  `${config.public.baseURL}client_web/order`,
  {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${token.value}`,
    },
    params: {
      type: route.params.type,
    },
  }
);
</script>
