<template>
  <div class="container mx-auto">
    <div
      class="pt-44 pb-24 flex lg:items-center items-start lg:flex-row flex-col gap-3 relative"
    >
      <button
        @click="$router.go(-1)"
        type="button"
        class="flex items-center lg:absolute start-0 justify-center rounded-full bg-[#2a2b3f] lg:w-[61px] w-[50px] lg:h-[61px] h-[50px]"
      >
        <i
          class="fa-solid text-[23px] text-primary"
          :class="$i18n.locale.value === 'en' ? 'fa-angle-right' : 'fa-angle-left'"
        ></i>
      </button>

      <div class="flex items-center gap-4 lg:justify-center w-full text-primary">
        <div
          v-if="icon"
          class="flex items-center justify-center rounded-full bg-[#2a2b3f] lg:w-[61px] w-[50px] lg:h-[61px] h-[50px]"
        >
          <i class="fa-solid lg:text-[23px] text-[18px]" :class="icon"></i>
        </div>

        <h1 class="lg:text-4xl text-2xl font-bold capitalize">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
