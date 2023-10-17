<template>
  <GeneralNotify v-if="logout" @onClose="submitLoading === false && (logout = false)">
    <img src="~assets/images/profile/account/logout.png" alt="logout" />

    <h3 class="text-secondary font-bold text-[22px] text-center mb-5">
      {{ $t("labels.confirmLogout") }}
    </h3>

    <div class="grid grid-cols-12 gap-3">
      <button
        type="button"
        class="col-span-6 bg-transparent font-semibold text-[#F02B2B] h-[53px] border border-[#F02B2B] [&:not(:disabled)]:hover:bg-[#F02B2B] [&:not(:disabled)]:hover:text-white transition rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
        :disabled="submitLoading"
        @click="submitLogout"
      >
        {{ $t("BUTTONS.logout") }}
      </button>

      <button
        type="button"
        @click="submitLoading === false && (logout = false)"
        class="col-span-6 bg-[#EBEDF0] font-semibold text-description h-[53px] rounded-xl"
      >
        {{ $t("BUTTONS.cancel") }}
      </button>
    </div>
  </GeneralNotify>

  <header
    class="fixed left-0 w-full z-40"
    :class="scrolled ? 'bg-secondary' : 'bg-transparent'"
  >
    <div class="container mx-auto">
      <nav
        class="border-primary py-5 flex items-center justify-between z-30"
        :class="scrolled ? 'border-none' : 'border-b'"
      >
        <div class="logo">
          <nuxt-link class="text-primary" :to="localePath('/')">
            <img src="~/assets/images/logo/logo.svg" alt="logo"
          /></nuxt-link>
        </div>

        <button type="button" v-if="isMenuHeader" @click="menuState = false">
          <img src="/icons/close.png" alt="close-image" />
        </button>

        <div v-else class="list_menu flex items-center">
          <div v-if="isLoggedIn">
            <Menu as="div" class="relative inline-block text-left me-4" v-slot="{ open }">
              <MenuButton>
                <div class="flex items-center gap-2">
                  <div class="auth flex items-center pe-4">
                    <div class="avatar">
                      <img
                        :src="
                          store.profile?.image
                            ? store.profile?.image
                            : '/profile/no-profile-image.png'
                        "
                        :alt="profile?.full_name ? profile?.full_name : 'profile-image'"
                        class="rounded-full object-cover w-[50px] h-[50px]"
                      />
                    </div>

                    <p class="ms-2 text-primary font-bold text-lg">
                      {{ store.profile?.full_name }}
                    </p>
                  </div>

                  <i
                    class="fa-solid text-primary text-lg"
                    :class="open ? 'fa-angle-up' : 'fa-angle-down'"
                  ></i>
                </div>
              </MenuButton>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
                v-if="store.profile.user_type === 'client'"
              >
                <MenuItems
                  class="absolute right-0 mt-2 min-w-[200px] w-fit origin-top-right divide-y divide-gray-100 rounded-3xl rounded-ss-none bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem>
                    <button
                      type="button"
                      @click="$router.push(localePath('/client'))"
                      class="flex items-center py-4 px-5 gap-2"
                    >
                      <img
                        src="/profile/stats/total.png"
                        class="w-[24px] h-[24px]"
                        alt="dashboard"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("NAV.dashboard")
                      }}</span>
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="button"
                      @click="$router.push(localePath('/client/reservations/upcoming'))"
                      class="flex items-center py-4 px-5 gap-2"
                    >
                      <img
                        src="/icons/reservations.png"
                        class="w-[24px] h-[24px]"
                        alt="reservations"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("HEADERS.reservations")
                      }}</span>
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="button"
                      @click="$router.push(localePath('/client/wallet'))"
                      class="flex items-center py-4 px-5 gap-2"
                    >
                      <img
                        src="/icons/wallet-menu.png"
                        class="w-[24px] h-[24px]"
                        alt="wallet"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("HEADERS.myWallet")
                      }}</span>
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="button"
                      @click="$router.push(localePath('/client/account'))"
                      class="flex items-center py-4 px-5 gap-2"
                    >
                      <img
                        src="/icons/account.png"
                        class="w-[24px] h-[24px]"
                        alt="account"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("HEADERS.myAccount")
                      }}</span>
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="button"
                      class="flex items-center py-4 px-5 gap-2 w-full outline-none"
                      @click="logout = true"
                    >
                      <img
                        src="/icons/logout.png"
                        class="w-[24px] h-[24px]"
                        alt="logout"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("BUTTONS.logout")
                      }}</span>
                    </button>
                  </MenuItem>
                </MenuItems>
              </transition>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
                v-if="store.profile.user_type === 'lawyer'"
              >
                <MenuItems
                  class="absolute right-0 mt-2 min-w-[200px] w-fit origin-top-right divide-y divide-gray-100 rounded-3xl rounded-ss-none bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem>
                    <button
                      type="button"
                      @click="$router.push(localePath('/lawyer'))"
                      class="flex items-center py-4 px-5 gap-2"
                    >
                      <img
                        src="/profile/stats/total.png"
                        class="w-[24px] h-[24px]"
                        alt="dashboard"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("NAV.dashboard")
                      }}</span>
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="button"
                      @click="$router.push(localePath('/lawyer/orders/upcoming'))"
                      class="flex items-center py-4 px-5 gap-2"
                    >
                      <img
                        src="/profile/stats/total.png"
                        class="w-[24px] h-[24px]"
                        alt="dashboard"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("NAV.myOrders")
                      }}</span>
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="button"
                      @click="$router.push(localePath('/lawyer/account'))"
                      class="flex items-center py-4 px-5 gap-2"
                    >
                      <img
                        src="/icons/account.png"
                        class="w-[24px] h-[24px]"
                        alt="account"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("HEADERS.myAccount")
                      }}</span>
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="button"
                      class="flex items-center py-4 px-5 gap-2 w-full outline-none"
                      @click="logout = true"
                    >
                      <img
                        src="/icons/logout.png"
                        class="w-[24px] h-[24px]"
                        alt="logout"
                      />

                      <span class="font-semibold text-secondary">{{
                        $t("BUTTONS.logout")
                      }}</span>
                    </button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <div class="auth pe-4" v-else>
            <nuxt-link
              class="text-primary pe-4 text-sm md:text-lg"
              :to="localePath('/auth/register')"
              >{{ $t("BUTTONS.createAccount") }}</nuxt-link
            >

            <nuxt-link
              class="text-primary text-sm md:text-lg"
              :to="localePath('/auth/login-type')"
              >{{ $t("BUTTONS.login") }}</nuxt-link
            >
          </div>

          <div class="menu border-primary border-s ps-4">
            <button type="button" @click="menuState = true">
              <img src="~/assets/images/icons/list.svg" alt="list" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useToast } from "vue-toastification";

defineProps({
  isMenuHeader: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const toast = useToast();

const menuState = useToggleMenu();

const store = useGlobalStore();
const profile = store.profile;

const isLoggedIn = useCookie("session-token").value ? true : false;

const config = useRuntimeConfig();

/* Logout */
const logout = ref(false);
const submitLoading = ref(false);
async function submitLogout() {
  submitLoading.value = true;

  await $fetch(`${config.public.baseURL}lawyer_web/logout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${useCookie("session-token").value}`,
    },
  })
    .then(() => {
      useCookie("session-token").value = null;

      useCookie("user_type").value = null;

      location.reload();
    })
    .catch((e) => {
      console.error(e);

      toast.error(e.response._data.message);
    });
}
/* End of the logout */

/* Change the classes of the header bases on the scroll height */
const header = ref(null);
const nav = ref(null);

const scrolled = ref(false);

function checkScroll() {
  if (window.scrollY > 5) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
}
onMounted(() => {
  window.onscroll = () => {
    checkScroll();
  };
});
</script>
