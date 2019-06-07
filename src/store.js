import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    symptoms: [
      {
        index: 0,
        name: "Trabalho",
        selected: false
      },
      {
        index: 1,
        name: "Viagem",
        selected: false
      },
      {
        index: 2,
        name: "Social",
        selected: false
      },
      {
        index: 3,
        name: "Outro",
        selected: false
      }
    ],
    places: [
      {
        index: 0,
        name: "Interior",
        animations: [0, 1, 2],
        selected: false
      },
      {
        index: 1,
        name: "Exterior",
        animations: [3, 4, 5],
        selected: false
      }
    ],
    animations: [
      {
        description: "Animation 1 description",
        animation:
          "<img dynsrc='/images/animacao1.gif' src='/images/animacao1.gif'>"
      },
      {
        description: "Animation 2 description",
        animation:
          "<video autoplay loop><source src = '/images/bola_Prancheta_1_copia 2_1.mp4' type = 'video/mp4'></video>"
      },
      {
        description: "Animation 3 description",
        animation:
          "<img dynsrc='/images/animacao1.gif' src='/images/animacao1.gif'>"
      },
      {
        description: "Animation 4 description",
        animation:
          "<video autoplay loop><source src = '/images/bola_Prancheta_1_copia 2_1.mp4' type = 'video/mp4'></video>"
      },
      {
        description: "Animation 5 description",
        animation:
          "<img dynsrc='/images/animacao1.gif' src='/images/animacao1.gif'>"
      },
      {
        description: "Animation 6 description",
        animation:
          "<video autoplay loop><source src = '/images/bola_Prancheta_1_copia 2_1.mp4' type = 'video/mp4'></video>"
      }
    ],
    selectedAnimations: [],
    section: ""
    // audio: null
  },
  getters: {},
  mutations: {
    setSection(state, payload) {
      state.section = payload;
    },
    // setSound(state, payload) {
    //   console.log("Setting sound");
    //   state.sound = new Audio(payload);
    //   state.sound.loop = true;
    //   // state.sound.play();
    // },
    selectSymptom(state, index) {
      state.symptoms[index].selected = true;
    },
    selectPlace(state, index) {
      state.places[index].selected = true;
    },
    gameAnimations(state) {
      state.selectedAnimations = state.places.filter(
        place => place.selected === true
      )[0].animations;
    },
    // playSound(state, soundON) {
    //   if (soundON) {
    //     state.audio.play();
    //   } else {
    //     state.audio.pause();
    //   }
    // },
    reset(state) {
      state.places.forEach(place => (place.selected = false));
      state.symptoms.forEach(symptom => (symptom.selected = false));
      // state.audio = false;
    }
  },
  actions: {},
  modules: {}
});
