<script setup>
import { data } from 'autoprefixer'
import axios from 'axios'
import { stringify } from 'postcss'
// import axios from 'axios';
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '@/router/index.js'

let account = ref('')
let passw = ref('')
let rpassw = ref('')
let msg = ref('')
let submit = () => {
  // router.push('/index')
  msg.value = ''
  account.value = account.value.trim()
  passw.value = passw.value.trim()
  rpassw.value = rpassw.value.trim()
  if (passw.value !== rpassw.value) {
    msg.value = '两次密码不一致'
    return
  }
  axios.post('/admin/register', {
      username: account.value,
      password: passw.value
  }).then(() => {
    router.push('/login')
  })
}
</script>

<template>
  <div class="login">
    <div class="wrapper">
      <span>账号</span>
      <input v-model="account" type="text" name="account" id="account" maxlength="10" minlength="10"
             autocomplete="false">
    </div>
    <div class="wrapper">
      <span>密码</span>
      <input v-model="passw" type="password" name="passw" id="passw" minlength="8" maxlength="16">
    </div>
    <div class="wrapper">
      <span>确认密码</span>
      <input v-model="rpassw" type="password" name="passw" minlength="8" maxlength="16">
    </div>
    <div class="message">{{ msg }}</div>
    <div class="wrapper register">
            <span id="register">
                <RouterLink :to="{
                    path: '/login'
                }">已有账号，登录</RouterLink>
            </span>
    </div>
    <button id="submit" @click="submit">注册</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 26px;
  max-height: 32px;
  width: 100%;
  min-width: inherit;
  margin-bottom: 14px;
  background-color: transparent;

}

.wrapper:nth-child(5) {
  /* background-color: red; */
  justify-content: end;
}

.wrapper span {
  font-size: 14px;
  color: rgb(184, 180, 204);
}

.wrapper input {
  width: 75%;
  min-width: 70%;
  outline: none;
  /* border-radius: 10px; */
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid gray;
  color: rgb(4, 245, 108);
  padding-bottom: 5px;
}

.message {
  font-size: 13px;
  color: rgba(250, 44, 25, 1);

}

a {
  text-decoration: none;
  font-size: 15px;
  color: rgb(55 77 223);
}

#submit {
  width: 100%;
  min-width: 100%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  color: gray;
  border: 2px solid #3f3f3f3f;
}
</style>
