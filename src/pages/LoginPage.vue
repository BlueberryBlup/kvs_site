<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderWelcome from './HeaderWelcome.vue'
import usersApi from '@/api/users'

const router = useRouter()
const phone_number = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

async function handleLogin() {
  error.value = ''
  isLoading.value = true

  try {
    const response = await usersApi.login({
      phone_number: phone_number.value,
      password: password.value,
    })

    localStorage.setItem('user', JSON.stringify(response.user))

    router.push('/objects')
  } catch (err) {
    error.value = err.message || 'Ошибка входа'
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}

function navigateToRegister() {
  router.push('/register')
}
</script>

<template>
  <div class="page">
    <HeaderWelcome />
    <div class="left-half">
      <img class="common-picture" src="/pic.svg" alt="Pict" />
    </div>
    <div class="right-half">
      <div class="welcome-text">
        <h1>Вход</h1>
        <p>Введите номер телефона и пароль.</p>
        <div class="telephone">
          <p>Телефон</p>
          <input v-model="phone_number" type="text" placeholder="+7 (900) 000 00 00" />
        </div>
        <div class="password">
          <p>Пароль</p>
          <input v-model="password" type="password" placeholder="******" />
        </div>

        <div class="enter" @click="handleLogin">Войти</div>
        <p v-if="error" style="color: red">{{ error }}</p>
        <div class="no-account">
          <p>Нет аккаунта?</p>
          <div class="reg" @click="navigateToRegister">Зарегистрироваться</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-half {
  position: absolute;
  top: 70px;
  left: 0;
  width: 960px;
  height: 1010px;
  overflow: hidden;
  user-select: none;
}

.right-half {
  position: absolute;
  left: 960px;
  width: 960px;
  height: 1010px;
  user-select: none;
}

.common-picture {
  width: 960px;
  height: 1010px;
  object-fit: cover;
}

.welcome-text h1 {
  font-family: 'PT Root UI', sans-serif;
  margin: 269px 0 0 233px;
  font-weight: 700;
  font-size: 42px;
  width: 93px;
  height: 50px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
}
.welcome-text p {
  margin: 24px 0 0 233px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 470px;
  height: 22px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
}

.telephone p,
.password p {
  margin: 28px 0 0 233px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 16px;
  width: 65px;
  height: 19px;
  letter-spacing: 0.02em;
  line-height: 1em;
  align-content: center;
  color: #292f36;
}

.telephone input,
.password input {
  margin: 10px 0 0 233px;
  width: 435px;
  height: 56px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #b0b2b6;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 15px;
}

.telephone input::placeholder,
.password input::placeholder {
  transition: opacity 0s ease;
}

.telephone input:focus::placeholder,
.password input:focus::placeholder {
  opacity: 0;
}

.enter {
  margin: 25px 0 0 233px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.02em;
  line-height: 24px;
  color: white;
  height: 50px;
  width: 470px;
  background-color: #008ad7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  user-select: none;
}

.enter:hover {
  background-color: #0875b1;
  transform: translateY(-1px);
}

.enter:active {
  background-color: #008ad7;
  transform: translateY(0);
}

.no-account {
  display: flex;
  align-items: center;
  margin: 60px 0 0 233px;
  white-space: nowrap;
}

.no-account p {
  margin: 0;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.02em;
  line-height: 24px;
  width: 122px;
  height: 24px;
}

.reg {
  margin-left: 28px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #008ad7;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.reg:hover {
  transform: translateY(-1px);
}

.reg:active {
  transform: translateY(0);
}

@media (min-width: 1920px) {
  .app {
    width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
