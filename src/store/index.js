import Vue from "vue";
import Vuex from "vuex";
import history from "./history";
import favorite from "./favorite";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: {}
  },
  mutations: {
    setPictures(state, pictures) {
      state.pictures = pictures;
    }
  },
  actions: {
    async fetchPictures({ commit }, value) {
      try {
        const key =
          "60e56e3c35ecef378b508abb28d4a00d823b045f2b52055668065f677f7e4de3";
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?query=${value}&per_page=30&client_id=${key}`
        );
        const pictures = await response.json();
        commit("setPictures", pictures);
      } catch (e) {
        throw e;
      }
    },
    fetchPictureById({ commit }, photoId) {
      const photos = this.state.pictures.results;
      const idx = photos.findIndex(p => p.id === photoId);
      const photo = photos[idx];
      return photo;
    }
  },
  modules: {
    history,
    favorite
  },
  getters: {
    pictures: s => s.pictures
  }
});
