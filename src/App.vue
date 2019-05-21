<template>
  <div id="app" class="app">
    <page-header/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "App",
  components: {
    "page-header": PageHeader
  }
};
</script>


<style lang="scss">
@import "@/styles/main.scss";
</style>