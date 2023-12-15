<template>
  <i class="fa-solid fa-check absolute left-0 p-1 rounded-2xl" :class="product.special === true ? [iconColour, 'text-white'] : ''"></i>
  <div class="w-full px-3 m-1">
    <span class="text-sm flex w-full justify-center">{{ product.name }}</span>
  </div>
  <div v-if="product.info != null" class="tooltip absolute right-0">
    <i class="fa-solid fa-info fa-sm px-1.5"></i>
    <span class="tooltiptext absolute shadow-2xl p-3.5 bg-white text-black text-sm w-44 right-5 sm:right-auto whitespace-pre-wrap" :class="infoColour">{{ product.info }}</span>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product", "iconColour", "infoColour"],
}
</script>

<style scoped>
/* Tooltip text */
.tooltip .tooltiptext {
  @apply outline outline-[3px] -outline-offset-[7px] z-10 rounded-lg invisible opacity-0 transition-opacity duration-300 top-1/2 -translate-y-1/2;
}

.tooltip:hover .tooltiptext {
  @apply visible opacity-100;
}
</style>