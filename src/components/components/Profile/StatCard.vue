<template>
  <div
    class="lg:col-span-3 md:col-spanm-6 col-span-12 rounded-3xl border border-forth p-6 flex items-center gap-2"
  >
    <img :src="stat.img" :alt="stat.title" />

    <div class="flex gap-2 flex-col">
      <h5 class="text-text-dark">{{ stat.title }}</h5>

      <h2 class="text-secondary text-xl font-bold">{{ JSON.stringify(stat.number) }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stat: {
    type: Object,
    required: true,
  },
});
</script>
