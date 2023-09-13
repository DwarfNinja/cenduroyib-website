<template>
  <header class="flex justify-center w-full top-2 sm:top-4 fixed z-10" v-bind:class="{'is-hidden': !showHeader}">
    <nav class="flex">
        <ul id="header-menu" class="flex flex-wrap gap-x-6 gap-y-2 justify-center m-auto p-2.5 min-[490px]:p-3.5 sm:p-4 bg-white w-full max-w-3xl shadow-customb rounded-2xl">
          <li><AnimatedUnderline text="Home" colour="#F7B801" @click="onButtonClicked('title')"></AnimatedUnderline></li>
          <li><AnimatedUnderline text="Who am I?" colour="#F7B801" @click="onButtonClicked('who')"></AnimatedUnderline></li>
          <li><AnimatedUnderline text="Skills" colour="#F7B801" @click="onButtonClicked('skills')"></AnimatedUnderline></li>
          <li><AnimatedUnderline text="Projects" colour="#F7B801" @click="onButtonClicked('projects')"></AnimatedUnderline></li>
          <li><AnimatedUnderline text="Contact" colour="#F7B801" @click="onButtonClicked('contact')"></AnimatedUnderline></li>
          <li><AnimatedUnderline text="About" colour="#F7B801" @click="onButtonClicked('about-website')"></AnimatedUnderline></li>
        </ul>
    </nav>
  </header>
</template>

<script>
import AnimatedUnderline from "./AnimatedUnderline.vue";

export default {
  name: "Header",
  components: {AnimatedUnderline},
  data() {
    return {
      showHeader: true,
      scrollingToView: false,
      scrollTimer: null,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  mounted() {
    this.lastScrollPosition = window.scrollY;
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
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
    onScroll() {
      if (this.scrollingToView) {
        return;
      }

      if (window.scrollY < 0) {
        return;
      }
      if (Math.abs(window.scrollY - this.lastScrollPosition) < this.scrollOffset) {
        return;
      }
      this.showHeader = window.scrollY < this.lastScrollPosition;
      this.lastScrollPosition = window.scrollY;
    },
  }
}
</script>

<style scoped>
header {
  transform: translateY(0);
  transition: transform 400ms linear;
}

header.is-hidden {
  transform: translateY(-150%);
}
</style>
