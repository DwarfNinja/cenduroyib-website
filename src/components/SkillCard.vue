<template>
  <div class="w-36 lgph:w-[10.5rem] sm:w-44 h-40 lgph:h-44 sm:h-48 m-2 sm:m-3" style="transform-style: preserve-3d;">
    <div class="skillcard-front skillcard-face">
      <p class="mb-2 font-semibold">{{ skill.name }}</p>
      <img class="w-[105px] lgph:w-[120px] sm:w-[140px] h-auto m-auto object-cover p-1" style="transform: translateZ(20px);" :src="`/${skill.imgsrc}`" :alt="`${skill.name} Logo`">
    </div>
    <div class="skillcard-back skillcard-face flex justify-between flex-col">
      <p class="font-semibold">{{ skill.name }}</p>
      <p class="text-sm sm:text-base" style="transform: translateZ(10px);">Experience: <br> {{ skill.exp }}</p>
      <p class="text-sm sm:text-base" style="transform: translateZ(10px);">Skill level:</p>
      <div class="w-full bg-gray-300 rounded-2xl">
        <div :class="skill.level" class="text-right py-2 bg-customyellow text-white rounded-2xl"></div>
      </div>
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
  @apply text-black bg-white rounded-2xl shadow-custombr absolute w-full h-full p-3.5;
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
