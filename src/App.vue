<template>
  <div class="app">
    <PageHeader/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "App",
  components: {
    PageHeader
  }
};
</script>


<style lang="scss">
@import "@/styles/main.scss";
</style>
