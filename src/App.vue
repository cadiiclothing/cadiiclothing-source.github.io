<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import HeaderComponent from "./components/header.vue";
import FooterComponent from "./components/footer.vue";
export default {
  name: "app",
  components: {
    "app-header": HeaderComponent,
    "app-footer": FooterComponent
  }
};
</script>

