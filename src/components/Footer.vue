<template>
  <footer class="flex justify-center items-center bg-white text-black px-9 shadow-customt" style="min-height: 5rem">
    <nav>
      <ul id="footer-menu">
        <li class="footer-menu-item"><i class="far fa-envelope"></i><a href="mailto:cenduroyib@live.com">Email</a></li>
        <li class="footer-menu-item"><i class="fab fa-instagram"></i><a href="https://www.instagram.com/cendur.oyib/">Instagram</a></li>
        <li class="footer-menu-item"><i class="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/cendur-oyib-a677b5200/">LinkedIn</a></li>
        <li class="footer-menu-item"><i class="fab fa-github"></i><a href="https://github.com/DwarfNinja">GitHub</a></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
li {
  @apply m-2;
}

a {
  @apply m-1 text-lg;
}

.footer-menu-item {
  @apply inline-block;
}

.footer-menu-item:hover {
  text-decoration-line: underline ;
  text-underline-offset: 0.3rem;
  text-decoration-thickness: 2px;
}

</style>
