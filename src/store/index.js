import { createStore } from "vuex";

export default createStore({
  state: {
    menuActive: false,
  },
  getters: {},
  mutations: {
    SET_MENU_ACTIVE(state, payload) {
      state.menuActive = payload;
    },
  },
  actions: {},
  modules: {},
});
