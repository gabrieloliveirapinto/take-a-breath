<template>
  <div class="main-page" v-bind:class="{'fill': fill}">
    <animation v-bind:index="index" v-bind:show="show"/>
    <div class="description">
      <p class="description__text">{{description}}</p>
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
      show: false,
      description:
        "À medida que o cilindro é aperfeiçoado e o anel desce, deve chegar, lentamente e com o mesmo ritmo, à ponta dos pés com as suas mãos."
    };
  },
  created() {
    this.index = this.$route.params.id;
    if (this.index === "1") {
      this.show = true;
      this.description =
        "Inspire sempre que a bola chega ao canto esquerdo. Expire quando a bola chegar ao canto direito.";
    }
  },
  methods: {
    nextPage() {
      if (this.index === "0") {
        this.$router.push({ name: "animation", params: { id: "1" } });
      }
      if (this.index === "1") {
        this.$router.push({ name: "last-page" });
      }
    }
  }
};
</script>
