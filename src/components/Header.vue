<template>
  <header class="flex justify-center w-full h-16 top-2 sm:top-4 fixed z-10">
    <nav class="flex bg-white w-full max-w-3xl justify-center shadow-customb rounded-2xl">
        <ul id="header-menu" class="flex flex-wrap gap-y-2 justify-center m-auto">
          <li><a class="header-menu-item" href="#title">Home</a></li>
          <li><a class="header-menu-item"  href="#skills">Skills</a></li>
          <li><a class="header-menu-item"  href="#services">Services</a></li>
          <li><a class="header-menu-item"  href="#contact">Contact</a></li>
          <li><a class="header-menu-item"  href="#about-website">About</a></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header-menu-item {
  @apply mx-1 sm:mx-4 text-sm sm:text-lg p-1 px-2 rounded-2xl bg-customlightpurple;
}

.header-menu-item:hover {
  @apply bg-customdarkpurple;
}
</style>
