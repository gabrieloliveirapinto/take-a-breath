<template>
  <div class="home">
    <h1 class="home__title">TAKE A BREATH</h1>
    <router-link class="btn home__btn" :to="{name: 'symptoms'}">COMEÇAR</router-link>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
