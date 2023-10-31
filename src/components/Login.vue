<template>
  <v-sheet width="300" class="mx-auto teste">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="login">Login now</v-btn>
    </v-form>
    <v-btn block class="mt-2" @click="emitAuthChange">Singup now</v-btn>
  </v-sheet>
</template>


<script lang="ts">
import IUser from "@/interface/IUser";
import { store } from "@/store";
import { LOGIN } from "@/store/type-actions";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'Login',
  emits: ["authChange"],
  data() {
    return {
      teste: 'teste',
      pros: false
    }
  },
  methods: {
    emitAuthChange() {
      this.$emit("authChange")
    }
  },
  setup() {
    const email = ref('')
    const password = ref('')

    const login = function () {
      const user: IUser = {
        name: email.value,
        email: email.value
      }
      store.dispatch(LOGIN, user);
    };

    return {
      email,
      password,
      login
    }
  }
})
</script>

<style scoped>
.teste {
  margin-top: 150px;
}
</style>