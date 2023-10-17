<template>
  <div class="px-4 md:px-6 lg:pb-0 pb-12">
    <div class="blog_section py-14">
      <div class="container">
        <div
          class="header flex lg:items-end items-start gap-4 justify-between lg:flex-row flex-col lg:pb-16"
        >
          <h2
            class="font-bold text-xl lg:text-5xl flex-1 max-w-[600px] capitalize"
          >
            Learn more about us from our
            <span class="text-primary">latest news</span>
          </h2>

          <nuxt-link
            class="base-link border-primary border-b w-fit hover:text-[#f1ca7e]"
            :to="localePath('/')"
          >
            {{ $t("BUTTONS.seeMore") }}

            <i
              class="pi"
              :class="
                $i18n.locale == 'en'
                  ? ' pi-arrow-up-left'
                  : ' pi-arrow-up-right'
              "
            ></i>
          </nuxt-link>
        </div>

        <div
          class="blog_section_content grid md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          <div class="" v-for="item in items" :key="item.id">
            <blog-card :blog="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    required: true,
  },
});
</script>

<style lang="scss">
.blog_section {
  @apply rounded-[2rem] md:rounded-[3rem] bg-white;

  .blog_section__content {
  }
}
</style>
