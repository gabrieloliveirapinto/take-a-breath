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
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
