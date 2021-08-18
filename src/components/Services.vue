<template>
  <section class="bg-white text-black m-auto p-14 w-4/5">
    <h2 class="text-2xl mb-16 underline-h2">
      Services
    </h2>
    <div class="grid justify-center gap-14" id="services-grid-container">
      <div  data-aos="fade-right" data-aos-duration="800" class="services-items text-white rounded-2xl" style="background-color: #202020; border: 11px solid #959595;">
        <div class="services-header">
          <i class="fas fa-terminal fa-2x"></i>
          <h2 class="text-2xl mb-16 underline-h2">
            Custom Software
          </h2>
        </div>
        <div>
          <p class="text-justify p-6 pb-0">
            Do you have a task that takes a lot of your time? A monotonous daily chore?
            Would it be great if you could automate that task?
            Need custom software that can make your life easier? Your at the right address!
            Contact me with details about your problem and we can discuss a solution for you!
          </p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="800" class="services-items" id="service-website">
        <div class="services-header">
          <i class="far fa-window-maximize fa-2x"></i>
          <h2 class="text-2xl mb-16 underline-h2">
            Website
          </h2>
        </div>
        <div class="flex flex-wrap gap-4 justify-center" id="service-website-elements-container">
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" class="service-website-element w-2/5" style="background-color: #56C2F1;">Starting a small business?</div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" class="service-website-element w-1/2" style="background-color: #FEE94E;">Want an online portfolio to show your skills?</div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500" class="service-website-element w-6/12" style="background-color: #A1D72D;">A custom-made website is what you need.</div>
          <div data-aos="flip-up" data-aos-duration="1000" data-aos-delay="2000" class="service-website-element text-white w-11/12" style="background-color: #D5322F;">We will sit down together and discuss the details.</div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2500" class="service-website-element text-white w-3/5" style="background-color: #1C28A5;">To get a website perfectly tailored to you!</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>

.services-items {
  padding: 1.2rem 1.5rem 2rem 1.5rem;
}

#service-website {
  color: black;
  border: 3px solid #202020;
  border-top: 1.4rem solid #202020;
  border-radius: 15px 15px  0 0;
}

.service-website-element {
  @apply p-3 rounded;
}

#services-grid-container {
  grid-template-columns: repeat(2, minmax(auto, 38rem));
}

@media (max-width: 1400px) {
  section {
    @apply w-full p-5;
  }

  #services-grid-container {
    grid-template-columns: repeat(1,  minmax(auto, 38rem));
    @apply gap-7
  }

  .services-items {
    padding: 0.5rem 0.8rem 1.3rem 0.8rem;
  }

  #service-website-elements-container {
    @apply gap-2
  }

  .service-website-element {
    padding: 0.5rem;
    border-radius: 5px;
  }
}

</style>
