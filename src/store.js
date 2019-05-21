import Vue from 'vue'
import Vuex from 'vuex'
import { db } from './firebase'
import router from './router.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttons: []
  },
  getters: {
    // returning all symptoms buttons
    getSymptomsButtons(state){
      return state.buttons.filter(buttons => buttons.type === 'symptoms')
    },
    getPlacesButtons(state){
      return state.buttons.filter(buttons => buttons.type === 'places')
    }
  },
  mutations: {
    setButtons(state, buttons) {
      state.buttons = buttons
    }
  },
  actions: {
    // Fetching all buttons from firebase
    fetchButtons({ commit }) {
      console.log('Fetching buttons')
      db.ref('buttons').once('value', snap => {
        console.info('Success fetching buttons')
        const response = snap.val()
        const buttons = []
        // passing json response to array
        for(var button in response){
          buttons.push({id: button, ...response[button]})
        }
        // setting state buttons
        commit('setButtons', buttons)
      }).catch(error => console.error(error))
    },
    checkButton({}, {id, type}){
      console.log(`Checking the button with this id: ${id}`)
      // Updating button checked in firebase
      db.ref('buttons').child(id).update({
        checked: true
      })
      if(type === 'symptoms'){
        // push route so that the user can select the place is in
        router.push({name: 'select-places'})
      }
      else {
        // TODO: check this later, may need to change the id
        // push route to start the application
        router.push({name: 'animation', params:{id: 1}})
      }
    }
  },
  modules: {

  }
})
