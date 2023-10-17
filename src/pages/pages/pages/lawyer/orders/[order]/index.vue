<template>
  <div>
    <template v-if="orders">
      <h5 class="text-xl font-bold text-secondary capitalize mb-7">
        {{ text }}
      </h5>

      <div class="grid grid-cols-12 gap-3">
        <h5 v-if="!orders.data.length" class="col-span-12 font-bold text-center">
          {{ $t("HEADERS.noOrders") }}
        </h5>

        <div
          v-else
          class="lg:col-span-6 col-span-12"
          v-for="order in orders.data"
          :key="order.id"
        >
          <ProfileOrder :order="order" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const route = useRoute();

const i18n = useI18n();

const loading = ref(true);

definePageMeta({
  validate: (value) => {
    if (
      value.params.order === "upcoming" ||
      value.params.order === "cancelled" ||
      value.params.order === "completed"
    ) {
      return true;
    } else {
      return false;
    }
  },
});

const text = computed(() => {
  if (route.params.order === "upcoming") {
    return i18n.t("NAV.completedOrders");
  } else if (route.params.order === "cancelled") {
    return i18n.t("NAV.canceledOrders");
  } else if (route.params.order === "completed") {
    return i18n.t("NAV.completedOrders");
  }
});

function returnCapitalWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

useHead({
  title: returnCapitalWord(route.params.order),
});

const config = useRuntimeConfig();

const token = useCookie("session-token");

const { data: orders } = await useFetch(`${config.public.baseURL}lawyer_web/order`, {
  headers: {
    Authorization: `Bearer ${token.value}`,
    Accept: "application/json",
    "Accept-Language": i18n.locale.value,
  },
  params: {
    type: route.params.order,
  },
});
</script>
