<template>
  <div class="main-page">
    <animation v-bind:index="index"/>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Animation from "@/components/Animation";

export default {
  components: {
    animation: Animation
  },
  data() {
    return {
      index: 0
    };
  },
  created() {
    this.index = this.$route.params.id;
  }
  // watch: {

  // }
};
</script>
