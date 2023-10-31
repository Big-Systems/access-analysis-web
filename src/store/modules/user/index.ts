import http from "@/http";
import IUser from "@/interface/IUser";
import { State } from "@/store";
import { LOGIN, REGISTER } from "@/store/type-actions";
import { Module } from "vuex";

export interface userState {
  users: IUser[];
}

export const user: Module<userState, State> = {
  actions: {
    [LOGIN](state, user: IUser) {
        return http.post("/user", user);
    },
    [REGISTER](state, user: IUser) {
        console.log('teste')
    return http.post("/user", user);
    },
  },
};
