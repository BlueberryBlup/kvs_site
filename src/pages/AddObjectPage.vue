<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderLK from './HeaderLK.vue'
import objectsApi from '@/api/objects'

const router = useRouter()
const loading = ref(false)
const error = ref(null)

const formData = ref({
  id: '',
  article: '',
  type: '',
  title: '',
  category: '',
  active: '',
  year: '',
  rooms: '',
  floors: '',
  floor: '',
  price: '',
  description: '',
})

onMounted(async () => {
  await loadData()
})

async function addObject() {
  loading.value = true
  error.value = null
  try {
    await objectsApi.createObject(formData.value)
    router.push('/objects')
  } catch (err) {
    error.value = err.message
    console.error('Ошибка сохранения:', err)
  } finally {
    loading.value = false
  }
}

function navigateTo(action) {
  if (action === 'account') {
    router.push('/account')
  } else if (action === 'register') {
    router.push('/register')
  }
}
function cancel() {
  router.push('/objects')
}
</script>

<template>
  <div class="page">
    <HeaderLK />

    <div class="common">
      <div class="main-text">Добавление объекта</div>
      <div v-if="error" class="error-message">{{ error }}</div>

      <div class="outer-frame">
        <ul class="info">
          <li>
            <div class="Article">
              <p>Артикул</p>
              <input v-model="formData.article" type="text" placeholder="" />
            </div>
            <div class="Category">
              <p>Категория</p>
              <select v-model="formData.category" class="Cat">
                <option>Квартира</option>
                <option>Дом</option>
              </select>
            </div>
            <div class="Year">
              <p>Год постройки</p>
              <input v-model="formData.year" type="text" placeholder="" />
            </div>
            <div class="Floors">
              <p>Этажность</p>
              <input v-model="formData.floors" type="text" placeholder="" />
            </div>
          </li>

          <li>
            <div class="Title">
              <p>Заголовок</p>
              <input v-model="formData.title" type="text" placeholder="" />
            </div>
            <div class="Type">
              <p>Тип недвижимости</p>
              <select v-model="formData.type">
                <option>Новостройка</option>
                <option>Вторичка</option>
              </select>
            </div>
            <div class="Rooms">
              <p>Количество комнат</p>
              <input v-model="formData.rooms" type="text" placeholder="" />
            </div>
            <div class="Floor">
              <p>Этаж</p>
              <input v-model="formData.floor" type="text" placeholder="" />
            </div>
          </li>

          <li>
            <div class="Discription">
              <p>Описание</p>
              <input v-model="formData.description" type="text" placeholder="" />
            </div>
            <ul class="price-client">
              <li class="Price">
                <div>
                  <p>Цена</p>
                  <input v-model="formData.price" type="text" placeholder="" />
                </div>
              </li>
              <li class="Client">
                <div>
                  <p>Клиент</p>
                  <input v-model="formData.client" type="text" placeholder="" />
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="inner-frame"></div>
        <ul class="buttons">
          <li><div @click="addObject" :disabled="loading" class="Save">Сохранить</div></li>
          <li><div @click="cancel" class="Cancel">Отменить</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  user-select: none;
}

.error-message {
  color: red;
  padding: 10px;
}
.info {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 24px;
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
  padding: 0px 0px 30px 0;
}

.Article p,
.Category p,
.Year p,
.Floors p {
  margin: 24px 0 0 0px;
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

.Title p,
.Type p,
.Floor p,
.Rooms p,
.Discription p {
  margin: 24px 0 0 10px;
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

.Client p {
  margin: 24px 0 0 20px;
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
.Price p {
  margin: 24px 0 0 -30px;
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

.Article input,
.Category input,
.Year input,
.Floors input {
  margin: 10px 0 0 0px;
  width: 377px;
  height: 48px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #292f36;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.Title input,
.Type input,
.Floor input,
.Rooms input {
  margin: 10px 0 0 10px;
  width: 377px;
  height: 48px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #292f36;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.Discription input {
  margin: 10px 0 0 10px;
  width: 778px;
  height: 246px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #292f36;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.Price input {
  margin: 20px 0 0 -30px;
  width: 362px;
  height: 48px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #292f36;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.Client input {
  margin: 20px 0 0 24px;
  width: 362px;
  height: 48px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #292f36;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.Category select {
  margin: 10px 0 0 0px;
  width: 405px;
  height: 50px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #292f36;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.Type select {
  margin: 10px 0 0 10px;
  width: 405px;
  height: 50px;
  border: 1px solid #f4f5f6;
  border-radius: 4px;
  outline: none;
  background-color: #f4f5f6;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #292f36;
  letter-spacing: 0px;
  line-height: 1em;
  padding: 0 12px;
  user-select: none;
  list-style: none;
}

.price-client {
  display: flex;
  flex-direction: row;
}

.price-client li {
  list-style: none;
}

.inner-frame {
  margin: 30px 0 0 40px;
  width: 1680px;
  height: 190px;
  background-color: white;
  border: 5px solid #f4f5f6;
  border-radius: 4px;

  padding: 20px;
  box-sizing: border-box;
}

.outer-frame {
  margin: 20px 0px 0px 150px;
  width: 1600;
  background-color: white;
  border: 5px solid #f4f5f6;
  border-radius: 4px;
  padding: 5px;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;
}

.Save {
  margin: 24px 0 0 0px;
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
