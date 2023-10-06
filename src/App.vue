<template>
  <Navbar />
  <RouterView />
  <footerComponent />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import footerComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    footerComponent,
  },
};
</script>

<style lang="scss" scoped></style>
