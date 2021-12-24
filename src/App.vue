<template>
  <HomePageLayout>
    <router-view />
  </HomePageLayout>
</template>

<script>
import HomePageLayout from "./components/layouts/HomePageLayout.vue";
export default {
  name: "App",
  components: {
    HomePageLayout,
  },
};
</script>
