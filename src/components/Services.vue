<template>
  <section class="bg-white text-black w-full md:w-11/12 p-5 mx-auto mb-52 sm:p-14 sm:max-w-8xl" id="services" style="box-shadow: 15px 15px 20px darkblue;">
    <h2 class="text-2xl mb-16 underline-h2">
      Services
    </h2>
    <div class="grid justify-center gap-7 sm:gap-14" id="services-grid-container">
      <div class="services-items text-white rounded-2xl sm:h-auto" id="service-software" style="background-color: #202020; border: 11px solid #959595; height: 550px"
           data-aos="fade-right" data-aos-duration="800">
        <div class="services-header">
          <i class="fas fa-terminal fa-2x mt-4 mb-4"></i>
          <h2 class="text-2xl mb-8 underline-h2">
            Custom Software
          </h2>
        </div>
        <div>
          <p class="text-justify p-6 pb-0" id="terminal" data-inviewport>
            Do you have a task that takes a lot of your time? A monotonous daily chore?
            Would it be great if you could automate that task?
            Need custom software that can make your life easier? Your at the right address!
            Contact me with details about your problem and we can discuss a solution for you!
          </p>
        </div>
      </div>
      <div class="services-items" id="service-website"
           data-aos="fade-left" data-aos-duration="800">
        <div class="services-header">
          <i class="far fa-window-maximize fa-2x mb-4"></i>
          <h2 class="text-2xl mb-8 underline-h2">
            Website
          </h2>
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-4 justify-center" id="service-website-elements-container">
          <div class="service-website-element w-2/5 p-2 rounded sm:p-3" style="background-color: #56C2F1;"
               data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">Starting a small business?</div>

          <div class="service-website-element w-1/2 p-3 rounded" style="background-color: #FEE94E;"
               data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" >Want an online portfolio to show your skills?</div>

          <div class="service-website-element w-5/12 p-3 rounded" style="background-color: #A1D72D;"
               data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500" >A custom-made website is what you need.</div>

          <div class="service-website-element text-white w-11/12 p-3 rounded" style="background-color: #D5322F;"
               data-aos="flip-up" data-aos-duration="1000" data-aos-delay="2000" >We will sit down together and discuss the details.</div>

          <div class="service-website-element text-white w-3/5 p-3 rounded" style="background-color: #1C28A5;"
               data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2500" >To get a website perfectly tailored to you!</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  mounted() {

    let terminal = document.getElementById("terminal");

    let typewriterTerminal = new Typewriter(terminal, {
      loop: false,
      delay: 35,
      autoStart: false
    });

    let typewriterDic = {"terminal": typewriterTerminal}

    typewriterTerminal.typeString(
        "Do you have a task that takes a lot of your time? A monotonous daily chore?\n" +
        "Would it be great if you could automate that task?\n" +
        "Need custom software that can make your life easier? Your at the right address!\n" +
        "Contact me with details about your problem and we can discuss a solution for you!");


    const isInViewport = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.target.getAttribute("data-inviewport") !== "true") {
            entry.target.setAttribute("data-inviewport", entry.isIntersecting)
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(isInViewport, {rootMargin: "0px 0px -150px 0px"});
    const obsOptions = {};

    let mutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === "attributes") {
          if (mutation.target.getAttribute("data-inviewport") === "true") {
            typewriterDic[mutation.target.id].start();
          }
        }
      });
    });

    // Attach Intersection and Mutation observer to every data-inviewport element:
    const elements_inViewport = document.querySelectorAll("[data-inviewport]");
    elements_inViewport.forEach(element => {
      intersectionObserver.observe(element, obsOptions);
      mutationObserver.observe(element, {attributes: true})
    });

  }
}
</script>

<style scoped>

#services-grid-container {
  grid-template-columns: repeat(2, minmax(auto, 38rem));
}

.services-items {
  padding: 1.2rem 1.5rem 2rem 1.5rem;
}

#service-website {
  border: 3px solid #202020;
  border-top: 1.4rem solid #202020;
  border-radius: 15px 15px  0 0;
}

@media (max-width: 1400px) {

  #services-grid-container {
    grid-template-columns: repeat(1,  minmax(auto, 38rem));
  }

  .services-items {
    padding: 0.5rem 0.8rem 1.3rem 0.8rem;
  }
}

</style>
