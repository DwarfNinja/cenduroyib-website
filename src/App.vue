<template>
    <Header></Header>
    <div id="boxed-container">
      <Title></Title>
      <WhoAmI></WhoAmI>
      <Skills></Skills>
      <Services></Services>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Title from "./components/Title.vue";
import WhoAmI from "./components/WhoAmI.vue";
import Skills from "./components/Skills.vue";
import Services from "./components/Services.vue";

export default  {
  name: "App",
  components: {
    Header,
    Title,
    WhoAmI,
    Skills,
    Services
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300;400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
#app {
  font-family: "JetBrains Mono", monospace;
}

body {
  @apply flex flex-col text-center bg-customblue text-white;
}

#boxed-container {
  @apply py-28;
}
</style>
