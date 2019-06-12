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
        description:
          "Alongue o corpo! Tente chegar com as pontas dos dedos das mãos, às pontas dos dedos dos pés quando enquanto o anel desce o cilindro verde. Fazer o movimento inverso quando o anel sobe o cilindro. ",
        animation:
          "<video preload autoplay loop><source src='/anims/anim1.mp4' type='video/mp4'></video>",
        sound: "./sounds/out-sound-1.mp3",
        backgroundClass: { "background-color-1": true },
        descriptionClass: { "description-pos-1": true }
      },
      {
        description:
          "Quando a bola passar o arco para o lado esquerdo, inspire e estique o braço para o lado direito. Quando passar para o lado direito, expire e estique o braço para o lado esquerdo.",
        animation:
          "<video preload autoplay loop><source src='/anims/anim2.mp4' type='video/mp4'></video>",
        sound: "./sounds/out-sound-2.mp3",
        backgroundClass: { "background-color-2": true },
        descriptionClass: { "description-pos-2": true }
      },
      {
        description:
          "Inspire à medida que as figuras geométricas vão surgindo no ecrã. Expire à medida que estas forem desaparecendo.",
        animation:
          "<video preload autoplay loop><source src='/anims/anim3.mp4' type='video/mp4'></video>",
        sound: "./sounds/out-sound-3.mp3",
        backgroundClass: { "background-color-3": true },
        descriptionClass: { "description-pos-3": true }
      },
      {
        description:
          "Quando a bola cair e o balão descer, coloque as duas mãos atrás das costas, com postura direita enquanto expira. Quando o balão estiver a subir novamente, levante os braços a acompanhá-lo e inspire.",
        animation:
          "<video preload autoplay loop><source src='/anims/anim4.mp4' type='video/mp4'></video>",
        sound: "./sounds/in-sound-1.mp3",
        backgroundClass: { "background-color-4": true },
        descriptionClass: { "description-pos-4": true }
      },
      {
        description:
          "Estique o braço esquerdo no sentido dos ponteiros do relógio, à medida que os retângulos vermelhos vão subindo no ecrã. Faça o movimento oposto com o braço direito, à medida que estes descerem no ecrã.",
        animation:
          "<video preload autoplay loop><source src='/anims/anim5.mp4' type='video/mp4'></video>",
        sound: "./sounds/in-sound-2.mp3",
        backgroundClass: { "background-color-5": true },
        descriptionClass: { "description-pos-5": true }
      },
      {
        description:
          "Inspire quando a bola verde crescer, expire quando crescer a bola azul.",
        animation:
          "<video preload autoplay loop><source src='/anims/anim6.mp4' type='video/mp4'></video>",
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
