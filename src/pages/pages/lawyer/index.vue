<template>
  <ProfileHeader />

  <div class="bg-white py-14">
    <div class="container mx-auto">
      <p v-if="error" class="text-center text-red-500 font-semibold text-lg">
        {{ $t('HEADERS.errorText')  }}!
      </p>

      <div v-else>
        <div class="grid grid-cols-12 gap-5 mb-9">
          <ProfileStatCard v-for="stat in stats" :key="stat.id" :stat="stat" />
        </div>

        <div>
          <h2 class="font-bold text-2xl">My Orders</h2>

          <div class="py-10">
            <div v-if="lawyerData?.data.order.length" class="grid grid-cols-12 gap-5">
              <div
                v-for="order in lawyerData?.data.order"
                :key="order.id"
                class="lg:col-span-4 md:col-span-6 col-span-12"
              >
                <ProfileOrder :order="order" />
              </div>
            </div>

            <div v-else class="flex items-center justify-center flex-col gap-3">
              <img src="~/assets/images/profile/orders/no-orders.png" alt="no-orders" />

              <h5 class="text-xl text-text-dark">{{ $t("HEADERS.noOrders") }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Lawyer - Profile",
});

const stats = ref([
  {
    id: 1,
    img: "/profile/stats/total.png",
    title: "Total Orders",
    number: 0,
  },
  {
    id: 2,
    img: "/profile/stats/new-orders.png",
    title: "New Orders",
    number: 0,
  },
  {
    id: 3,
    img: "/profile/stats/completed-orders.png",
    title: "Completed Orders",
    number: 0,
  },
  {
    id: 4,
    img: "/profile/stats/canceled-orders.png",
    title: "Candceled Orders",
    number: 0,
  },
]);

const config = useRuntimeConfig();

const token = useCookie("session-token");

const i18n = useI18n();

const { data: lawyerData, error } = await useFetch(
  `${config.public.baseURL}lawyer_web/home`,
  {
    headers: {
      Authorization: `Bearer ${token.value}`,
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }
);
if (lawyerData?.value.data) {
  stats.value[0].number = lawyerData.value.data.total_orders;
  stats.value[1].number = lawyerData.value.data.new_orders;
  stats.value[2].number = lawyerData.value.data.compeleted_orders;
  stats.value[3].number = lawyerData.value.data.cancel_orders;
}
</script>
