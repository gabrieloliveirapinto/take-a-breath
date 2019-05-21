<template>
  <div class="home">
    <h1 class="main-title">TAKE A BREATH</h1>
    <router-link class="btn" :to="{ name: 'select-symptoms'}">Começar</router-link>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
