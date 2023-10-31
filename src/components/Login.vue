<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="email"
        label="E-mail"
        :rules="emailRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        :rules="passwordRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
    <v-btn block class="mt-2" @click="emitAuthChange">Register</v-btn>
  </v-sheet>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name:'Login',
    emits: ["authChange"],
    data(){
        return{
            teste: 'teste',
            pros: false
        }
    },
    methods: {
      emitAuthChange(){
        this.$emit("authChange")
      }
    }
})
</script>

<style>
</style>