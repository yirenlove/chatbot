<script setup>
import { ref } from 'vue'
import { adminRequest } from '@/utils/request.js'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user.js'
import router from '@/router/index.js'

const img = ref(null)
const login = ref(null)
const register = ref(null)
const registerSwitch = ref(null)
const loginSwitch = ref(null)
const buttonArea = ref(null)
const loginForm = ref({
  username: '',
  password: ''
})
const store = useUserStore()

const registerForm = ref({
  username: '',
  password: ''
})

const registerChange = () => {

  registerSwitch.value.$el.classList.add('show5')
  loginSwitch.value.$el.classList.add('show5')
  setTimeout(() => {
    registerSwitch.value.$el.classList.remove('show5')
    loginSwitch.value.$el.classList.remove('show5')
    img.value.classList.remove('reshow')
    buttonArea.value.classList.remove('reshow6')
    login.value.classList.remove('reshow2')
    register.value.classList.remove('reshow3')
    registerSwitch.value.$el.classList.remove('reshow4')
    img.value.classList.add('show')
    buttonArea.value.classList.add('show6')
    login.value.classList.add('show2')
    register.value.classList.add('show3')
    registerSwitch.value.$el.classList.add('show4')
  }, 100)
}

const SignChange = () => {

  registerSwitch.value.$el.classList.add('show5')
  loginSwitch.value.$el.classList.add('show5')
  setTimeout(() => {
    registerSwitch.value.$el.classList.remove('show5')
    loginSwitch.value.$el.classList.remove('show5')
    img.value.classList.add('reshow')
    buttonArea.value.classList.add('reshow6')
    login.value.classList.add('reshow2')
    register.value.classList.add('reshow3')
    registerSwitch.value.$el.classList.add('reshow4')
    img.value.classList.remove('show')
    buttonArea.value.classList.remove('show6')
    login.value.classList.remove('show2')
    register.value.classList.remove('show3')
    registerSwitch.value.$el.classList.remove('show4')
  }, 100)
}

const loginAction = async () => {
  loginForm.value.username = loginForm.value.username.trim()
  loginForm.value.password = loginForm.value.password.trim()
  const res = await adminRequest.post('/login', loginForm.value)
  if (res.data.code === 1) {
    store.token = res.data.data
    await router.push('/index')
  } else {
    ElMessage.error(res.data.msg)
  }
}

const registerAction = async () => {
  registerForm.value.username = registerForm.value.username.trim()
  registerForm.value.password = registerForm.value.password.trim()
  const res = await adminRequest.post('/register', registerForm.value)
  if (res.data.code === 1) {
    store.token = res.data.data
    loginSwitch.value.$el.click()
  } else {
    ElMessage.error(res.data.msg)
  }
}

</script>

<template>
  <div class="admin-container">
    <div class="center-container">
      <div ref="img" class="img">
        <div ref="buttonArea" class="button-area">
          <el-button ref="registerSwitch" @click="registerChange" size="large">SIGN UP</el-button>
          <el-button ref="loginSwitch" @click="SignChange" size="large">SIGN IN</el-button>
        </div>
      </div>
      <div ref="login" class="login-container">
        <h3>Sign In</h3>
        <el-form :model="loginForm" size="large" style="width: 300px">
          <el-form-item>
            <el-input v-model="loginForm.username" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" />
          </el-form-item>
          <el-form-item>
            <el-button @click="loginAction">SIGN IN</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div ref="register" class="register-container">
        <h3>Sign Up</h3>
        <el-form :model="registerForm" size="large" style="width: 300px">
          <el-form-item>
            <el-input v-model="registerForm.username" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="registerForm.password" />
          </el-form-item>
          <el-form-item>
            <el-button @click="registerAction">SIGN UP</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-container {
  height: 100vh;
  width: 100vw;
  background: url("src/image/4.png") center/cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .center-container {
    background-color: #eee;
    width: 800px;
    height: 400px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25), 0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    overflow: hidden;

    .img {
      z-index: 20;
      position: absolute;
      right: 0;
      width: 400px;
      height: 400px;
      background-image: url("src/image/4.png");
      background-position: right center;
      background-size: 800px 400px;
      overflow: hidden;

      .button-area {
        position: absolute;
        left: -400px;
        right: 0;
        width: 800px;
        height: 400px;

        .el-button--large {
          z-index: 50;
          position: absolute;
          margin: 0;
          left: 75%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          transform-origin: left top;


          &:nth-child(2) {
            left: 25%;
            z-index: 40;
          }
        }


      }


    }


    .login-container {
      z-index: 15;
      position: absolute;
      width: 400px;
      height: 400px;
      background: #eee;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 30px;
        margin-top: 50px;
        margin-bottom: 50px;
        color: #a9a9a9;
      }


    }

    .el-button--large {
      --blue: #0367a6;
      --lightblue: #008997;
      background-image: linear-gradient(90deg, var(--blue) 0%, var(--lightblue) 74%);
      color: #fff;
      width: 200px;
      height: 50px;
      margin: 30px auto;
      border-radius: 50px;
      border: none;
    }

    .register-container {
      z-index: 10;
      position: absolute;
      width: 400px;
      height: 400px;
      background: #eee;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 30px;
        margin-top: 50px;
        margin-bottom: 50px;
        color: #a9a9a9;
      }

    }
  }
}


.el-button--large {
  --blue: #0367a6;
  --lightblue: #008997;
  background-image: linear-gradient(90deg, var(--blue) 0%, var(--lightblue) 74%);
  color: #fff;
  width: 200px;
  height: 50px;
  margin: 30px auto;
  border-radius: 50px;
}

.show {
  animation: show 500ms forwards;
}

.show6 {
  animation: show6 500ms forwards;
}

.reshow {
  animation: reshow 500ms forwards;
}

.reshow6 {
  animation: reshow6 500ms forwards;
}


.show2 {
  animation: show2 500ms forwards;
}

.reshow2 {
  animation: reshow2 500ms forwards;
}

.show3 {
  animation: show3 500ms forwards;
}

.reshow3 {
  animation: reshow3 500ms forwards;
}

.show4 {
  animation: show4 500ms forwards;
}

.reshow4 {
  animation: reshow4 500ms forwards;
}

.show5 {
  animation: show5 100ms;
}

@keyframes show5 {
  0% {
    scale: 1;
  }
  50% {
    scale: 0.9;
  }
  100% {
    scale: 1;
  }
}

@keyframes show4 {
  0% {

  }
  50% {
    z-index: 30;
  }
  100% {
    z-index: 30;
  }
}

@keyframes reshow4 {
  0% {
    z-index: 30;
  }
  50% {
    z-index: 50;
  }
  100% {
    z-index: 50;
  }
}

@keyframes show {
  from {
    transform: translateX(0);
    background-position: right center;
  }
  to {
    transform: translateX(-400px);
    background-position: left center;
  }
}

@keyframes show6 {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(400px);
  }
}

@keyframes reshow6 {
  from {
    transform: translateX(400px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes reshow {
  from {
    transform: translateX(-400px);
    background-position: left center;
  }
  to {
    transform: translateX(0px);
    background-position: right center;
  }
}

@keyframes show2 {
  0% {
    transform: translateX(0);
  }
  80% {
    z-index: 5;
  }
  100% {
    z-index: 5;
    transform: translateX(400px);
  }
}

@keyframes reshow2 {
  0% {
    z-index: 5;
    transform: translateX(400px);
  }
  80% {
    z-index: 15;
  }
  100% {
    z-index: 15;
    transform: translateX(0);
  }
}

@keyframes show3 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(400px);
  }
}

@keyframes reshow3 {
  0% {
    transform: translateX(400px);
  }
  100% {
    transform: translateX(0);
  }
}


</style>
