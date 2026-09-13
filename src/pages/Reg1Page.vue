<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderWelcome from './HeaderWelcome.vue'
import usersApi from '../api/users'

const router = useRouter()
const phone_number = ref('')
const error = ref('')

async function savePhone() {
  error.value = ''
  if (!phone_number.value || phone_number.value.length < 15) {
    alert('Введите корректный номер')
    return
  }

  try {
    const isPhoneTaken = await usersApi.checkPhone(phone_number.value)
    if (isPhoneTaken) {
      error.value = 'Этот номер уже зарегистрирован!'
      return
    }

    localStorage.setItem('reg_phone', phone_number.value)
    router.push('/code')
  } catch (error) {
    error.value = 'Ошибка при проверке номера: ' + error.message
  }
}

function navigateTo(action) {
  if (action === 'login') {
    router.push('/login')
  } else if (action === 'register') {
    router.push('/register')
  } else if (action === 'code') {
    router.push('/code')
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
        <p>Заполните данные и получите смс-код<br />для подверждения на ваш номер телефона</p>
        <div class="telephone">
          <p>Телефон</p>
          <input v-model="phone_number" type="text" placeholder="+7 (900) 000 00 00" />
        </div>

        <div class="sms-code" @click="savePhone">Получить смс-код</div>
        <div class="have-account">
          <p>У вас уже есть аккаунт?</p>
          <div class="enter" @click="navigateTo('login')">Войти</div>
        </div>
        <p v-if="error" style="color: red">{{ error }}</p>
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
  margin: 312px 0 0 245px;
  font-weight: 700;
  font-size: 42px;
  width: 93px;
  height: 50px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
}
.welcome-text p {
  margin: 24px 0 0 245px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 470px;
  height: 22px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
}

.telephone p {
  margin: 50px 0 0 245px;
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

.telephone input {
  margin: 10px 0 0 245px;
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

.telephone input::placeholder {
  transition: opacity 0s ease;
}

.telephone input:focus::placeholder {
  opacity: 0;
}

.sms-code {
  margin: 25px 0 0 245px;
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

.have-account {
  display: flex;
  align-items: center;
  margin: 60px 0 0 245px;
  white-space: nowrap;
}

.have-account p {
  margin: 0;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.02em;
  line-height: 24px;
  width: 122px;
  height: 24px;
}

.enter {
  margin-left: 110px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #008ad7;
  cursor: pointer;
  transition: all 0.3s ease;
}

.enter:hover {
  transform: translateY(-1px);
}

.enter:active {
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
