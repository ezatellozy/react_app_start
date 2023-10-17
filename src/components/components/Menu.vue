<template>
  <div
    class="fixed duration-300 start-0 w-screen h-screen z-50 bg-[url('~/assets/images/breadcrumb_bg.svg')] bg-no-repeat bg-cover"
    :class="menuState ? 'top-0' : '-top-full'"
  >
    <div class="container mx-auto h-full">
      <Header isMenuHeader />

      <div
        class="flex flex-col items-start lg:justify-end justify-center lg:gap-28 gap-10 h-full py-10 lg:pt-10 pt-[100px]"
      >
        <div class="w-full grid grid-cols-12 lg:items-center lg:gap-0 gap-12">
          <ul
            class="xl:col-span-9 lg:col-span-6 col-span-12 flex flex-col items-start lg:gap-10 gap-5"
          >
            <li v-for="(item, i) in menuItems" :key="i">
              <NuxtLink
                :to="item.path"
                class="font-bold text-[#4C5679] lg:text-5xl text-xl hover:text-white duration-200"
                @click="menuState = false"
                >{{ item.name }}</NuxtLink
              >
            </li>
          </ul>

          <div
            class="xl:col-span-3 lg:col-span-6 col-span-12 flex flex-col lg:gap-16 gap-3"
          >
            <div class="flex flex-col lg:gap-3 gap-0 lg:text-xl text-base">
              <h5 class="font-bold text-[#4C5679]">{{ $t("HEADERS.emailAddress") }}</h5>

              <h3 class="font-semibold text-white">{{ mainStore.profile?.email }}</h3>
            </div>

            <div class="flex flex-col lg:gap-3 gap-0 lg:text-xl text-lg">
              <h5 class="font-bold text-[#4C5679]">{{ $t("HEADERS.phoneNumber") }}</h5>

              <h3 class="font-semibold text-white">
                +{{ mainStore.profile?.phone_code }} {{ mainStore.profile?.phone }}
              </h3>
            </div>

            <div class="flex flex-col lg:gap-3 gap-0 lg:text-xl text-base">
              <h5 class="font-bold text-[#4C5679]">{{ $t("HEADERS.worktime") }}</h5>

              <h3 class="font-semibold text-white">
                {{ $t("HEADERS.days") }} : Sunday - Thursday
              </h3>

              <h3 class="font-semibold text-white">
                {{ $t("HEADERS.date") }} : 09:00 AM - 05:00 PM
              </h3>
            </div>
          </div>
        </div>

        <div
          class="flex w-full lg:items-center gap-3 justify-between lg:flex-row flex-col"
        >
          <div class="flex items-center gap-2">
            <h5 class="text-text-dark text-xl font-medium">
              {{ $t("HEADERS.language") }}
            </h5>

            <nuxt-link
              :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
              @click="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
              class="flex items-center text-white font-bold uppercase"
            >
              {{ $i18n.locale }}
            </nuxt-link>
          </div>

          <div class="flex items-center gap-3.5">
            <h5 class="font-bold text-xl text-[#4C5679]">
              {{ $t("HEADERS.followUsOn") }}
            </h5>

            <div class="flex items-center gap-3">
              <a href="/" class="hover:scale-110 duration-200" @click="menuState = false">
                <img src="/icons/facebook.png" alt="facebook" />
              </a>

              <a href="/" class="hover:scale-110 duration-200" @click="menuState = false">
                <img src="/icons/twitter.png" alt="twitter" />
              </a>

              <a href="/" class="hover:scale-110 duration-200" @click="menuState = false">
                <img src="/icons/linkedin.png" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";

const menuState = useToggleMenu();

const i18n = useI18n();

const menuItems = [
  {
    name: i18n.t("NAV.home"),
    path: "/",
  },
  {
    name: i18n.t("NAV.aboutUs"),
    path: "/about-us",
  },
  {
    name: i18n.t("NAV.services"),
    path: "/services",
  },
  {
    name: i18n.t("NAV.blogs"),
    path: "/blogs",
  },
  {
    name: i18n.t("NAV.contactUs"),
    path: "/contact-us",
  },
];

const mainStore = useGlobalStore();
</script>
