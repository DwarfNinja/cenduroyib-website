<template>
  <section id="services" class="mb-48 scroll-m-16 lg:scroll-m-28">
    <h2 id="services-h2" class="h2-custom mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">
      Services - Web Development
    </h2>
    <p class="p-custom mx-auto px-6 sm:px-8 mb-8" style="max-width: 60rem"
       data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#services-h2" data-aos-anchor-placement="center-center">
      Starting a small business? Want an online portfolio to show your skills?
      A custom website is what you need. We will sit down together and discuss the details.
      To get a website perfectly tailored to you!
      <br>
      <br>
      <b class="font-extrabold text-xl">Want to get started? Visit my company's website for more info!</b>
    </p>
    <div class="flex flex-col items-center font-bold mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-anchor="#services-h2" data-aos-anchor-placement="center-center">
      <button class="w-max mx-1 bg-white p-2 px-5 rounded-3xl text-lg text-black shadow-custombr mb-4
      transition-all transform duration-200 hover:scale-105" @click="openInNewTab('https://genesissoftwarecreations.com')">Genesis Software Creations</button>
    </div>
  </section>
</template>

<script>
import Product from "/src/domain/product.js";

export default {
  name: "Services",
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank', 'noreferrer');
    },
  }
}
</script>

<style scoped>
</style>
