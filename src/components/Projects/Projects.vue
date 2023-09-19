<template>
  <section id="projects" class="scroll-m-16 lg:scroll-m-28 bg-white text-black w-full md:w-[93%] pt-9 pb-16 mx-auto mb-52 sm:max-w-8xl shadow-custombr">
    <h2 id="projects-h2" class="h2-custom mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">
      Projects
    </h2>
      <p class="p-custom mx-auto px-6 sm:px-8 mb-8" style="max-width: 60rem"
         data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#projects-h2" data-aos-anchor-placement="center-center">
          A display of a few of my completed projects.
      </p>
      <div class="flex justify-start align-top h-full px-5 md:px-12 lg:px-16">
        <div class="flex flex-wrap mx-auto mb-auto justify-center" style="grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));">
          <ProjectCard class="projectcard" :project="projects.loopsnelheid" data-animdelay="0"></ProjectCard>
          <ProjectCard class="projectcard" :project="projects.cloakandhammer" data-animdelay="300"></ProjectCard>
          <ProjectCard class="projectcard" :project="projects.blackjack" data-animdelay="600"></ProjectCard>
          <ProjectCard class="projectcard" :project="projects.lingo" data-animdelay="900"></ProjectCard>
          <ProjectCard class="projectcard" :project="projects.tetris" data-animdelay="1200"></ProjectCard>
          <ProjectCard class="projectcard" :project="projects.cenduroyib" data-animdelay="1500"></ProjectCard>
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
    };
  },
  mounted() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      VanillaTilt.init(document.querySelectorAll(".projectcard"), {
        scale: 1.10,
        max: 0,
        transition: true,
        speed: 300,
        easing: "cubic-bezier(.03,.98,.52,.99)"
      });

      let projectCards = Array.from(document.getElementsByClassName("projectcard"));
      projectCards.forEach(projectCard => {
        projectCard.style.transitionDelay = projectCard.dataset.animdelay.toString() + "ms";
      });
    }
  }
}
</script>

