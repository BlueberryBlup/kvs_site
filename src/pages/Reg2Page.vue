<script setup>
import { useRouter } from 'vue-router'
import HeaderWelcome from './HeaderWelcome.vue'

const router = useRouter()

import { ref, onMounted, onUnmounted } from 'vue'

const timer = ref(60)
const showButton = ref(false)
let intervalId = null

function navigateTo(action) {
  if (action === 'login') {
    router.push('/login')
  } else if (action === 'register') {
    router.push('/register')
  } else if (action === 'registration') {
    router.push('/registration')
  }
}

const startTimer = () => {
  timer.value = 60
  showButton.value = false
  intervalId = setInterval(() => {
    timer.value--
    if (timer.value <= 0) {
      clearInterval(intervalId)
      showButton.value = true
    }
  }, 1000)
}

const resendCode = () => {
  startTimer()
}

onMounted(startTimer)

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
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
        <p>Введите смс-код, высланный на Ваш номер телефона</p>
        <div class="sms-code">
          <p>СМС-код</p>
          <input type="text" placeholder="XXXX" minlength="4" maxlength="4" />
        </div>

        <div class="reg" @click="navigateTo('registration')">Зарегистрироваться</div>
        <div class="no-code">
          <p>Не получили код?</p>
          <div v-if="!showButton" class="timer-text">
            Прислать код еще раз (будет доступо через {{ timer }} сек.)
          </div>
          <div v-else class="resend-button" @click="resendCode">Прислать код еще раз</div>
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

.sms-code p {
  margin: 50px 0 0 245px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 16px;
  width: 70px;
  height: 19px;
  letter-spacing: 0.02em;
  line-height: 1em;
  align-content: center;
  color: #292f36;
  white-space: nowrap;
}

.sms-code input {
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

.sms-code input::placeholder {
  transition: opacity 0s ease;
}

.sms-code input:focus::placeholder {
  opacity: 0;
}

.reg {
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

.no-code {
  display: flex;
  align-items: center;
  margin: 60px 0 0 245px;
  white-space: nowrap;
}

.no-code p {
  margin: 0;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.02em;
  line-height: 24px;
  width: 122px;
  height: 24px;
  align-content: center;
}

.timer-text {
  margin-left: 60px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  line-height: 18px;
  width: 122px;
  height: 24px;
  color: #b0b2b6;
  align-content: center;
}

.resend-button {
  margin-left: 60px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #008ad7;
  cursor: pointer;
  transition: all 0.3s ease;
}

.resend-button:hover {
  transform: translateY(-1px);
}

.resend-button:active {
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
