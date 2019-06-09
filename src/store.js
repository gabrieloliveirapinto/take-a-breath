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
          "<img dynsrc='/images/animacao1.gif' src='/images/animacao1.gif'>",
        sound: "./sounds/out-sound-1.mp3",
        backgroundClass: { "background-color-1": true },
        descriptionClass: { "description-pos-1": true }
      },
      {
        description: "Animation 2 description",
        animation:
          "<video autoplay loop><source src = '/images/bola_Prancheta_1_copia 2_1.mp4' type = 'video/mp4'></video>",
        sound: "./sounds/out-sound-2.mp3",
        backgroundClass: { "background-color-2": true },
        descriptionClass: { "description-pos-2": true }
      },
      {
        description: "Animation 3 description",
        animation:
          "<img dynsrc='/images/animacao1.gif' src='/images/animacao1.gif'>",
        sound: "./sounds/out-sound-3.mp3",
        backgroundClass: { "background-color-3": true },
        descriptionClass: { "description-pos-3": true }
      },
      {
        description: "Animation 4 description",
        animation:
          "<video autoplay loop><source src = '/images/bola_Prancheta_1_copia 2_1.mp4' type = 'video/mp4'></video>",
        sound: "./sounds/in-sound-1.mp3",
        backgroundClass: { "background-color-4": true },
        descriptionClass: { "description-pos-4": true }
      },
      {
        description: "Animation 5 description",
        animation:
          "<img dynsrc='/images/animacao1.gif' src='/images/animacao1.gif'>",
        sound: "./sounds/in-sound-2.mp3",
        backgroundClass: { "background-color-5": true },
        descriptionClass: { "description-pos-5": true }
      },
      {
        description: "Animation 6 description",
        animation:
          "<video autoplay loop><source src = '/images/bola_Prancheta_1_copia 2_1.mp4' type = 'video/mp4'></video>",
        sound: "./sounds/in-sound-3.mp3",
        backgroundClass: { "background-color-6": true },
        descriptionClass: { "description-pos-6": true }
      }
    ],
    selectedAnimations: [],
    section: "",
    currentSound: "./sounds/out-sound-1.mp3"
  },
  getters: {},
  mutations: {
    setSection(state, payload) {
      state.section = payload;
    },
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
    setCurrentSound(state, payload) {
      state.currentSound = payload;
    },
    reset(state) {
      state.places.forEach(place => (place.selected = false));
      state.symptoms.forEach(symptom => (symptom.selected = false));
    }
  },
  actions: {},
  modules: {}
});
