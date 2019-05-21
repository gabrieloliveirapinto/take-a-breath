<template>
  <div class="select select--symptoms">
    <h1 class="select__title">O que te levou a utilizar o nosso site?</h1>
    <btn-list v-bind:btns="this.symptoms" v-bind:section="section"/>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import BtnList from "@/components/BtnList";

export default {
  components: {
    "btn-list": BtnList
  },
  data() {
    return {
      section: "symptoms",
      symptoms: [
        {
          index: 0,
          name: "Trabalho",
          selected: false
        },
        {
          index: 1,
          name: "Viagem",
          selected: false
        },
        {
          index: 2,
          name: "Social",
          selected: false
        },
        {
          index: 3,
          name: "Outro",
          selected: false
        }
      ]
    };
  },
  methods: {
    nextPage() {
      this.$route.push({name: 'select'})
    }
  }
};
</script>
