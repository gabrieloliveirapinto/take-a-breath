<template>
  <div class="animation">
    <img v-if="!show" dynsrc="/images/animacao1.gif" src="/images/animacao1.gif">
    <!-- <video autoplay loop v-if="show">
      <source src="/images/bola_Prancheta_1_copia 2_1.mp4" type="video/mp4">
    </video> -->
  </div>
</template>

<script>
export default {
  name: "Animation",
  props: {
    index: String,
    show: Boolean
  }
  // data() {
  //   return {
  //     show: false
  //   };
  // },
  // watch: {
  //   index: function() {
  //     this.show = !this.show;
  //   }
  // }
};
</script>
