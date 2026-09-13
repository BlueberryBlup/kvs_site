<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const surname = ref('')
const name = ref('')
const userPhone = ref('')

function showMessage(action) {
  if (action === 'login') {
    alert('Вы нажали кнопку "Войти". Перенаправляем на страницу входа...')
  } else if (action === 'register') {
    alert('Вы нажали кнопку "Зарегистрироваться". Перенаправляем на страницу регистрации...')
  }
}
function navigateTo(action) {
  if (action === 'account') {
    router.push('/account')
  } else if (action === 'objects') {
    router.push('/objects')
  } else if (action === 'home') {
    router.push('/')
  }
}
</script>

<template>
  <div class="top">
    <img class="top-logo" src="/Group.svg" alt="Logo" />
    <div class="top-nav-items">
      <ul class="top-left-items">
        <li class="Objects" @click="navigateTo('objects')">Объекты</li>
        <li class="CommonSettings" @click="navigateTo('account')">Общие настройки</li>
      </ul>
      <ul class="top-right-items">
        <li><img src="/Union.svg" alt="UserIcon" /></li>
        <li class="Content" @click="navigateTo('account')">Контент контентов</li>
        <li><img src="/exit.svg" alt="ExitB" /></li>
        <li class="exit" @click="navigateTo('home')">Выйти</li>
      </ul>
    </div>
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
  padding: 0 20px;
  z-index: 100;
  user-select: none;
  gap: 20px;
}

.top-logo {
  height: 50px;
  user-select: none;
  padding: 0 40px 0 0;
}

.top-nav-items {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.top-left-items {
  display: flex;
  flex-direction: row;
  color: white;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  list-style: none;
  gap: 30px;
  padding: 0;
  margin: 0;
}

.top-right-items {
  display: flex;
  flex-direction: row;
  color: white;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  list-style: none;

  padding: 0;
  margin: 0;
  align-items: center;
}

.Content {
  padding: 20px;
}
.Content:hover {
  color: #dcdfe1;
  cursor: pointer;
}

.exit {
  padding: 20px;
}
.exit:hover {
  color: #dcdfe1;
  cursor: pointer;
}

.Objects:hover {
  color: #dcdfe1;
  cursor: pointer;
}

.top-right-items img {
  height: 20px;
  width: auto;
}
</style>
