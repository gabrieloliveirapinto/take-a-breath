<template>
  <div class="btn-list">
    <div class="btn" v-for="btn in btns" v-bind:key="btn.index" @click="nextPage()">{{btn.name}}</div>
  </div>
</template>

<script>
export default {
  name: "BtnList",
  props: {
    btns: Array,
    section: String
  },
  methods: {
    nextPage() {
      if (this.section === "symptoms") {
        this.$router.push({ name: "places" });
      }
    }
  }
};
</script>
