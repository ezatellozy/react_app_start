<template>
  <div>
    <ProfileTitle :title="$t('HEADERS.reservations')" icon="fa-clipboard-list" />

    <div class="bg-white">
      <div class="container mx-auto lg:py-0 py-10">
        <div
          class="bg-white lg:p-10 p-5 rounded-3xl lg:-translate-y-20 border border-forth lg:mt-12"
        >
          <div class="grid grid-cols-12 items-start lg:gap-4 gap-7">
            <div
              class="lg:col-span-4 col-span-12 bg-[#F6FAFC] p-3 rounded-lg lg:mt-[75px]"
            >
              <NuxtLink
                :to="localePath('/client/reservations/upcoming')"
                class="block p-4 rounded-xl text-center mb-3 font-semibold hover:bg-white hover:text-secondary"
                :class="
                  $route.params.type === 'upcoming'
                    ? 'bg-white text-secondary'
                    : 'text-text-dark'
                "
                >{{ $t("HEADERS.upcoming") }} {{ $t("HEADERS.schedules") }}</NuxtLink
              >

              <NuxtLink
                :to="localePath('/client/reservations/finished')"
                class="block p-4 rounded-xl text-center mb-3 font-semibold hover:bg-white hover:text-secondary"
                :class="
                  $route.params.type === 'finished'
                    ? 'bg-white text-secondary'
                    : 'text-text-dark'
                "
                >{{ $t("HEADERS.finished") }} {{ $t("HEADERS.schedules") }}</NuxtLink
              >

              <NuxtLink
                :to="localePath('/client/reservations/canceled')"
                class="block p-4 rounded-xl text-center font-semibold hover:bg-white hover:text-secondary"
                :class="
                  $route.params.type === 'canceled'
                    ? 'bg-white text-secondary'
                    : 'text-text-dark'
                "
                >{{ $t("HEADERS.canceled") }} {{ $t("HEADERS.schedules") }}</NuxtLink
              >
            </div>

            <div class="lg:col-span-8 col-span-12">
              <NuxtPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Reservations",
});
</script>
