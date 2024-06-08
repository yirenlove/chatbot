<script setup>
import login from './login.vue'
import register from './register.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="containerr">
    <div class="operation">
      <login v-if="route.path === '/login'"></login>
      <register v-if="route.path === '/register'"></register>
    </div>
  </div>
</template>

<style scoped>
.containerr {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  background-repeat: no-repeat;
  background-image: url('../image/back.png');
  background-attachment: fixed;
  background-size: cover;
  place-items: center;
  justify-content: center;
}

.operation {
  height: 420px;
  max-height: 450px;
  width: 100%;
  max-width: 320px;
  background: rgb(211 217 238 / 50%);
  opacity: 1;
  border-radius: 15px;
  /* border: 2px solid #687493; */
  box-shadow: 0 0.3rem 0.6rem #2e3547;
  box-sizing: border-box;
  padding: 34px;
  padding-top: 74px;
}
</style>
