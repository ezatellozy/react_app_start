<template>
  <div class="flex flex-col min-h-[100vh]">
    <Menu />

    <Header />

    <div class="app_wrapper bg-secondary" id="app_wrapper">
      <slot />
    </div>

    <Footer class="mt-auto" />
  </div>
</template>

<script setup>
const i18n = useI18n();

useHead({
  titleTemplate: `${i18n.t("appName")} | %s`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Lawyer App Desc Will Go Here",
    },
  ],
});

const menuState = useToggleMenu();
watch(menuState, (value) => {
  if (value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<style>
/* Custom style for calendar */
.p-datepicker {
  width: 100%;
  padding: 0 !important;
}
.p-datepicker::-webkit-scrollbar {
  height: 3px;
}
.p-datepicker.p-component.p-datepicker-inline {
  border: none !important;
}
.p-datepicker table td > span:focus {
  outline-offset: none !important;
  box-shadow: none !important;
}
.p-datepicker table td > span.p-highlight,
.p-datepicker:not(.p-disabled)
  table
  td
  span:not(.p-highlight):not(.p-disabled):focus,
.p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
  @apply bg-transparent border-primary text-primary !important;
  box-shadow: 0 0 0 1px #c8a45d !important;
}
@media only screen and (max-width: 1200px) {
  .p-datepicker td span,
  .p-datepicker th span {
    font-size: 13px;
  }
}
.p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
.p-datepicker .p-datepicker-header .p-datepicker-next:focus,
.p-link:focus {
  box-shadow: 0 0 0 1px #c8a45d !important;
  outline: none;
}
.p-link:hover {
  color: #c8a45d !important;
}
.p-datepicker button svg {
  outline: none !important;
}
/* End of the custom style for the calendar */
</style>
