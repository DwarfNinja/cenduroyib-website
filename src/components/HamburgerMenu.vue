<template>
  <nav class="absolute flex justify-center w-full h-72 bg-white rounded-b-2xl transition-all duration-500" :class="isOpen ? 'top-0 shadow-[3px_8px_5px_2px_rgba(0,0,0,0.3)]' : '-top-72'">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <ul class="flex flex-col p-4 gap-y-4 w-full text-black">
        <li><AnimatedUnderline text="Home" colour="#FEC10B" class="!text-base" @click="onButtonClicked('title')" ></AnimatedUnderline></li>
        <li><AnimatedUnderline text="Who am I?" colour="#FEC10B" class="!text-base" @click="onButtonClicked('who')"></AnimatedUnderline></li>
        <li><AnimatedUnderline text="Skills" colour="#FEC10B" class="!text-base" @click="onButtonClicked('skills')"></AnimatedUnderline></li>
        <li><AnimatedUnderline text="Projects" colour="#FEC10B" class="!text-base" @click="onButtonClicked('projects')"></AnimatedUnderline></li>
        <li><AnimatedUnderline text="Contact" colour="#FEC10B" class="!text-base" @click="onButtonClicked('contact')"></AnimatedUnderline></li>
        <li><AnimatedUnderline text="About" colour="#FEC10B" class="!text-base" @click="onButtonClicked('about-website')"></AnimatedUnderline></li>
      </ul>
    </div>
    <button class="w-10 h-10 absolute right-0 bg-white p-6 mx-3.5 top-[287px] shadow-[3px_8px_5px_2px_rgba(0,0,0,0.3)] rounded-b-xl z-10" @click="isOpen = !isOpen">
      <span class="sr-only"></span>
      <span class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span class="rounded-2xl block absolute h-[3px] w-5 transform bg-black transition duration-500 ease-in-out" :class="{'rotate-45': isOpen,' -translate-y-1.5': !isOpen }"></span>
          <span class="rounded-2xl block absolute h-[3px] w-5 transform bg-black transition duration-500 ease-in-out" :class="{'opacity-0': isOpen } "></span>
          <span class="rounded-2xl block absolute h-[3px] w-5 transform bg-black transition duration-500 ease-in-out" :class="{'-rotate-45': isOpen, ' translate-y-1.5': !isOpen}"></span>
        </span>
    </button>
  </nav>
</template>

<script>
import AnimatedUnderline from "./AnimatedUnderline.vue";

export default {
  name: "HamburgerMenu",
  components: {AnimatedUnderline},
  data() {
    return {
      isOpen: false,
    };
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
    },
  }
};
</script>


<style scoped>

</style>