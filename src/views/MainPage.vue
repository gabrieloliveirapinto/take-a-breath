<template>
  <div class="main-page">
    <animation v-bind:index="index"/>
    <div class="description">
      <p
        class="description__text"
      >À medida que o cilindo é aperfeiçoado e o anel desce, deve chegar, lentamente e com o mesmo ritmo, à ponta dos pés com as suas mãos.</p>
    </div>
    <i class="fas fa-arrow-right fa-3x animation-arrow" @click="nextPage()"></i>
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
      index: "0"
    };
  },
  created() {
    this.index = this.$route.params.id;
  },
  methods: {
    nextPage() {
      this.$router.push({ name: "last-page" });
    }
  }
  // watch: {

  // }
};
</script>
