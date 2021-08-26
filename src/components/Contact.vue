<template>
  <section class="mb-44" id="contact">
    <h2 class="text-2xl mb-14 underline-h2">
      Contact me
    </h2>
    <form class="flex flex-col px-6 overflow-hidden" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
      <input type="hidden" name="form-name" value="contact">
      <label class="mb-2">Name</label>
      <label  data-aos="flip-up" data-aos-duration="800" data-aos-anchor-placement="center-center">
        <input class="contact-input focus-border" type="text" placeholder="John Doe" name="name" required>
      </label>
      <label class="mb-2">Email</label>
      <label data-aos="flip-up" data-aos-duration="800" data-aos-anchor-placement="center-center">
        <input class="contact-input" type="text" placeholder="johndoe@email.com" name="email" required>
      </label>
      <label class="mb-2">Message</label>
      <label data-aos="flip-up" data-aos-duration="800" data-aos-anchor-placement="top-center">
        <textarea class="contact-textarea mb-10 p-3 rounded text-black max-h-80 w-full shadow-custombr" style="min-height: 14rem; min-width: 16.5rem; max-width: 27rem" placeholder="Your message here" name="message" required></textarea>
      </label>
      <div data-netlify-recaptcha="true"></div>
      <div>
        <button class="px-7 py-3.5 mb-10 rounded bg-white text-black font-bold shadow-custombr" type="submit">Send!</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.contact-input {
  @apply p-3 rounded text-black mb-7 shadow-custombr;
}

button:hover {
  transform: scale(1.07);
}

</style>
