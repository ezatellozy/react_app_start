<template>
  <div
    class="fixed top-0 start-0 lg:p-0 p-5 w-screen h-screen flex items-center justify-center z-50 bg-[rgba(0,0,0,0.7)]"
    @click="$emit('onClose')"
  >
    <div class="lg:min-w-[430px] min-w-full bg-white rounded-3xl p-5" @click="$event.stopPropagation()">
      <slot />
    </div>
  </div>
</template>
