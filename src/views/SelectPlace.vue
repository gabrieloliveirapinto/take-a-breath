<template>
  <div class="select select--symptoms">
    <h1 class="select__title">Onde te encontras?</h1>
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
      section: "places",
      symptoms: [
        {
          index: 0,
          name: "Interior",
          selected: false
        },
        {
          index: 1,
          name: "Exterior",
          selected: false
        }
      ]
    };
  }
};
</script>
