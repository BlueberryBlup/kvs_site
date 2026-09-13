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
        <h1>Добро пожаловать<br />на портал «Luxury Home»</h1>
        <p>
          Зарегистрируйтесь или войдите в свою учетную запись,<br />чтобы начать пользоваться
          функционалом портала
        </p>
        <div class="common-buttoms">
          <div class="enter" @click="navigateTo('login')">Войти</div>
          <div class="reg" @click="navigateTo('register')">Зарегистрироваться</div>
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
  font-family: 'PT Root UI';
  margin: 366px 0 0 233px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 42px;
  letter-spacing: 0em;
  line-height: 1em;
  color: #292f36;
}

.welcome-text p {
  margin: 24px 0 0 233px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.2em;
  color: #292f36;
  height: 44px;
  width: 470;
}

.common-buttoms {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.enter {
  margin: 60px 0 0 233px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
  height: 50px;
  width: 233px;
  background-color: #008ad7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
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

.reg {
  margin: 60px 0 0 28px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #008ad7;
  height: 50px;
  width: 176px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
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
