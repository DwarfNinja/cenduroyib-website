<template>
  <section id="services" class="mb-48 scroll-m-16 lg:scroll-m-28">
    <h2 id="services-h2" class="h2-custom mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="center-center">
      Services
    </h2>
    <p class="p-custom mx-auto px-6 sm:px-8 mb-8" style="max-width: 60rem"
       data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-anchor="#services-h2" data-aos-anchor-placement="center-center">
      Starting a small business? Want an online portfolio to show your skills?
      A custom website is what you need. We will sit down together and discuss the details.
      To get a website perfectly tailored to you!
      <br>
      <br>
      Don't fit in a box below? Get in contact so we can create a personal solution that fits you.
    </p>
    <div class="flex flex-col items-center font-bold mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-anchor="#services-h2" data-aos-anchor-placement="center-center">
      <p class="w-max mx-1 bg-white p-2 px-5 rounded-3xl text-lg text-black shadow-custombr mb-4">Current clients: 1</p>
    </div>
    <div class="w-full m-auto flex justify-center flex-wrap gap-5">
      <PricingPlan plan-name="Simple"
                   pricing-onetime="999"
                   pricing-monthly="15"
                   package-level="0"
                   :products="simpleProducts"
                   description="For individuals looking to establish their online presence"
                   data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      </PricingPlan>
      <PricingPlan plan-name="Standard"
                   pricing-onetime="1499"
                   pricing-monthly="30"
                   package-level="1"
                   :products="standardProducts"
                   description="Ideal for aspiring entrepreneurs starting their online journey"
                   data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
      </PricingPlan>
      <PricingPlan plan-name="Complete"
                   pricing-onetime="2499"
                   pricing-monthly="80"
                   package-level="2"
                   :products="completeProducts"
                   description="Tailored for small businesses and entrepreneurs seeking that extra edge"
                   data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
      </PricingPlan>
      <PricingPlan plan-name="Premium"
                   pricing-onetime="3499"
                   pricing-monthly="125"
                   is-starting-price="true"
                   package-level="3"
                   :products="premiumProducts"
                   description="Designed for small to medium businesses and those in need of a robust e-commerce solution"
                   data-aos="fade-up" data-aos-duration="800" data-aos-delay="1100">
      </PricingPlan>
    </div>
  </section>
</template>

<script>
import PricingPlan from "./PricingPlan.vue";
import Product from "/src/domain/product.js";

export default {
  name: "Services",
  components: {PricingPlan},
  data() {
    return {
      simpleProducts: [
        new Product("Custom Design", false, null),
        new Product("Development", false, null),
        new Product("Hosting", false, null),
        new Product("1 Domain", false, null),
        new Product("Up to 2 pages", false, null),
        new Product("Daily backups", false, null),
        new Product("Secure server", false, null),
        new Product("TLS-certificate", false, null),
        new Product("Simple Search Engine Optimization", false, null),
        new Product("Fully Responsive", false, null),
        new Product("1 Revision during the design phase", false, "Extra revisions can be added for €120 per revision"),
      ],
      standardProducts: [
        new Product("Custom Design", false, null),
        new Product("Development", false, null),
        new Product("Hosting", false, null),
        new Product("1 Domain", false, null),
        new Product("Up to 5 pages", true, null),
        new Product("Daily backups", false, null),
        new Product("Secure server", false, null),
        new Product("TLS-certificate", false, null),
        new Product("Search Engine Optimization", true, null),
        new Product("Fully Responsive", false, null),
        new Product("1 Revision during the design phase", false, "Extra revisions can be added for €120 per revision"),
        new Product("Basic Analytics", true, null),
        new Product("Resolving problems and updating content - 1 hour a month", true, "Extra support hours can be added for €30 per hour")
      ],
      completeProducts: [
        new Product("Custom Design", false, null),
        new Product("Development", false, null),
        new Product("Hosting", false, null),
        new Product("2 Domains", true, null),
        new Product("Up to 10 pages", true, null),
        new Product("Daily backups", false, null),
        new Product("Secure server", false, null),
        new Product("TLS-certificate", false, null),
        new Product("Search Engine Optimization", true, null),
        new Product("Fully Responsive", false, null),
        new Product("2 Revisions during the design phase", true, "Extra revisions can be added for €120 per revision"),
        new Product("Advanced Analytics", true, null),
        new Product("Resolving problems and updating content - 2 hours a month", true, "Extra support hours can be added for €30 per hour"),
        new Product("Worldwide high performance CDN", true, "Receive extremely fast page loads across the globe"),
        new Product("Content Management System", true, "Easily create, edit, and publish website content without technical expertise\n\nUp to 2000 CMS items")

      ],
      premiumProducts: [
        new Product("Custom Design", false, null),
        new Product("Development", false, null),
        new Product("Hosting", false, null),
        new Product("3 Domains", true, null),
        new Product("Up to 15 pages", true, null),
        new Product("Daily backups", false, null),
        new Product("Secure server", false, null),
        new Product("TLS-certificate", false, null),
        new Product("Search Engine Optimization", true, null),
        new Product("Fully Responsive", false, null),
        new Product("3 Revisions during the design phase", true, "Extra revisions can be added for €120 per revision"),
        new Product("Advanced Analytics", true, null),
        new Product("Resolving problems and updating content - 3 hours a month", true, "Extra support hours can be added for €30 per hour"),
        new Product("Worldwide high performance CDN", true, "Receive extremely fast page loads across the globe"),
        new Product("Content Management System", true, "Easily create, edit, and publish website content without technical expertise\n\nUp to 2000 CMS items"),
        new Product("eCommerce integration", true, "Establish and manage your online store, process payments securely, and streamline order fulfillment\n\nUp to 500 eCommerce items")
      ],
    }
  }
}
</script>

<style scoped>
</style>
