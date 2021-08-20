<template>
  <section id="title">
    <div class="mb-72">
      <h1 class="text-white text-5xl font-extralight mb-6" id="titleh1">Cendur Oyib</h1>
      <h2 class="text-white text-xl font-light" data-aos="fade-up" data-aos-delay="1250" data-aos-duration="800">Software tailored to you &nbsp;</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Title",
  mounted() {

    let titleH1 = document.getElementById("titleh1");

    let typewriterTitle = new Typewriter(titleH1, {
      loop: false,
      delay: 80,
    });

    typewriterTitle.typeString("Cendur Oyib");
    typewriterTitle.pauseFor(1000)
    typewriterTitle.start()

  }
}
</script>

<style scoped>

</style>
