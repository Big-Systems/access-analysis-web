<template>
  <v-sheet width="300" class="mx-auto teste">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="userName" label="User name"></v-text-field>
      <v-text-field v-model="email" label="E-mail address"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-text-field v-model="confirmPassword" label="Confirm password"></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="register">Create Account</v-btn>
    </v-form>
    <v-btn block class="mt-2" @click="emitAuthChange">Login</v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { store } from "@/store";
import { REGISTER } from "@/store/type-actions";
import IUser from "@/interface/IUser";

export default defineComponent({
  name: "Register",
  emits: ["authChange"],
  data() {
    return {
      teste: "teste",
      pros: false,
    };
  },
  methods: {
    emitAuthChange() {
      this.$emit("authChange");
    },
  },
  setup() {
    const userName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')

    const register = function () {
      const user: IUser = {
        name: userName.value,
        email: email.value
      }
      store.dispatch(REGISTER, user);
    };

    return {
      register,
      userName,
      email,
      password,
      confirmPassword
    };
  },
});
</script>

<style scoped>
.teste {
  margin-top: 150px;
}
</style>
