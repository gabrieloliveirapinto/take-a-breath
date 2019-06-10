<template>
  <!-- TODO: bind css class with background color -- add to animations in store -->
  <div class="main-page" v-bind:class="this.animClass">
    <animation v-bind:anim="anim"/>
    <!-- TODO: add class to position description -- get from state anumations -->
    <div v-bind:class="this.desClass" v-if="this.showDescripton">
      <p class="description__text">{{desc}}</p>
    </div>
    <i class="fas fa-arrow-right fa-3x animation-arrow" @click="nextPage()"></i>
  </div>
</template>

<script>
import Animation from "@/components/Animation";
import { mapMutations, mapState } from "vuex";
import { setTimeout } from "timers";

export default {
  components: {
    animation: Animation
  },
  data() {
    return {
      aninIndex: 0,
      anim: "",
      desc: "",
      animClass: {},
      desClass: {},
      showDescripton: true,
      showTimeout: null
    };
  },
  computed: {
    ...mapState(["animations", "selectedAnimations"])
  },
  created() {
    this.gameAnimations();
    this.getCurrentAnimation();
    this.handleDescription();
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
      this.animClass = this.animations[
        this.selectedAnimations[this.aninIndex]
      ].backgroundClass;
      this.desClass = this.animations[
        this.selectedAnimations[this.aninIndex]
      ].descriptionClass;
      this.setCurrentSound(
        this.animations[this.selectedAnimations[this.aninIndex]].sound
      );
      this.handleDescription();
    },
    handleDescription() {
      this.showDescripton = true;
      this.showTimeout = setTimeout(() => {
        this.showDescripton = false;
      }, 5000);
    },
    nextPage() {
      clearTimeout(this.showTimeout);
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
