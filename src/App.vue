<script setup>
import { useRouter } from 'vue-router'

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
  <div class="app">
    <router-view />
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
</style>
