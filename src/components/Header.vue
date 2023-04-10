<template>
  <header class="flex justify-center w-full top-2 sm:top-4 fixed z-10" v-bind:class="{'is-hidden': !showHeader}">
    <nav class="flex">
        <ul id="header-menu" class="flex flex-wrap gap-y-2 justify-center m-auto p-2.5 min-[490px]:p-3.5 sm:p-4 bg-white w-full max-w-3xl shadow-customb rounded-2xl">
          <li><a class="header-menu-item" @click="onButtonClicked('title')">Home</a></li>
          <li><a class="header-menu-item" @click="onButtonClicked('who')">Who am I?</a></li>
          <li><a class="header-menu-item" @click="onButtonClicked('skills')">Skills</a></li>
          <li><a class="header-menu-item" @click="onButtonClicked('projects')">Projects</a></li>
          <li><a class="header-menu-item" @click="onButtonClicked('contact')">Contact</a></li>
          <li><a class="header-menu-item" @click="onButtonClicked('about-website')">About</a></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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
.header-menu-item {
  @apply mx-1 md:mx-4 text-sm sm:text-lg p-1 px-2 rounded-2xl bg-customlightpurple;
}

.header-menu-item:hover {
  @apply bg-customdarkpurple;
}

header {
  transform: translateY(0);
  transition: transform 400ms linear;
}

header.is-hidden {
  transform: translateY(-150%);
}
</style>
