<template>
  <section class="bg-white text-black w-full md:w-11/12 p-5 mx-auto mb-52 sm:p-14 sm:max-w-8xl shadow-custombr" id="services">
    <h2 class="text-2xl mb-16 underline-custom">
      Services
    </h2>
    <div class="grid justify-center gap-7 sm:gap-14" id="services-grid-container">

      <div class="services-items text-white rounded-2xl sm:h-auto" id="service-software" style="background-color: #202020; border: 11px solid #959595; height: 550px"
           data-aos="fade-right" data-aos-duration="800" data-aos-anchor-placement="center-center">
        <div class="services-header">
          <lord-icon
              src="https://cdn.lordicon.com/anihkfxp.json"
              trigger="loop"
              colors="primary:#ffffff,secondary:#f7b801"
              stroke="60"
              style="width:75px;height:75px;">
          </lord-icon>
          <h2 class="text-2xl mb-8 underline-custom" style="text-decoration-color: white;">
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
           data-aos="fade-left" data-aos-duration="800" data-aos-anchor-placement="center-center">
        <div class="services-header">
          <lord-icon
              src="https://cdn.lordicon.com/qhgmphtg.json"
              trigger="loop"
              delay="1000"
              colors="primary:#000000,secondary:#f7b801"
              stroke="50"
              style="width:75px;height:75px">
          </lord-icon>
          <h2 class="text-2xl mb-12 underline-custom" style="text-decoration-color: black;">
            Website
          </h2>
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-4 justify-center overflow-hidden" id="service-website-elements-container">
          <div class="serv-web-element w-2/5 text-center" style="background-color: #56C2F1;"
               data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor="#center-serv-web-element" data-aos-anchor-placement="center-center">Starting a small business?</div>

          <div class="serv-web-element w-1/2" style="background-color: #FEE94E;"
               data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1200" data-aos-anchor="#center-serv-web-element" data-aos-anchor-placement="center-center">Want an online portfolio to show your skills?</div>

          <div id="center-serv-web-element" class="serv-web-element w-7/12 sm:w-5/12" style="background-color: #A1D72D;"
               data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1900" data-aos-anchor="#center-serv-web-element" data-aos-anchor-placement="center-center">A custom-made website is what you need.</div>

          <div class="serv-web-element text-white w-11/12" style="background-color: #D5322F;"
               data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2600" data-aos-anchor="#center-serv-web-element" data-aos-anchor-placement="center-center">We will sit down together and discuss the details.</div>

          <div class="serv-web-element text-white w-4/5 p-2" style="background-color: #1C28A5;"
               data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="3300" data-aos-anchor="#center-serv-web-element" data-aos-anchor-placement="center-center">To get a website perfectly tailored to you!</div>
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

    const intersectionObserver = new IntersectionObserver(isInViewport, {rootMargin: "0px 0px -300px 0px"});
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

    let serviceSoftware = document.getElementById("service-software");
    let serviceWebsite = document.getElementById("service-website");

    if (window.matchMedia("(min-width: 640px)").matches) {
      serviceSoftware.setAttribute("data-aos","fade-right");
      serviceSoftware.setAttribute("data-aos-duration","800");
      serviceSoftware.setAttribute("data-aos-anchor-placement","center-center");

      serviceWebsite.setAttribute("data-aos","fade-left");
      serviceWebsite.setAttribute("data-aos-duration","800");
      serviceWebsite.setAttribute("data-aos-anchor-placement","center-center");

    } else {
      removeAOSAttributes(serviceSoftware);
      removeAOSAttributes(serviceWebsite);
    }

    function removeAOSAttributes(element) {
      element.removeAttribute("data-aos");
      element.removeAttribute("data-aos-duration");
      element.removeAttribute("data-aos-anchor-placement");
    }
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

.serv-web-element{
  @apply p-2 sm:p-3 rounded;
}

.serv-web-element[data-aos-delay='3300'] [data-aos],
[data-aos][data-aos][data-aos-delay='3300'] {
  transition-delay: 3300ms;
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
