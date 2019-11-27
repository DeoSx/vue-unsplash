export default {
  state: {
    favorite: []
  },
  mutations: {
    addPhotoToFavorite(state, photo) {
      if (state.favorite.find(f => f.id === photo.id)) {
        return;
      } else {
        state.favorite.push(photo);
      }
      console.log(state.favorite);
    }
  },
  actions: {
    addPhotoToFavorite({ commit }, photo) {
      commit("addPhotoToFavorite", photo);
    }
  },
  getters: {
    favorite: s => s.favorite
  }
};
