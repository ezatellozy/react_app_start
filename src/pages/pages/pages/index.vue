<template>
  <div class="home_wrapper" v-if="items">
    <home-slider />

    <home-content :items="items" />

    <home-app-section />

    <home-blog-section :items="items.Blogs" />
  </div>
</template>

<script setup>
useHead({
  title: "Home",
});
const config = useRuntimeConfig();
const i18n = useI18n();
const items = ref(null);
await useAsyncData("home", () => {
  $fetch(`${config.public.baseURL}general/home_website`, {
    headers: {
      "accept-language": i18n.locale.value,
    },
  }).then((res) => (items.value = res.data));
});
</script>
