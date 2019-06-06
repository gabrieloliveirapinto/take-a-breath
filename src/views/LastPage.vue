<template>
  <div class="last-page">
    <h1 class="last-page__title">Concluído</h1>
    <p class="last-page__subtitle">Esperamos que te estejas a sentir melhor!</p>
    <div class="btn--line">
      <router-link class="btn" :to="{name: 'animation'}">Jogar Novamente</router-link>
      <div class="btn" @click="goHome()">Página Inicial</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["reset"]),
    goHome() {
      this.reset();
      this.$router.push({ name: "home" });
    }
  }
};
</script>
