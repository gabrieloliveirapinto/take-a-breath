<template>
  <div class="select select--symptoms">
    <h1 class="select__title">O que te levou a utilizar o nosso site?</h1>
    <btn-list v-bind:btns="this.symptoms" v-bind:section="section"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BtnList from "@/components/BtnList";

export default {
  components: {
    "btn-list": BtnList
  },
  computed: mapState(["symptoms", "section"]),
  methods: {
    ...mapMutations(["setSection"]),
    nextPage() {
      this.$route.push({ name: "select" });
    }
  },
  created() {
    this.setSection(this.$route.name);
  }
};
</script>
