<template>
  <!-- TODO: bind css class with background color -- add to animations in store -->
  <div class="main-page" v-bind:class="this.class">
    <animation v-bind:anim="anim"/>
    <!-- TODO: add class to position description -- get from state anumations -->
    <div class="description">
      <p class="description__text">{{desc}}</p>
    </div>
    <i class="fas fa-arrow-right fa-3x animation-arrow" @click="nextPage()"></i>
  </div>
</template>

<script>
import Animation from "@/components/Animation";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    animation: Animation
  },
  data() {
    return {
      aninIndex: 0,
      anim: "",
      desc: "",
      class: {}
    };
  },
  computed: {
    ...mapState(["animations", "selectedAnimations"])
  },
  created() {
    this.gameAnimations();
    this.getCurrentAnimation();
  },
  methods: {
    ...mapMutations(["gameAnimations", "setCurrentSound"]),
    getCurrentAnimation() {
      this.anim = this.animations[
        this.selectedAnimations[this.aninIndex]
      ].animation;
      this.desc = this.animations[
        this.selectedAnimations[this.aninIndex]
      ].description;
      this.class = this.animations[
        this.selectedAnimations[this.aninIndex]
      ].class;
      this.setCurrentSound(
        this.animations[this.selectedAnimations[this.aninIndex]].sound
      );
    },
    nextPage() {
      if (this.aninIndex < 2) {
        this.aninIndex++;
        this.getCurrentAnimation();
      } else {
        this.$router.push({ name: "last-page" });
      }
    }
  }
};
</script>
