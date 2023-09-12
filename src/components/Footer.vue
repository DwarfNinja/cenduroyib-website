<template>
  <footer class="flex justify-center items-center bg-white text-black px-9 shadow-customt" style="min-height: 5rem">
    <nav>
      <ul id="footer-menu">
        <li>
          <i class="far fa-envelope fa-lg"></i>
          <AnimatedUnderline text="Email" colour="#F7B801" href="mailto:cenduroyib@live.com"></AnimatedUnderline>
        </li>
        <li>
          <i class="fab fa-instagram fa-lg"></i>
          <AnimatedUnderline text="Instagram" colour="#F7B801" href="https://www.instagram.com/cendur.oyib/"></AnimatedUnderline>
        </li>
        <li>
          <i class="fab fa-linkedin-in fa-lg"></i>
          <AnimatedUnderline text="LinkedIn" colour="#F7B801" href="https://www.linkedin.com/in/cendur-oyib-a677b5200/"></AnimatedUnderline>
        </li>
        <li>
          <i class="fab fa-github fa-lg"></i>
          <AnimatedUnderline text="GitHub" colour="#F7B801" href="https://github.com/DwarfNinja"></AnimatedUnderline>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import AnimatedUnderline from "./AnimatedUnderline.vue";

export default {
  name: "Footer",
  components: {AnimatedUnderline}
}
</script>

<style scoped>
li {
  @apply m-2 inline-block;
}
</style>
