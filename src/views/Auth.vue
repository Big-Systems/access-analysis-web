<template>
  <div class="auth">
     <div class="left-auth">
      <v-img      
        aspect-ratio="16/9"
        cover
        src="../assets/login-img.svg"
      ></v-img>
     </div>
     <div class="right-auth">
      <Login></Login>
     </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  name: 'Auth',
  components: {
    Login
  }
})
</script>

<style scoped>

.auth{
  background: #F1F3F6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-auth{
 width: 70%;
 height: 10%;
}

.right-auth{
  width: 30%;
  height: 100vh;
  background: #FFF;
}

</style>
