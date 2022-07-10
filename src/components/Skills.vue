<template>
  <section id="skills">
    <h2 id="skills-h2" class="text-2xl mb-16 underline-h2" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">Skills</h2>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#skills-h2" data-aos-anchor-placement="center-center">
      <div>
        <Toggle v-model="toggleValue" on-label="Languages" off-label="Technologies" class="font-bold mb-5" :classes="{
          container: 'inline-block rounded-full outline-none',
          toggle: 'flex w-52 h-10 rounded-full relative cursor-pointer transition items-center box-content border-3 text-xs leading-none',
          toggleOn: 'bg-customlightpurple border-customlightpurple justify-start text-white',
          toggleOff: 'bg-customlightpurple border-customlightpurple justify-end text-white',
          handle: 'inline-block bg-white w-16 h-10 top-0 rounded-full absolute transition-all',
          handleOn: 'left-full transform -translate-x-full duration-300',
          handleOff: 'left-0 transform translate-x-0 duration-300',
          label: 'text-center p-5 whitespace-nowrap select-none text-base'}"
        />
      </div>
      <div class="relative min-h-full max-w-4xl m-auto">
        <div class="flex justify-start align-top h-full pt-6 pb-44">
          <div class="flex flex-wrap mx-auto mb-auto justify-center max-w-4xl" style="grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));">
            <SkillCard v-for="skill in languages" v-show="toggleValue" class="skillcard" :skill="skill"></SkillCard>
            <SkillCard v-for="skill in technologies" v-show="!toggleValue" class="skillcard" :skill="skill"></SkillCard>
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
      toggleValue: true,
      languages: {
        java: {
          name: "Java",
          imgsrc: "java-logo.png",
          exp: "2.5 years",
          level: "w-[80%]"
        },
        python: {
          name: "Python",
          imgsrc: "python-logo.png",
          exp: "1 year",
          level: "w-[55%]"
        },
        dart: {
          name: "Dart",
          imgsrc: "dart-logo.png",
          exp: "0,5 year",
          level: "w-[60%]"
        },
        csharp: {
          name: "C#",
          imgsrc: "csharp-logo.png",
          exp: "1 year",
          level: "w-[80%]"
        },
        javascript: {
          name: "JavaScript",
          imgsrc: "javascript-logo.png",
          exp: "1,5 years",
          level: "w-[65%]"
        },
        html: {
          name: "HTML",
          imgsrc: "html-logo.png",
          exp: "1,5 years",
          level: "w-[60%]"
        },
        css: {
          name: "CSS",
          imgsrc: "css-logo.png",
          exp: "1,5 years",
          level: "w-[60%]"
        },
      },
      technologies: {
        flutter: {
          name: "Flutter",
          imgsrc: "flutter-logo.png",
          exp: "0,5 years",
          level: "w-[65%]"
        },
        godot: {
          name: "Godot",
          imgsrc: "godot-logo.png",
          exp: "3 years",
          level: "w-[90%]"
        },
        jira: {
          name: "Jira",
          imgsrc: "jira-logo.png",
          exp: "1 year",
          level: "w-[60%]"
        },
        figma: {
          name: "Figma",
          imgsrc: "figma-logo.png",
          exp: "1 year",
          level: "w-[65%]"
        },
        vuejs: {
          name: "VueJs",
          imgsrc: "vue-logo.png",
          exp: "1.5 year",
          level: "w-[65%]"
        },
        springboot: {
          name: "Spring Boot",
          imgsrc: "springboot-logo.png",
          exp: "1.5 years",
          level: "w-[55%]"
        },
        git: {
          name: "Git",
          imgsrc: "git-logo.png",
          exp: "2 years",
          level: "w-[70%]"
        },
        jersey: {
          name: "Jersey",
          imgsrc: "eclipsejersey-logo.png",
          exp: "1 year",
          level: "w-[40%]"
        }
      },
      isMobile: false
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

    let isMobile = false
    checkIfMobile()
    window.addEventListener('resize', () => {checkIfMobile()})
    function checkIfMobile() {
      if (window.matchMedia("(min-width: 640px)").matches) {
        if (isMobile === true) {
          skillcards.forEach(skillcard => {
            skillcard.vanillaTilt.settings.scale = 1.25;
            skillcard.vanillaTilt.settings.max = 18;
            isMobile = false;
          })
        }
      } else {
        if (isMobile === false) {
          skillcards.forEach(skillcard => {
            skillcard.vanillaTilt.settings.scale = 1;
            skillcard.vanillaTilt.settings.max = 0;
            isMobile = true;
          })
        }
      }
    }
  }
}
</script>
