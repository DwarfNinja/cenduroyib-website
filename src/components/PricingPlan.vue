<template>
  <div class="flex flex-col bg-white text-black p-7 rounded-2xl w-72 shadow-custombr h-min outline outline-[5px] -outline-offset-[10px]" :class="packageLevels[packageLevel].outlineColour">
    <h1 class="text-xl font-semibold mb-5" :class="packageLevels[packageLevel].planNameColour">{{ planName }}</h1>
    <div class="mb-5">
      <div class="grid grid-cols-3 items-center">
        <div class="text-base text-right pr-1" :class="isStartingPrice ?? 'invisible'">from</div>
        <div class="text-2xl font-bold">€{{ pricingOnetime }}</div>
        <div></div>
      </div>
      <div class="text-xl font-bold m-auto">€{{ pricingMonthly }}/mo</div>
    </div>
    <div class="flex h-16 mb-5">
      <p class="text-sm m-auto">{{ description }}</p>
    </div>
    <ul class="text-2xl h-full mb-5 p-2 relative">
      <li v-for="product in products" class="flex items-center">
        <Product :product="product"
                 :icon-colour="[packageLevels[packageLevel].backgroundColour, 'text-white']"
                 :info-colour="packageLevels[packageLevel].outlineColour">
        </Product>
      </li>
    </ul>
    <button class="mx-1 md:mx-4 sm:text-lg text-white p-1 px-2 mb-2 rounded-2xl transition-all transform duration-100 hover:scale-110"
            :class="packageLevels[packageLevel].backgroundColour"
            @click="onButtonClicked('contact')">
      Get in contact
    </button>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "PricingPlan",
  components: {Product},
  props: ["planName", "pricingOnetime", "pricingMonthly", "isStartingPrice", "products", "description", "packageLevel"],
  data() {
    return {
      packageLevels: {
        "0": {
          outlineColour: "outline-customgray",
          planNameColour: "text-customgray",
          backgroundColour: "bg-customgray"
        },
        "1": {
          outlineColour: "outline-customgreen",
          planNameColour: "text-customgreen",
          backgroundColour: "bg-customgreen"
        },
        "2": {
          outlineColour: "outline-customlightpurple",
          planNameColour: "text-customlightpurple",
          backgroundColour: "bg-customlightpurple"
        },
        "3": {
          outlineColour: "outline-customyellow",
          planNameColour: "text-customyellow",
          backgroundColour: "bg-customyellow"
        },
      }
    }
  },
  methods: {
    onButtonClicked(id) {
      clearTimeout(this.scrollTimer);
      this.scrollingToView = true;

      let element = document.getElementById(id);
      element.scrollIntoView();

      this.scrollTimer = setTimeout(() => {
        this.scrollingToView = false;
      }, 1000);
    }
  }
}
</script>

<style scoped>
li {
  @apply p-1 text-sm smph:text-base;
}

.aos-init[data-aos][data-aos].aos-animate {
  transform: unset;
}
</style>