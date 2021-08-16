<template>
  <ul id="header-menu">
    <li class="header-menu-item"><a href="">Home</a></li>
    <li class="header-menu-item"><a href="">Skills</a></li>
    <li class="header-menu-item"><a href="">Services</a></li>
    <li class="header-menu-item"><a href="">Contact</a></li>
  </ul>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

#header-menu {
  @apply bg-white
}

.header-menu-item {
  @apply text-black
}

</style>
