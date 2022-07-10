<template>
  <section class="mb-48">
    <img class="mx-auto mb-14 rounded-3xl shadow-custombr" src="/profile-picture-zoomed-optimized.jpg" alt="Profile Picture"
         data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="top-center">
    <div>
      <h2 id="who-h2" class="text-2xl mb-6 underline-custom" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">Who am I?</h2>
      <p class="mx-auto px-6 sm:px-8" style="max-width: 60rem"
         data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#who-h2" data-aos-anchor-placement="center-center">
        Hi, my name is Cendur, I am {{ age }} years old and a third year student studying
        Software Development at the University of Applied Sciences in Utrecht - the Netherlands.
        Creative, cheerful and problem-solving with a passion for all things tech, my people skills help me bridge the gap
        between the tech and business world.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhoAmI",
  computed: {
    age() {
      let dateOfBirth = new Date("01/07/2001")
      let diffMs = (Date.now() - dateOfBirth);
      let age_dt = new Date(diffMs);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  }

}
</script>

<style scoped>
img {
  width: 250px;
}
</style>
