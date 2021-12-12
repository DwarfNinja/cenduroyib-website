<template>
  <div class="w-40 sm:w-44 h-44 sm:h-48 m-2 sm:m-3" style="transform-style: preserve-3d;">
    <div class="skillcard-front skillcard-face w-full h-full p-3.5">
      <p class="mb-2 font-semibold">{{ skill.name }}</p>
      <img class="w-11/12 h-auto m-auto" style="transform: translateZ(20px);" :src="`/${skill.imgsrc}`" :alt="`${skill.name} Logo`">
    </div>
    <div class="skillcard-back skillcard-face flex justify-between flex-col w-full h-full p-3.5">
      <p class="font-semibold">{{ skill.name }}</p>
      <p style="transform: translateZ(10px);">{{ skill.text }}</p>
      <p class="text-sm" style="transform: translateZ(10px);">Experience: <br> {{ skill.exp }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["skill"]
}

</script>

<style scoped>

.skillcard-face {
  @apply text-black bg-white rounded-2xl shadow-custombr absolute;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.skillcard-front {
  transform: perspective(1000px);
}

.skillcard-back {
  transform: rotateY(-180deg);
}



</style>
