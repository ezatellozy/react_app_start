<template>
  <ProfileTitle :title="$t('NAV.myOrders')" icon="fa-book-open" />

  <div class="bg-white">
    <div class="container mx-auto lg:py-0 py-10">
      <div
        class="bg-white lg:p-10 p-5 rounded-3xl lg:-translate-y-20 border border-forth lg:mt-12"
      >
        <div class="grid grid-cols-12 items-start gap-4">
          <div class="lg:col-span-4 col-span-12 bg-[#F6FAFC] p-3 rounded-lg lg:mt-[75px]">
            <NuxtLink
              :to="localePath('/lawyer/orders/upcoming')"
              class="block p-4 rounded-xl text-center mb-3 font-semibold hover:bg-white hover:text-secondary"
              :class="
                $route.params.order === 'upcoming'
                  ? 'bg-white text-secondary'
                  : 'text-text-dark'
              "
              >{{ $t("NAV.upcomingOrders") }}</NuxtLink
            >

            <NuxtLink
              :to="localePath('/lawyer/orders/completed')"
              class="block p-4 rounded-xl text-center mb-3 font-semibold hover:bg-white hover:text-secondary"
              :class="
                $route.params.order === 'completed'
                  ? 'bg-white text-secondary'
                  : 'text-text-dark'
              "
              >{{ $t("NAV.completedOrders") }}</NuxtLink
            >

            <NuxtLink
              :to="localePath('/lawyer/orders/cancelled')"
              class="block p-4 rounded-xl text-center font-semibold hover:bg-white hover:text-secondary"
              :class="
                $route.params.order === 'cancelled'
                  ? 'bg-white text-secondary'
                  : 'text-text-dark'
              "
              >{{ $t("NAV.canceledOrders") }}</NuxtLink
            >
          </div>

          <div class="lg:col-span-8 col-span-12">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "My Orders",
});
</script>
