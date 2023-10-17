<template>
    <div class="service_build_section   mt-5">
        <div class="text_section_wrapper md:w-1/2">
            <h3 class="main_title font-bold " >More benefits beyond legal support</h3>
            <div class="main_description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</div>
            <div class="main_description">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it.</div>
        </div>
        <div
        class="service_section_content grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 me-12"
      >
        <div 
        v-for="service in services" 
        :key="service.id"
        >
            <div class="service_img">
                <img
                  class="max-w-full object-cover block"
                  :src="service.image"
                  alt="blog img"
                />
              </div>
            </div>
      </div>
      <div class="text_section_wrapper md:w-1/2 mt-10">
        <h3 class="main_title font-bold " >What to Know</h3>
        <div class="main_description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</div>
        </div>
        <div class="grid md:grid-cols-3  gap-5 mt-10 max-w-3/4">
            <div class="service_icon border-2 p-2 rounded-2xl bg-white " v-for="icon in icons" :key="icon.id">
               <p>
                    <img
                    class="my-1 mx-3 inline-block"
                    :src="icon.iconImage"
                    alt="blog img"
                    />
                    <span>{{icon.title}}</span>
                </p>
            </div> 
        </div>
    </div>
</template>

<script setup>
    const services = [
  {
    id: 1,
    image: new URL(`@/assets/dammyImages/service8.png`, import.meta.url).href,
  },
  {
    id: 2,
    image: new URL(`@/assets/dammyImages/service7.png`, import.meta.url).href,
  },
];
const icons = [
    {
        id: 1,
        iconImage: new URL(`~/assets/dammyImages/icons/Vector.png`, import.meta.url).href,
        title: "Trustworthy Lawyers"
    },
    {
        id: 2,
        iconImage: new URL(`~/assets/dammyImages/icons/Variant2.png`, import.meta.url).href,
        title: "Trustworthy Lawyers"
    },
    {
        id: 3,
        iconImage: new URL(`~/assets/dammyImages/icons/Variant3.png`, import.meta.url).href,
        title: "Trustworthy Lawyers"
    },
    {
        id: 4,
        iconImage: new URL(`~/assets/dammyImages/icons/Group.png`, import.meta.url).href,
        title: "Medical & Health Care"
    },
    {
        id: 5,
        iconImage: new URL(`~/assets/dammyImages/icons/Variant4.png`, import.meta.url).href,
        title: "Medical & Health Care"
    },
];
</script>


<style lang="scss">
.services_page {
    .service_build_section {
        @apply py-4 border-b last:border-0 ;
      h3 {
        @apply max-w-[350px]  text-secondary text-xl;
      }
      .main_description{
        @apply max-w-[100%]
      }
      .service_icon{
        @apply max-w-[350px]
      }
    }
  }

</style>