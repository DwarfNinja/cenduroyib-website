<template>
  <section id="skills" class="scroll-m-28 lg:scroll-m-40 mb-48">
    <h2 id="skills-h2" class="h2-custom mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">Skills</h2>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#skills-h2" data-aos-anchor-placement="center-center">
      <div>
        <Toggle v-model="toggleValue" on-label="Technologies" off-label="Languages" class="font-bold mb-5" :classes="{
          container: 'inline-block rounded-full outline-none',
          toggle: 'flex w-52 h-10 rounded-full relative cursor-pointer transition items-center box-content border-3 text-xs leading-none',
          toggleOn: 'bg-customlightpurple border-customlightpurple justify-start text-white',
          toggleOff: 'bg-customlightpurple border-customlightpurple justify-end text-white',
          handle: 'inline-block bg-white w-16 h-10 top-0 rounded-full absolute transition-all',
          handleOn: 'left-full transform -translate-x-full duration-300',
          handleOff: 'left-0 transform translate-x-0 duration-300',
          label: 'text-center p-5 whitespace-nowrap select-none text-base'}"
        >
          <template v-slot:label="{ checked, classList }">
            <span id="toggle-label" :class="classList.label" v-bind:class="{'is-toggle-off': !toggleValue}">{{ checked ? 'Technologies' : 'Languages'}}</span>
          </template>
        </Toggle>
      </div>
      <div class="relative min-h-full max-w-4xl m-auto">
        <div class="flex justify-start align-top h-full pt-6 px-3 lgph:px-5">
          <div class="flex flex-wrap mx-auto mb-auto justify-center max-w-4xl" style="grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));">
            <SkillCard v-for="skill in technologies" v-show="toggleValue" class="skillcard" :skill="skill"></SkillCard>
            <SkillCard v-for="skill in languages" v-show="!toggleValue" class="skillcard" :skill="skill"></SkillCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Toggle from '@vueform/toggle'
import SkillCard from "./SkillCard.vue";

export default {
  name: "Skills",
  components: {SkillCard, Toggle},
  data() {
    return {
      toggleValue: false,
      languages: {
        java: {
          name: "Java",
          imgsrc: "java-logo.png",
          start: new Date("02/01/2020"),
          end: new Date(Date.now()),
          level: "w-[80%]"
        },
        python: {
          name: "Python",
          imgsrc: "python-logo.png",
          start: new Date("01/20/2020"),
          end: new Date("01/20/2021"),
          level: "w-[55%]"
        },
        dart: {
          name: "Dart",
          imgsrc: "dart-logo.png",
          start: new Date("03/10/2022"),
          end: new Date(Date.now()),
          level: "w-[80%]"
        },
        csharp: {
          name: "C#",
          imgsrc: "csharp-logo.png",
          start: new Date("11/24/2021"),
          end: new Date(Date.now()),
          level: "w-[80%]"
        },
        javascript: {
          name: "JavaScript",
          imgsrc: "javascript-logo.png",
          start: new Date("04/14/2020"),
          end: new Date(Date.now()),
          level: "w-[70%]"
        },
        html: {
          name: "HTML",
          imgsrc: "html-logo.png",
          start: new Date("04/14/2020"),
          end: new Date(Date.now()),
          level: "w-[70%]"
        },
        css: {
          name: "CSS",
          imgsrc: "css-logo.png",
          start: new Date("04/14/2020"),
          end: new Date(Date.now()),
          level: "w-[70%]"
        },
      },
      technologies: {
        flutter: {
          name: "Flutter",
          imgsrc: "flutter-logo.png",
          start: new Date("03/10/2022"),
          end: new Date(Date.now()),
          level: "w-[80%]"
        },
        godot: {
          name: "Godot",
          imgsrc: "godot-logo.png",
          start: new Date("02/22/2020"),
          end: new Date(Date.now()),
          level: "w-[90%]"
        },
        jira: {
          name: "Jira",
          imgsrc: "jira-logo.png",
          start: new Date("03/10/2022"),
          end: new Date(Date.now()),
          level: "w-[60%]"
        },
        docker: {
            name: "Docker",
            imgsrc: "docker-logo.png",
            start: new Date("03/10/2022"),
            end: new Date(Date.now()),
            level: "w-[45%]"
        },
        figma: {
          name: "Figma",
          imgsrc: "figma-logo.png",
          start: new Date("03/10/2022"),
          end: new Date(Date.now()),
          level: "w-[75%]"
        },
        vuejs: {
          name: "VueJs",
          imgsrc: "vue-logo.png",
          start: new Date("08/16/2021"),
          end: new Date(Date.now()),
          level: "w-[65%]"
        },
        springboot: {
          name: "Spring Boot",
          imgsrc: "springboot-logo.png",
          start: new Date("09/10/2021"),
          end: new Date(Date.now()),
          level: "w-[55%]"
        },
        git: {
          name: "Git",
          imgsrc: "git-logo.png",
          start: new Date("01/20/2020"),
          end: new Date(Date.now()),
          level: "w-[70%]"
        },
        jersey: {
          name: "Jersey",
          imgsrc: "eclipsejersey-logo.png",
          start: new Date("05/01/2020"),
          end: new Date("07/01/2021"),
          level: "w-[40%]"
        }
      },
      isMobile: false
    };
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
          flipCard(skillcard, !skillcard.classList.contains("flipped"));
      });
    });
    function flipCard(skillcard, boolean) {
      skillcard.classList.toggle("flipped");
      skillcard.vanillaTilt.flipElement(boolean);
    }

    let isMobile = false;
    checkIfMobile();
    window.addEventListener('resize', () => {checkIfMobile();});
    function checkIfMobile() {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        if (isMobile === true) {
          skillcards.forEach(skillcard => {
            skillcard.vanillaTilt.settings.scale = 1.25;
            skillcard.vanillaTilt.settings.max = 18;
            isMobile = false;
          });
        }
      } else {
        if (isMobile === false) {
          skillcards.forEach(skillcard => {
            skillcard.vanillaTilt.settings.scale = 1;
            skillcard.vanillaTilt.settings.max = 0;
            isMobile = true;
          });
        }
      }
    }
  }
}
</script>

<style scoped>
.is-toggle-off {
  @apply mr-2;
}
</style>
