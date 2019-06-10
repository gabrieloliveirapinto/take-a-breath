<template>
  <div class="header">
    <div class="navbar">
      <i class="fas fa-volume-up fa-3x" v-bind:class="{'hide': !soundON}" @click="toggleSound()"></i>
      <i class="fas fa-volume-mute fa-3x" v-bind:class="{'hide': soundON}" @click="toggleSound()"></i>
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
        <b>1.</b> Coloque os auscultadores para o melhor aproveitamento do nosso site. <br> Caso não pretenda utilizar o site com auxílio sonoro, pode silenciar as faixas de reprodução sonora no ícone que se encontra no canto superior esquerdo do ecrã.
      </p>
      <p class="help__text">
        <b>2.</b> Indique qual o motivo que o leva a sentir-se ansioso.
      </p>
      <p class="help__text">
        <b>3.</b> Depois de selecionar o motivo de ansiedade, o utilizador deve indicar-nos se se encontra num espaço interior ou exterior.
      </p>
      <p class="help__text">
        <b>4.</b> Após estes três passos, o utilizador é encaminhado para algumas animações “Oddly Satisfying” que lhe sugerem exercícios de respiração, relaxamento e alongamento à medida que estas decorrem.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  computed: mapState(["currentSound"]),
  created() {
    this.startAudio();
  },
  methods: {
    toggleSound() {
      this.soundON = !this.soundON;
      this.playButton();
    },
    toggleHelp() {
      this.hideHelp = !this.hideHelp;
    },
    startAudio() {
      this.sound = this.currentSound;
      this.audio = new Audio(this.sound);
      this.audio.loop = true;
      this.audio.preload = "auto";
      this.audio.load();
    },
    playButton() {
      if (!this.soundON) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
    },
    changeSound() {
      this.audio.pause();
      this.sound = this.currentSound;
      this.audio = new Audio(this.sound);
      this.audio.loop = true;
      this.audio.preload = "auto";
      this.audio.load();
      if (this.soundON) {
        this.audio.play();
      }
    }
  },
  watch: {
    currentSound: "changeSound"
  }
};
</script>