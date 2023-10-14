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
        <i class="fa-solid fa-check absolute left-0 p-1 rounded-2xl" :class="product.special === true ? [packageLevels[packageLevel].backgroundColour, 'text-white'] : ''"></i>
        <div class="w-full px-3 m-1">
          <span class="text-sm flex w-full justify-center">{{ product.name }}</span>
        </div>
        <div v-if="product.info != null" class="tooltip absolute right-0">
          <i class="fa-solid fa-info fa-sm px-1.5"></i>
          <span class="tooltiptext absolute shadow-2xl p-3.5 bg-white text-black text-sm w-44 right-5 sm:right-auto whitespace-pre-wrap" :class="packageLevels[packageLevel].outlineColour">{{ product.info }}</span>
        </div>
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
export default {
  name: "PricingPlan",
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

/* Tooltip text */
.tooltip .tooltiptext {
  @apply outline outline-[3px] -outline-offset-[7px] z-10 rounded-lg invisible opacity-0 transition-opacity duration-300 top-1/2 -translate-y-1/2;
}

.tooltip:hover .tooltiptext {
  @apply visible opacity-100;
}

.aos-init[data-aos][data-aos].aos-animate {
  transform: unset;
}
</style>