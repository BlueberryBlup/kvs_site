<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderWelcome from './HeaderWelcome.vue'
import usersApi from '../api/users'

const router = useRouter()
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')
const phone_number = ref('')

const userRegData = ref({
  id: '',
  name: '',
  surname: '',
  password: '',
  phone_number: '',
})

onMounted(() => {
  phone_number.value = localStorage.getItem('reg_phone')
  if (!phone_number.value) {
    router.push('/register')
    return
  }

  userRegData.value.phone_number = phone_number.value
})

async function regUser() {
  loading.value = true
  error.value = ''

  if (password.value !== confirmPassword.value) {
    error.value = 'Пароли не совпадают'
    loading.value = false
    return
  }

  if (password.value.length < 4) {
    error.value = 'Пароль должен быть не менее 4 символов'
    loading.value = false
    return
  }

  userRegData.value.password = password.value

  try {
    await usersApi.createUser(userRegData.value)
    router.push('/congratulation')
  } catch (err) {
    error.value = err.response?.data?.message || 'Ошибка регистрации'
    console.error('Registration error:', err)
  } finally {
    loading.value = false
  }
}

function navigateTo(action) {
  if (action === 'login') {
    router.push('/login')
  } else if (action === 'register') {
    router.push('/register')
  } else if (action === 'congratulation') {
    router.push('/congratulation')
  }
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
        <h1>Регистрация</h1>
        <p>Придумайте пароль</p>
        <div class="password">
          <p>Пароль</p>
          <input v-model="password" type="text" placeholder="*****" />
        </div>
        <div class="repeat-password">
          <p>Повторите пароль</p>
          <input v-model="confirmPassword" type="text" placeholder="*****" />
        </div>

        <div class="continue" @click="regUser">Продолжить</div>
        <p v-if="error" class="error" style="color: red">{{ error }}</p>
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

.password p,
.repeat-password p {
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
  white-space: nowrap;
}

.password input,
.repeat-password input {
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

.password input::placeholder,
.repeat-password input::placeholder {
  transition: opacity 0s ease;
}

.password input:focus::placeholder,
.repeat-password input:focus::placeholder {
  opacity: 0;
}

.continue {
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

.continue:hover {
  background-color: #0875b1;
  transform: translateY(-1px);
}

.continue:active {
  background-color: #008ad7;
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
