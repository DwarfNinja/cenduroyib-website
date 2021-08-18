<template>
  <div class="w-44 h-48 m-3" style="transform-style: preserve-3d;">
    <div class="skillcard-front skillcard-face w-full h-full p-3.5">
      <p class="mb-2 font-semibold">{{ skill.name }}</p>
      <img class="w-32 m-auto" style="transform: translateZ(20px);" :src="`/src/assets/${skill.imgsrc}`"  alt="Java Logo">
    </div>
    <div class="flex justify-between flex-col skillcard-back skillcard-face w-full h-full p-3.5">
      <p class="font-semibold">{{ skill.name }}</p>
      <p>{{ skill.text }}</p>
      <p>Experience: <br> {{ skill.exp }}</p>
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

.skillcard-front {
  transform: perspective(1000px);
}

.skillcard-back {
  transform: rotateY(-180deg);
}

</style>
