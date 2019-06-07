<template>
  <div class="header">
    <div class="navbar">
      <i class="fas fa-volume-up fa-3x" v-bind:class="{'hide': soundON}" @click="toggleSound()"></i>
      <i class="fas fa-volume-mute fa-3x" v-bind:class="{'hide': !soundON}" @click="toggleSound()"></i>
      <i
        class="far fa-question-circle fa-3x"
        v-bind:class="{'hide': !hideHelp}"
        @click="toggleHelp()"
      ></i>
      <div class="navbar__btn" v-bind:class="{'hide': hideHelp}" @click="toggleHelp()">voltar</div>
    </div>
    <div class="help" v-bind:class="{'hide': hideHelp}">
      <div class="help__title">
        <i class="far fa-question-circle fa-2x"></i>
        <p class="title__text">Como utilizar o nosso site?</p>
      </div>
      <p class="help__text">
        <b>1.</b> Após pressionar o botão de “Começar” propõe-se que o utilizador coloque os auscultadores para o melhor aproveitamento do nosso site.
        <br>Mesmo que este opte por não utilizar auscultadores, pode ouvir os sons que estão a ser reproduzidos através das colunas do dispositivo que está a utilizar e, caso não pretenda utilizar o site com auxílio sonoro, pode também silenciar as faixas de reprodução sonora.
      </p>
      <p class="help__text">
        <b>3.</b> Depois de selecionar o motivo de ansiedade, o utilizador deve indicar-nos se se encontra num espaço interior ou exterior.
        <br>Tanto o ponto 2. como 3. têm como finalidade adaptar as animações, os exercícios e os sons ao local onde o utilizador se encontra bem como aos motivos que o levou a utilizar o nosso site.
      </p>
      <p class="help__text">
        <b>2.</b> Em segundo lugar, é pedido ao utilizador que nos indique qual o motivo que o leva a sentir-se ansioso, levando-o a utilizar este método para se acalmar.
      </p>
      <p class="help__text">
        <b>4.</b> Após estes três passos, o utilizador é encaminhado para algumas animações “Oddly Satisfying” que lhe sugerem exercícios de respiração, relaxamento e alongamento à medida que estas decorrem.
        <br>Tanto os sons, como os exercícios estão relacionados com a animação que o utilizador está a observar, influenciada pelas respostas que o utilizador deu às questões que lhe foram feitas nos passos 2. e 3..
      </p>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  name: "PageHeader",
  data() {
    return {
      soundON: false,
      hideHelp: true,
      audio: null,
      sound: ""
    };
  },
  // computed: {
  // ...mapState(["audio"])
  // },
  created() {
    this.sound = "./sounds/out-sound-1.mp3";
    this.startAudio();
    this.palyButton();
  },
  methods: {
    // ...mapMutations(["setSound", "playSound"]),
    toggleSound() {
      this.soundON = !this.soundON;
      this.palyButton();
    },
    toggleHelp() {
      this.hideHelp = !this.hideHelp;
    },
    startAudio() {
      this.audio = new Audio(this.sound);
      this.audio.loop = true;
    },
    palyButton() {
      if (this.soundON) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
