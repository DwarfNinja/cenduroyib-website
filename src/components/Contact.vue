<template>
  <section class="mb-52" id="contact">
    <h2 class="text-2xl mb-14 underline-h2">
      Contact me
    </h2>
    <form class="flex flex-col px-6" method="POST" data-netlify="true">
      <label class="mb-2">Name</label>
      <label>
        <input class="contact-input focus-border" type="text" placeholder="John Doe" name="name" required>
      </label>
      <label class="mb-2">Email</label>
      <label>
        <input class="contact-input" type="text" placeholder="johndoe@email.com" name="email" required>
      </label>
      <label class="mb-2">Message</label>
      <label>
        <textarea class="contact-textarea p-3 text-black max-h-80 w-full shadow-custombr" style="min-height: 14rem; min-width: 16.5rem; max-width: 27rem" placeholder="Your message here" name="email" required></textarea>
      </label>
      <div data-netlify-recaptcha="true"></div>
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
  @apply p-3 text-black mb-6 shadow-custombr;
}

</style>
