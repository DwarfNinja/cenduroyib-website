<template>
  <header class="flex bg-white h-20 justify-center items-center shadow-customb px-9">
    <nav>
      <ul id="header-menu">
        <li class="header-menu-item "><a href="#title">Home</a></li>
        <li class="header-menu-item"><a href="#skills">Skills</a></li>
        <li class="header-menu-item"><a href="#services">Services</a></li>
        <li class="header-menu-item"><a href="#contact">Contact</a></li>
        <li class="header-menu-item"><a href="#about-website">About</a></li>
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
  @apply text-black m-2 text-lg inline-block;
}

.header-menu-item:hover {
  text-decoration-line: underline ;
  text-underline-offset: 0.3rem;
  text-decoration-thickness: 2px;
}

</style>
