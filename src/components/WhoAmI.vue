<template>
  <section id="who" class="mb-48 scroll-m-24 sm:scroll-m-44">
    <img class="mx-auto mb-14 w-60 lgph:w-64 rounded-3xl shadow-custombr" src="/profile-picture.jpg" alt="Profile Picture"
         data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="top-center">
    <div>
      <h2 id="who-h2" class="h2-custom mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">Who am I?</h2>
      <p class="p-custom mx-auto px-6 sm:px-8" style="max-width: 60rem"
         data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#who-h2" data-aos-anchor-placement="center-center">
        Hi, my name is Cendur, I am {{ age }} years old and a {{ studyYearsOrdinal }} year student studying
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
      let dateOfBirth = new Date("01/07/2001");
      let diffMs = (Date.now() - dateOfBirth);
      let age_dt = new Date(diffMs);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    },

    studyYearsOrdinal() {
      let startOfStudy = new Date("09/01/2019");
      let diffMs = (Date.now() - startOfStudy);
      let study_dt = new Date(diffMs);
      return this.numberToOrdinal(Math.abs(study_dt.getUTCFullYear() - 1970) + 1);
    }
  },
  methods: {
    numberToOrdinal(number) {
      const ordinal = ['th', 'st', 'nd', 'rd'];
      const v = number % 100;
      return number + (ordinal[(v - 20) % 10] || ordinal[v] || ordinal[0]);
    }
  }
}
</script>

<style scoped>

</style>
