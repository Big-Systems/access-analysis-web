<template>
  <div class="auth">
    <div class="left-auth">
      <v-img aspect-ratio="16/9" cover src="../assets/login-img.svg"></v-img>
    </div>
    <div class="right-auth">
      <Login @authChange="authCard" v-if="showLogin"></Login>
      <Register @authChange="authCard" v-if="!showLogin"></Register>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

export default defineComponent({
  name: 'Auth',
  components: {
    Login,
    Register
  },
  data() {
    return {
      showLogin: true
    }
  },
  methods: {
    authCard() {
      this.showLogin = !this.showLogin;
    }
  }
})
</script>

<style scoped>
.auth {
  background: #F1F3F6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-auth {
  width: 70%;
  height: 10%;
}

.right-auth {
  width: 30%;
  height: 100vh;
  background: #FFF;
}
</style>
