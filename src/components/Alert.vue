<template>
  <div :class="`fixed ${alertDataDic[formresponse].colour} p-3 sm:p-5 top-5 left-1/20 sm:left-auto right-1/20 sm:right-2 rounded z-10`">
    <div></div>
    <span :class="`${alertDataDic[formresponse].icon} mr-2`"></span>
    <span>{{ alertDataDic[formresponse].message }}</span>
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
          colour: "bg-customgreen",
          icon: "fas fa-check-circle"
        },
        fail: {
          message: "Sorry there was a problem, your message could not be sent!",
          colour: "bg-customred",
          icon: "fas fa-times-circle"
        }
      }
    };
  }
}
</script>

<style scoped>
div {
  animation: slideDown 0.6s ease-in-out forwards, slideDown 0.6s 4s ease-in-out reverse forwards;
}

@media (min-width: 640px) {
  div {
    animation: slideLeft 0.6s ease-in-out forwards, slideLeft 0.6s 4s ease-in-out reverse forwards;
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(110%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-130%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
