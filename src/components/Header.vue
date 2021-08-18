<template>
  <nav>
    <ul id="header-menu">
      <li class="header-menu-item "><a href="">Home</a></li>
      <li class="header-menu-item"><a href="">Skills</a></li>
      <li class="header-menu-item"><a href="">Services</a></li>
      <li class="header-menu-item"><a href="">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

#header-menu {
  @apply flex bg-white h-20 justify-center items-center shadow-customb
}

.header-menu-item {
  @apply text-black m-2 text-lg;
}

.header-menu-item:hover {
  text-decoration-line: underline ;
  text-underline-offset: 0.3rem;
  text-decoration-thickness: 2px;
}

</style>
