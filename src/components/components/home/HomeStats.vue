<template>
  <div class="lg:py-20">
    <div
      class="inner_items flex flex-wrap items-center justify-center md:justify-between gap-5"
    >
      <div
        class="item w-52 h-52 mb-14 rounded-full border-2 border-dashed lg:me-8 border-primary flex justify-center items-center flex-col"
        v-for="n in 4"
        :key="n"
      >
        <h3 class="count mb-5 text-4xl font-bold">+500</h3>
        <p class="text-text-dark text-xl">Happy Clients</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
