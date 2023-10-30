<template>
    <div>
    <v-sheet width="300" class="mx-auto">
        <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                    hide-details
                  ></v-text-field>
                </v-col>
        
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
        
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-btn variant="outlined">
            Login
          </v-btn>
    </v-sheet>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name:'Login',
    data(){
        return{
            teste: 'teste',
            pros: false
        }
    }
})
</script>

<style>

</style>