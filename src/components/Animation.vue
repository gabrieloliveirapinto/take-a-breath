<template>
  <div class="animation">
    <div v-html="anim"></div>
  </div>
</template>

<script>
export default {
  name: "Animation",
  props: {
    anim: String
  }
};
</script>
