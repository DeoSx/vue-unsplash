export default {
  state: {
    history: []
  },
  mutations: {
    setHistory(state, history) {
      state.history.push(history);
    },
    removeStoryById(state, id) {
      const history = state.history;
      state.history = history.filter(h => h.date !== id);
    }
  },
  actions: {
    writeHistory({ commit }, history) {
      commit("setHistory", history);
    },
    removeStoryById({ commit }, id) {
      commit("removeStoryById", id);
    }
  },
  getters: {
    history: s => s.history
  }
};
