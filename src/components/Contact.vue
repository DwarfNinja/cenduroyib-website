<template>
  <Alert v-if="showAlert" :formresponse="formResponse"></Alert>
  <div hidden class="bg-customgreen"></div>
  <section class="mb-44" id="contact">
    <h2 class="text-2xl mb-14 underline-h2">
      Contact me
    </h2>
    <form class="flex flex-col px-6 overflow-hidden" id="contact-form" name="contact" method="post" data-netlify-recaptcha="true" data-netlify="true" v-on:submit.prevent="onSubmit">
      <input type="hidden" name="form-name" value="contact">
      <label class="mb-2 mt-3.5">Name</label>
      <div  data-aos="fade" data-aos-duration="800" data-aos-anchor="#contact" data-aos-anchor-placement="center-center">
        <input v-model="form.name" class="contact-input" type="text" placeholder="John Doe" name="name" required>
      </div>
      <label class="mb-2 mt-3.5">Email</label>
      <div class="relative inline-block">
        <div data-aos="fade" data-aos-duration="800" data-aos-anchor="#contact" data-aos-anchor-placement="center-center">
          <input v-model="form.email" v-bind:class="{ 'invalid-input': invalidEmail }" class="contact-input" type="text" placeholder="johndoe@email.com" name="email" required>
        </div>
        <label v-if="invalidEmail" id="invalid-email-label">Not a valid email adres!</label>
      </div>
      <label class="mb-2 mt-3.5">Message</label>
      <div data-aos="fade" data-aos-duration="800" data-aos-anchor="#contact" data-aos-anchor-placement="center-center">
        <textarea v-model="form.message" class="contact-textarea" style="min-height: 14rem; min-width: 16.5rem; max-width: 27rem" placeholder="Your message here" name="message" required></textarea>
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
      showAlert: false,
      formResponse: null,
      invalidEmail: true,
      form: {
        name: "",
        email: "",
        message: ""
      }
    }
  },
  methods: {
    encode: function (data) {
      return Object.keys(data)
      .map(
          (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
    },

    validateEmail: function (email) {
      this.invalidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      return this.invalidEmail;
    },

    createAlert: function (formResponse) {
      this.showAlert = true;
      this.formResponse = formResponse
      window.setTimeout(() => {
        this.showAlert = false;
      }, 6000);
    },

    onSubmit: function () {
      if (this.validateEmail(this.form.email) === false) {
        console.log("Entered email is not a valid email");
        return;
      }

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      };

      fetch('/', options)
          .then((response) => {
            if (response.ok) {
              this.createAlert("success");
            }
            else {
              throw response;
            }
          })
          .catch((error) => {
            this.createAlert("fail");
            console.log(error);
          });
    }
  },
  mounted() {
    let emailInputElement = document.getElementsByName("email")[0];
    emailInputElement.addEventListener('change', (event) => this.validateEmail(event.target.value));
  }
}
</script>

<style scoped>

.contact-input {
  @apply p-2.5 rounded text-black mb-3.5 shadow-custombr outline-none border-transparent focus:border-customyellow border-3;
}

.contact-textarea {
  @apply  mb-10 p-3 rounded text-black max-h-80 w-full shadow-custombr outline-none border-transparent focus:border-customyellow border-3;
}

button:hover {
  transition: transform .1s;
  transform: scale(1.08);
}

#invalid-email-label {
  @apply absolute top-3 ml-36 bg-customred text-sm font-bold px-2 py-1 rounded;
}

@media (max-width: 640px) {
  #invalid-email-label {
    @apply static top-0 ml-0 bg-customred text-sm font-bold px-2 py-1 rounded;
  }
}

.invalid-input {
  @apply border-red-600 border-4 focus:border-red-600;
}

</style>
