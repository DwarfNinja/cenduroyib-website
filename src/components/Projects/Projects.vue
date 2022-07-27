<template>
  <section class="bg-white text-black w-full md:w-[93%] py-16 mx-auto mb-52 sm:max-w-8xl shadow-custombr" id="projects">
    <h2 class="text-2xl mb-12 underline-custom">
      Projects
    </h2>
      <div class="flex justify-start align-top h-full px-5 md:px-12 lg:px-16">
        <div class="flex flex-wrap mx-auto mb-auto justify-center" style="grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));">
          <ProjectCard :project="projects.loopsnelheid"></ProjectCard>
          <ProjectCard :project="projects.cloakandhammer"></ProjectCard>
          <ProjectCard :project="projects.blackjack"></ProjectCard>
          <ProjectCard :project="projects.lingo"></ProjectCard>
          <ProjectCard :project="projects.tetris"></ProjectCard>
          <ProjectCard :project="projects.cenduroyib"></ProjectCard>
        </div>
      </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "Projects",
  components: {ProjectCard},
  data() {
    return {
      toggleValue: true,
      projects: {
        loopsnelheid: {
          name: "Loopsnelheid",
          imgsrc: "loopsnelheid-app.png",
          desc: "Mobile App For Tracking Walkingspeed",
        },
        cloakandhammer: {
          name: "Cloak And Hammer",
          imgsrc: "cloakandhammer-game.png",
          desc: "Personal Game Project",
        },
        blackjack: {
          name: "Blackjack",
          imgsrc: "blackjack-api.png",
          desc: "Blackjack API",
        },
        lingo: {
          name: "Lingo",
          imgsrc: "lingo-api.png",
          desc: "Lingo API",
        },
        tetris: {
          name: "Tetris",
          imgsrc: "tetris-game.png",
          desc: "Single And Multiplayer Tetris Game",
        },
        cenduroyib: {
          name: "CendurOyib",
          imgsrc: "cenduroyib-website.png",
          desc: "Personal Website",
        },
      }
    }
  }
}
</script>

<style scoped>

</style>
