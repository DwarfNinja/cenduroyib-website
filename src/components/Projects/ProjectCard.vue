<template>
  <div data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">
    <div id="projectcard" @click="clicked = !clicked" :class="{'active' : clicked, 'deactive' : !clicked}" class="relative m-2 group transition-transform ease-out duration-200">
      <img class="w-[260px] lgph:w-[275px] md:w-[300px]" :src="`/${project.imgsrc}`" :alt="`${project.name} Logo`">
      <div id="darkbg" :class="{'active' : clicked, 'deactive' : !clicked}"
           class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity ease-out duration-200"></div>
      <div id="text" :class="{'active' : clicked, 'deactive' : !clicked}"
           class="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 p-3 font-bold text-xl sm:text-2xl text-white
           opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-200">
        <h2 class="text-xl sm:text-2xl">{{ project.name }}</h2>
        <h3 class="text-base sm:text-lg">{{ project.desc }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["project"],
  data() {
    return {
      clicked: false,
      }
    }
}
</script>

<style scoped>

@media (max-width: 768px) {
  #projectcard.active {
    @apply scale-110;
  }
  #projectcard.deactive {
    @apply scale-100;
  }

  #darkbg.active {
    @apply opacity-60 ;
  }
  #darkbg.deactive {
    @apply opacity-0;
  }

  #text.active {
    @apply opacity-100;
  }
  #text.deactive {
    @apply opacity-0;
  }
}

</style>
