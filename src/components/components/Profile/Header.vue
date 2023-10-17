<template>
  <div class="pt-44 pb-24 relative flex items-start">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 items-center lg:gap-10 gap-5">
        <div class="lg:col-span-6 col-span-12">
          <h2 class="lg:text-7xl text-3xl font-bold mb-5">
            <span class="text-primary">{{ $t("HEADERS.expert") }}</span>

            <span class="text-white">{{ $t("HEADERS.clientHeader") }}</span>
          </h2>

          <h5 class="text-lg text-forth">
            {{ $t("HEADERS.clientDescriptionPart1") }}
            <br class="lg:inline hidden" />
            {{ $t("HEADERS.clientDescriptionPart2") }}
          </h5>
        </div>

        <div class="lg:col-span-6 col-span-12 flex items-center justify-end relative z-10">
          <img
            v-if="image"
            :src="image"
            class="lg:max-h-[550px] object-contain w-full"
            alt="lawyer-image"
          />

          <img v-else src="/profile/lawyer-profile.svg" />
        </div>
      </div>

      <img v-if="!image" src="/profile/background.svg" class="absolute end-0 object-contain top-[110px] w-[552px]" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
    default: null,
  },
});
</script>
