<template>
  <div :class="`fixed bg-${alertDataDic[formresponse].colour} p-3 sm:p-5 top-5 left-1/20 sm:left-auto right-1/20 sm:right-2 rounded z-10`">
    <div class=""></div>
    <span :class="`${alertDataDic[formresponse].icon} mr-2`"></span>
    <span id="alert-message">{{ alertDataDic[formresponse].message }}</span>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["formresponse"],
  data() {
    return {
      alertDataDic: {
        success: {
          message: "Thank you, your message has been sent!",
          colour: "customgreen",
          icon: "fas fa-check-circle"
        },
        fail: {
          message: "Sorry there was a problem, your message could not be sent!",
          colour: "customred",
          icon: "fas fa-times-circle"
        }
      }
    }
  }
}
</script>

<style scoped>

div {
  animation: slideDown 0.6s ease-in-out;
}

@media (min-width: 640px) {
  div {
    animation: slideLeft 0.6s ease-in-out;
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(450px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-450px);
  }
  100% {
    transform: translateY(0px);
  }
}

</style>
