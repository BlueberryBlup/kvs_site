<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function showMessage(action) {
  if (action === 'login') {
    alert('Вы нажали кнопку "Войти". Перенаправляем на страницу входа...')
  } else if (action === 'register') {
    alert('Вы нажали кнопку "Зарегистрироваться". Перенаправляем на страницу регистрации...')
  }
}
function navigateTo(action) {
  if (action === 'login') {
    router.push('/login')
  } else if (action === 'register') {
    router.push('/register')
  }
}
</script>

<template>
  <div class="top">
    <img class="top-logo" src="/Group.svg" alt="Logo" />
    <ul class="top-logo-text">
      <li><img src="/Union.svg" alt="UserIcon" /></li>
      <li @click="navigateTo('login')">Войти</li>
      <li>/</li>
      <li @click="navigateTo('register')">Зарегистрироваться</li>
    </ul>
  </div>
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  min-width: 1920px;
}

.app {
  width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 1080px;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #292f36;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 100;
  user-select: none;
}

.top-logo {
  height: 50px;
  user-select: none;
}

.top-logo-text {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  list-style: none;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 24px;
  color: white;
  margin: 0;
  padding: 0;
  user-select: none;
}

.top-logo-text li {
  cursor: pointer;
  transition: color 0.2s;
}

.top-logo-text li:hover {
  color: #dcdfe1;
}

.top-logo-text img {
  height: 20px;
  user-select: none;
}
</style>
