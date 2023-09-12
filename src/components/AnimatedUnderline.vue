<template>
    <a>
      <span class="link link-underline">{{text}}</span>
    </a>
</template>

<script>
export default {
  name: "AnimatedUnderline",
  props: ["text", "colour"],
}
</script>

<style scoped>
.link {
  @apply mx-1 text-sm font-bold sm:text-lg p-1 text-black;
}

.link-underline {
  @apply border-b-0 bg-gradient-to-r from-[v-bind(colour)] to-[v-bind(colour)] bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-[background-size] ease-in-out duration-500
}

.link-underline:hover {
  @apply bg-[length:100%_3px]
}
</style>
