<template>
  <section class="mb-52" id="skills">
    <h2 class="text-2xl mb-10 underline-h2" id="skills-header" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">Skills</h2>
    <div class="flex flex-wrap justify-center max-w-4xl m-auto" style="grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));"
         data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-center">
      <SkillCard class="skillcard" :skill="java"></SkillCard>
      <SkillCard class="skillcard" :skill="python"></SkillCard>
      <SkillCard class="skillcard" :skill="git"></SkillCard>
      <SkillCard class="skillcard" :skill="godot"></SkillCard>
      <SkillCard class="skillcard" :skill="json"></SkillCard>
      <SkillCard class="skillcard" :skill="javascript"></SkillCard>
      <SkillCard class="skillcard" :skill="html"></SkillCard>
      <SkillCard class="skillcard" :skill="css"></SkillCard>
    </div>
  </section>

</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  name: "Skills",
  components: {SkillCard},
  data() {
    return {
      java: {
        name: "Java",
        imgsrc: "java-logo.png",
        text: "Statically typed backend language.",
        exp: "1,5 years"
      },
      python: {
        name: "Python",
        imgsrc: "python-logo.png",
        text: "Dynamically typed backend language.",
        exp: "1 year"
      },
      git: {
        name: "Git",
        imgsrc: "git-logo.png",
        text: "Version control system.",
        exp: "1,5 year"
      },
      godot: {
        name: "Godot",
        imgsrc: "godot-logo.png",
        text: "Object orientated game Engine.",
        exp: "2 years"
      },
      json: {
        name: "JSON",
        imgsrc: "json-logo.png",
        text: "Data interchange format.",
        exp: "1,5 years"
      },
      javascript: {
        name: "Javascript",
        imgsrc: "javascript-logo.png",
        text: "Dynamically typed frontend language.",
        exp: "1 years"
      },
      html: {
        name: "HTML",
        imgsrc: "html-logo.png",
        text: "Frontend markup language.",
        exp: "1,5 years"
      },
      css: {
        name: "CSS",
        imgsrc: "css-logo.png",
        text: "Frontend styling language.",
        exp: "1,5 years"
      }
    }
  },
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".skillcard"), {
      scale: 1.15,
      max: 18,
      transition: true,
      speed: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      flip: false
    });

    let skillcards = document.querySelectorAll('.skillcard');
    skillcards.forEach(skillcard => {
      skillcard.addEventListener('click', function () {
          flipCard(skillcard, !skillcard.classList.contains("flipped"))
      })
    })
    function flipCard(skillcard, boolean) {
      skillcard.classList.toggle("flipped");
      skillcard.vanillaTilt.flipElement(boolean);
    }
  }
}
</script>

<style scoped>

</style>
