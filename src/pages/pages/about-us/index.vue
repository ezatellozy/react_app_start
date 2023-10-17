<template>
  <div class="about_page bg-white">
    <general-breadcrumb :items="items" />

    <GeneralBaseSection :section-data="service" />

    <div class="container">
      <div class="about_features pt-14 pb-16">
        <div class="about_features_content grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <about-features :item="feature" v-for="feature in features" :key="feature.id" />
        </div>
      </div>
    </div>

    <about-app-section />

    <about-client-section />
  </div>
</template>

<script setup>
useHead({
  title: "About-us",
});

const i18n = useI18n();

const items = {
  title: i18n.t("NAV.aboutUs"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/about-us",
      name: i18n.t("NAV.aboutUs"),
    },
  ],
};

const features = [
  {
    id: 1,
    image: new URL(`~/assets/images/icons/about/1.svg`, import.meta.url).href,
    title: "Our Philosophy",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: 2,
    image: new URL(`~/assets/images/icons/about/2.svg`, import.meta.url).href,
    title: "Our Principle",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: 3,
    image: new URL(`~/assets/images/icons/about/3.svg`, import.meta.url).href,
    title: "Key of Sucess",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
];

const config = useRuntimeConfig();

/* About data */
const service = ref({
  id: 1,
  image: "",
  title: "",
  description: "",
});
const { data: aboutData, error, pending } = await useFetch(
  `${config.public.baseURL}general/about`,
  {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }
);
service.value.id = aboutData.value.data.id;
service.value.description = aboutData.value.data.desc;
service.value.title = aboutData.value.data.title;
service.value.image = aboutData.value.data.image;
/* End of the about data */
</script>
