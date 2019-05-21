<template>
  <div class="last-page">
    <h1 class="last-page__title">Concluído</h1>
    <p class="last-page__subtitle">Esperamos que te estejas a sentir melhor!</p>
    <div class="btn--line">
      <router-link class="btn" :to="{name: 'animation', params:{id: '0'}}">Jogar Novamente</router-link>
      <router-link class="btn" :to="{name: 'home'}">Página Inicial</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
