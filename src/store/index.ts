import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import { user, userState } from "./modules/user";

export interface State {
  user: userState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    user: {
      users: [],
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
