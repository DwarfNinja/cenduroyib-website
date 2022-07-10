<template>
  <section id="about-website" class="mb-20">
    <h2 id="about-h2" class="text-2xl mb-10 underline-h2" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="top-center">
      About this website
    </h2>
    <div class="mx-auto px-8 w-full" style="max-width: 55rem" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#about-h2" data-aos-anchor-placement="top-center">
      <p>
        This website was completely built by me during the summer holiday of 2021.
        Originally this website was built with pure vanilla HTML, CSS and Javascript but has afterwards been fully overhauled and
        built using: <b><i>Vue.js</i></b>, <b><i>TailwindCSS</i></b> and making use of <b><i>Vite</i></b> for building and deployment.
        Furthermore the site makes use of a few different libraries: <b><i>AOS</i></b>,
        <b><i>Typewriter.js</i></b> and a personally modified version of <b><i>VanillaTilt.js</i></b>.<br>
        I hope you enjoyed!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>
