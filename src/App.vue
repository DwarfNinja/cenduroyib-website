<template>
  <Header></Header>
  <div id="boxed-container">
    <Title></Title>
    <WhoAmI></WhoAmI>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <About></About>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import Title from "./components/Title.vue";
import WhoAmI from "./components/WhoAmI.vue";
import Skills from "./components/Skills/Skills.vue";
import Projects from "./components/Projects/Projects.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue"
import Footer from "./components/Footer.vue";

export default  {
  name: "App",
  components: {
    Contact,
    Header,
    Title,
    WhoAmI,
    Skills,
    Projects,
    About,
    Footer
  },
  mounted() {
    AOS.init({
      offset: -100,
      once: true,
      anchorPlacement:"center-center"
    });
  }
}

</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: "JetBrains Mono", monospace;

}

body {
  @apply flex flex-col text-center bg-customdarkpurple text-white;
}

#boxed-container {
  @apply py-28 mt-5;
}
</style>
