<template>
  <HeaderComponent :is-logged-in="isLoggedIn" />
  <RouterView :is-logged-in="isLoggedIn" @login-success="isLoggedIn = true" />
  <FooterComponent :is-logged-in="isLoggedIn" />
</template>

<script>
import { defineComponent } from "vue";

import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      isLoggedIn: false
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
  padding-bottom: 80px;
}

.main {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>