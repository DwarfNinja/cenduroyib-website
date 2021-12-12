<template>
  <Alert v-if="showalert" :formresponse="formresponse"></Alert>
  <section class="mb-44" id="contact">
    <h2 class="text-2xl mb-14 underline-h2">
      Contact me
    </h2>
    <form class="flex flex-col px-6 overflow-hidden" id="contact-form" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" v-on:submit.prevent="onSubmit">
      <input type="hidden" name="form-name" value="contact">
      <label class="mb-2">Name</label>
      <div  data-aos="fade" data-aos-duration="800" data-aos-anchor-placement="center-center">
        <input class="contact-input" type="text" placeholder="John Doe" name="name" required>
      </div>
      <label class="mb-2">Email</label>
      <div class="relative inline-block">
        <div data-aos="fade" data-aos-duration="800" data-aos-anchor-placement="center-center">
          <input v-bind:class="{ 'invalid-input': !validEmail }" class="contact-input" type="text" placeholder="johndoe@email.com" name="email" required>
        </div>
        <label v-if="!validEmail" class="absolute top-3 ml-36 bg-customred text-sm font-bold px-2 py-1 rounded">Not a valid email adres!</label>
      </div>
      <label class="mb-2">Message</label>
      <div data-aos="fade" data-aos-duration="800" data-aos-anchor-placement="top-center">
        <textarea class="contact-textarea" style="min-height: 14rem; min-width: 16.5rem; max-width: 27rem" placeholder="Your message here" name="message" required></textarea>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div>
        <button class="px-7 py-3.5 mb-10 rounded bg-white text-black font-bold shadow-custombr" type="submit">Send!</button>
      </div>
    </form>
  </section>
</template>

<script>
import Alert from "./Alert.vue";

export default {
  name: "Contact",
  components: {Alert},
  data() {
    return {
      showalert: false,
      formresponse: null,
      validEmail: true
    }
  },
  methods: {
    ValidateEmail: function (email) {
      this.validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      return this.validEmail;
    },

    onSubmit: function (event) {
      let contactForm = document.getElementById("contact-form");
      let data = new FormData(contactForm);
      this.ValidateEmail(data.get("email"))
      if (this.ValidateEmail(data.get("email")) === false) {
        console.log("Entered email is not a valid email");
        return;
      }
      let queryString = new URLSearchParams(data.toString());

      const formData = 'form-name=' + contactForm.name + '&' + queryString;
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      };

      fetch('/', options)
          .then((response) => {
            if (response.ok || response.status === 404) {
              this.showalert = true;
              this.formresponse = "success";
            }
            else {
              throw response;
            }
          })
          .catch((error) => {
            this.showalert = true;
            this.formresponse = "fail";
            console.log(error);
          });
    }
  },
  mounted() {
    let emailInputElement = document.getElementsByName("email")[0];
    emailInputElement.addEventListener('change', (event) => this.ValidateEmail(event.target.value));
  }
}
</script>

<style scoped>

.contact-input {
  @apply p-2.5 rounded text-black mb-7 shadow-custombr outline-none border-transparent focus:border-customyellow border-3;
}

.contact-textarea {
  @apply  mb-10 p-3 rounded text-black max-h-80 w-full shadow-custombr outline-none border-transparent focus:border-customyellow border-3;
}

button:hover {
  transition: transform .1s;
  transform: scale(1.08);
}

.invalid-input {
  @apply border-red-600 border-4 focus:border-red-600;
}
</style>
