<template>
  <div class="main-page" v-bind:class="{'fill': fill}">
    <animation v-bind:index="index" v-bind:show="show"/>
    <div class="description">
      <p
        class="description__text"
      >À medida que o cilindro é aperfeiçoado e o anel desce, deve chegar, lentamente e com o mesmo ritmo, à ponta dos pés com as suas mãos.</p>
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
      index: "0",
      fill: true,
      show: false
    };
  },
  created() {
    this.index = this.$route.params.id;
    // if (this.index === "1") {
    //   this.show = true;
    // }
  },
  methods: {
    nextPage() {
      // if (this.index === "0") {
      //   this.$router.push({ name: "animation", params: { id: "1" } });
      // }
      // if (this.index === "1") {
      //   this.$router.push({ name: "last-page" });
      // }
      this.$router.push({ name: "last-page" });
    }
  }
  // watch: {
  //   index: () => {
  //     console.log("Hello");
  //   }
  // }
};
</script>
