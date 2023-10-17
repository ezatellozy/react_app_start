<template>
  <div>
    <VeeForm
      as="div"
      @submit.prevent="onSubmit"
      v-slot="{ meta }"
      :validation-schema="schema"
    >
      <div
        class="input_wrapper_types mb-20 md:max-w-[90%] mx-auto"
        :class="!meta.valid && meta.touched ? 'error' : ''"
      >
        <h5 class="text-sm text-text-dark mb-2">
          {{ $t("labels.choose") }}
        </h5>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <VeeField
            name="auth_type"
            type="radio"
            value="client"
            v-slot="{ field }"
            v-model="user_type"
          >
            <div class="flex items-center justify-between flex-wrap">
              <div class="label w-full">
                <label
                  for="client_type"
                  class="cursor-pointer"
                  :class="{ checked: field.checked }"
                >
                  <img src="~/assets/images/icons/client_icon.svg" alt="client_icon" />
                  <span>{{ $t("labels.client") }}</span>
                </label>

                <input
                  @change="selectUserType('client')"
                  id="client_type"
                  v-bind="field"
                  type="radio"
                />
              </div>
            </div>
          </VeeField>

          <VeeField
            name="auth_type"
            type="radio"
            value="lawyer"
            v-slot="{ field }"
            v-model="user_type"
          >
            <div class="flex items-center justify-between flex-wrap">
              <div class="label w-full">
                <label
                  for="lawyer_type"
                  class="cursor-pointer"
                  :class="{ checked: field.checked }"
                >
                  <img src="~/assets/images/icons/lawyer_icon.svg" alt="lawyer_icon" />

                  <span>{{ $t("labels.lawyer") }}</span>
                </label>

                <input
                  @change="selectUserType('lawyer')"
                  id="lawyer_type"
                  v-bind="field"
                  class="checked"
                  type="radio"
                />
              </div>
            </div>
          </VeeField>
        </div>

        <VeeErrorMessage class="text-red-500 text-sm" name="auth_type" />
      </div>

      <button
        type="button"
        @click="$router.push(localePath('/auth/login'))"
        :disabled="!meta.valid || isDisabled"
        class="base-btn w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {{ $t("BUTTONS.next") }}
      </button>
    </VeeForm>

    <p
      class="mt-5 text-center text-secondary mb-0 font-sm font-medium"
      v-if="user_type == 'client'"
    >
      {{ $t("labels.dontHaveAnAccount") }}

      <nuxt-link :to="localePath('/auth/register')" class="text-primary ms-1">{{
        $t("BUTTONS.createAccount")
      }}</nuxt-link>
    </p>
  </div>
</template>

<script setup>
import * as yup from "yup";

const user_type = ref(null);

const isDisabled = computed(() => {
  return user_type.value ? false : true;
});

const schema = yup.object({
  auth_type: yup.string().required(),
});

function selectUserType(type) {
  useCookie("user_type").value = type;
}

function onSubmit(values) {
  console.log(values);
}
</script>

<style lang="scss">
.input_wrapper_types {
  label {
    @apply flex justify-center rounded-2xl border   items-center flex-col  mb-5 md:mb-0  py-11;
    span {
      @apply font-medium text-lg mt-6;
    }
    &.checked {
      @apply border-primary;
    }
  }
  input {
    display: none;
  }
}
</style>
