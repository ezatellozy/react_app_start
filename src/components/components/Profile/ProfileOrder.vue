<template>
  <div class="bg-white rounded-xl border border-forth p-6">
    <div class="flex items-start gap-2 pb-6 border-b-2 border-forth mb-4">
      <div class="rounded-full flex items-center justify-center bg-[#f9f6ef] w-12 h-12">
        <img src="/profile/orders/order.png" :alt="order.name" />
      </div>

      <div class="flex gap-1 flex-col flex-1">
        <h5 class="text-secondary text-xl font-semibold">{{ order.service.name }}</h5>

        <h2 class="text-text-dark capitalize">
          {{
            order.status === "In call"
              ? $t("labels.inCall")
              : $t(`labels.${order.status}`)
          }}
        </h2>
      </div>
    </div>

    <div class="mb-7 flex items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-clock"></i>

        <span class="text-text-dark">{{ order.date }}</span>
      </div>

      <div class="flex items-center gap-2">
        <i class="fa-regular fa-calendar-days"></i>

        <span class="text-text-dark">{{ order.time }}</span>
      </div>
    </div>

    <NuxtLink
      class="rounded-lg h-11 p-5 flex items-center justify-center w-full bg-[#E3F0FA] text-secondary font-semibold"
      :to="
        localePath(
          client
            ? `/client/consultation/${order.id}`
            : `/lawyer/orders/order-details/${order.id}`
        )
      "
    >
      {{ $t("NAV.details") }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  order: {
    type: Object,
    required: true,
  },
  client: {
    type: Boolean,
    required: false,
  },
});
</script>
