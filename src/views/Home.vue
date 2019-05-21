<template>
  <div class="home">
    <h1 class="home__title">TAKE A BREATH</h1>
    <router-link class="btn home__btn" :to="{name: 'select-symptoms'}">Começar</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
