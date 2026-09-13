<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderLK from './HeaderLK.vue'

const router = useRouter()
const userData = JSON.parse(localStorage.getItem('user'))
const phone_number = userData.phone_number

const name = ref('')
const surname = ref('')
const phone = ref('')
const oldpass = ref('')
const newpass = ref('')

function navigateTo(action) {
  if (action === 'account') {
    router.push('/account')
  } else if (action === 'register') {
    router.push('/register')
  }
}
</script>

<template>
  <div class="page">
    <HeaderLK />
    <div class="common">
      <div class="main-text">Личные данные</div>
      <ul class="info">
        <li>
          <div class="Surname">
            <p>Фамилия</p>
            <input type="text" placeholder="" />
          </div>
          <div class="Name">
            <p>Имя</p>
            <input type="text" placeholder="" />
          </div>
          <div class="Telephone">
            <p>Телефон</p>
            <input type="text" placeholder="" />
          </div>
        </li>
        <li>
          <div class="OldPassword">
            <p>Старый пароль</p>
            <input type="text" placeholder="" />
          </div>
          <div class="NewPassword">
            <p>Новый пароль</p>
            <input type="text" placeholder="" />
          </div>
        </li>
      </ul>
      <ul class="buttons">
        <li><dev class="Save">Сохранить</dev></li>
        <li><dev class="Cancel">Отменить</dev></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.page {
  user-select: none;
}

.info {
  display: flex;
  flex-direction: row;
  list-style: none;
}
.main-text {
  font-family: 'PT Root UI', sans-serif;
  margin: 100px 0 0 150px;
  font-weight: 700;
  font-size: 42px;
  width: 310px;
  height: 50px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
  white-space: nowrap;
  user-select: none;
}

.Telephone p,
.OldPassword p,
.NewPassword p,
.Surname p,
.Name p {
  margin: 24px 0 0 110px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  height: 19px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
  user-select: none;
  list-style: none;
  white-space: nowrap;
}

.Telephone input,
.OldPassword input,
.NewPassword input,
.Surname input,
.Name input {
  margin: 10px 0 0 110px;
  width: 520px;
  height: 48px;
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
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.buttons {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;
}

.Save {
  margin: 24px 0 0 110px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
  height: 48px;
  width: 148px;
  background-color: #008ad7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  list-style: none;
}

.Save:hover {
  background-color: #0875b1;
  transform: translateY(-1px);
}

.Save:active {
  background-color: #008ad7;
  transform: translateY(0);
}

.Cancel {
  margin: 24px 0 0 24px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #8b0000;
  height: 48px;
  width: 148px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.Cancel:hover {
  transform: translateY(-1px);
}

.Cancel:active {
  transform: translateY(0);
}
</style>
