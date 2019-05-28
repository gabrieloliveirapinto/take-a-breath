<template>
  <div class="select select--places">
    <h1 class="select__title">Onde te encontras?</h1>
    <btn-list v-bind:btns="this.places" v-bind:section="section"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BtnList from "@/components/BtnList";

export default {
  components: {
    "btn-list": BtnList
  },
  computed: mapState(["places", "section"]),
  methods: mapMutations(["setSection"]),
  created() {
    this.setSection(this.$route.name);
  }
};
</script>
