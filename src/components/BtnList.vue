<template>
  <div
    class="btn-list"
    v-bind:class="{'btn-list--symptoms': listSymptoms, 'btn-list--places': listPlaces}"
  >
    <div
      class="btn"
      v-for="btn in btns"
      v-bind:key="btn.index"
      @click="nextPage(btn.index)"
    >{{btn.name}}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "BtnList",
  props: {
    btns: Array,
    section: String
  },
  data() {
    return {
      listSymptoms: false,
      listPlaces: false
    };
  },
  created() {
    if (this.section === "symptoms") {
      this.listSymptoms = true;
    }
    if (this.section === "places") {
      this.listPlaces = true;
    }
  },
  methods: {
    ...mapMutations(["selectPlace", "selectSymptom"]),
    nextPage(index) {
      if (this.section === "symptoms") {
        this.selectSymptom(index);
        this.$router.push({ name: "places" });
      }
      if (this.section === "places") {
        this.selectPlace(index);
        this.$router.push({ name: "animation" });
      }
    }
  }
};
</script>
