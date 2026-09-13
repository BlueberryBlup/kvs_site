<script setup>
import { useRouter } from 'vue-router'
import HeaderWelcome from './HeaderWelcome.vue'

const router = useRouter()

function navigateTo(action) {
  if (action === 'login') {
    router.push('/login')
  } else if (action === 'register') {
    router.push('/register')
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
        <h1>Вы успешно зарегистрировались!</h1>
        <p>Регистрация прошла успешно</p>
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
  margin: 454px 0 0 151px;
  font-weight: 700;
  font-size: 42px;
  width: 658px;

  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
  white-space: nowrap;
}
.welcome-text p {
  margin: 24px 0 0 151px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 470px;
  height: 27px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
}
</style>
