<template>
    <div class="service_faq rounded-[2rem] -translate-y-8 bg-[#F5FBFF] mt-20">
      <div class="service_content py-11">
        <div class="flex py-14 gap-2">
            <div class="text_section_wrapper lg:w-8/12 mx-40">
                <h2 class="main_title text-primary"><span>FAQ</span></h2>
                <p class="main_description">Far far away, behind the word mountains, far from the countries Vokalia and Conso nantia, there live the blind texts.</p>
              <img src="~/assets/dammyImages/books.png" alt="" class="mt-20">  
              <nuxt-page/>
            </div>
            <div class="services_side_menu">
                <div class="faq_field">
                    <div class="open_faq">
                        <h3>
                            <img src="~/assets/dammyImages/icons/plus.png" alt="">
                        </h3>
                        <p></p>
                    </div>
                </div>
            </div>
            
          </div>
      </div>
    </div>
  </template>
  
<script setup>
import {ref} from 'vue'
const faqBase = ref([
    
])
</script>
  
  <style></style>
  