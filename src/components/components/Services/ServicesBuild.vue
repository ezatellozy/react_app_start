<template>
    <div class="services_build_section rounded-2xl mt-5">
        <h3 >We Build Trust</h3> 
        <p class="text-white  max-w-[300px] mt-4">
            Your rights were violated? We're here to help you.
        </p>
        <div class="actions mt-11 bg-primary rounded-2xl">
            <nuxt-link class="base-btn " :to="localePath('/')">
                {{ $t("BUTTONS.bookAppointment") }}
    
                <i
                  class="pi"
                  :class="
                    $i18n.locale == 'en'
                      ? ' pi-arrow-up-right'
                      : ' pi-arrow-up-left'
                  "
                ></i>
              </nuxt-link>
          </div>
    </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
.services_page {
  .services_side_menu {
    .services_build_section {
        @apply h-[250px]  bg-cover flex flex-col items-center justify-center  bg-[url('~/assets/dammyImages/service6.png')];
        @apply py-4 border-b last:border-0 ;
      h3 {
        @apply max-w-[200px] me-52 text-white;
      }
      .blog_related_card {
        @apply border-b last:border-0;
      }
    }
  }
}
</style>