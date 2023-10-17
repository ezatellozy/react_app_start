<template>
    <div class="services_page bg-white">
      <general-breadcrumb :items="items" />
      <!-- Start :: Services Section -->
      <div class="container">
        <div class="text_section_wrapper py-10 md:max-w-[80%] mx-auto">
          <div class="icon_wrapper mx-auto" >
            <img src="@/assets/dammyImages/icon1.png" class="mx-auto" width="20" height="20" alt="icon" />
          </div>
          <h2  class="main_title text-5xl py-1 mx-auto text-center"><span class="text-primary">criminal</span> Consultation</h2>
          <p  class="main_description text-center mx-auto">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
        </div>
        <div class="flex py-14 gap-6">
          <div class="blog_section_content lg:w-8/12">
            <img src="~/assets/dammyImages/service5.png" alt="" >  
            <nuxt-page/>
          </div>
          <div class="services_side_menu hidden lg:block w-4/12">
            <services-side />   
            <services-build />         
          </div>
        </div>
        <services-content />
      </div> 
      <services-faq />
      <!-- Start :: Services Section -->
    </div>
  </template>
  <script setup>
  const i18n = useI18n();
  const items = {
    title: i18n.t("NAV.Criminal Consultation"),
    links: [
      {
        path: "/",
        name: i18n.t("NAV.home"),
      },
      {
        path: "/services",
        name: i18n.t("NAV.services"),
      },
      {
        path: "/criminalConsultation",
        name: i18n.t("NAV.Criminal Consultation"),
      },
    ],
  };

  </script>
  
  <style lang="scss">
  .services_page {
    .icon_wrapper{

    }
  }
  </style>
  