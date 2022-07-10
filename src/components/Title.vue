<template>
  <section id="title">
    <div class="mb-72">
      <h1 class="text-white text-4xl sm:text-5xl font-normal mb-6 underline-custom" data-aos="fade-up" data-aos-duration="800">Cendur Oyib</h1>
      <h2 id="subtitle" class="text-white text-lg sm:text-2xl font-light"></h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Title",
  mounted()
  {

    let subtitle = document.getElementById("subtitle");

    new Typewriter(subtitle, {
      strings: ["Junior Developer", "Student", "Game Developer", "Joyful"],
      autoStart: true,
      loop: true,
      delay: 80,
    });
    document.getElementsByClassName("Typewriter__cursor")[0].style.color = "#F7B801";
  }

}
</script>
