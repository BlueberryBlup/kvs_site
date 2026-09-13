<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderLK from './HeaderLK.vue'
import Element from '../../public/Element.vue'
import objectsApi from '@/api/objects'

const router = useRouter()

const items = ref([])
const loading = ref(false)
const error = ref(null)

onMounted(async () => {
  await getAllObjects()
})

async function getAllObjects() {
  loading.value = true
  error.value = null
  try {
    items.value = await objectsApi.getObjects()
  } catch (err) {
    error.value = 'Не удалось загрузить объекты'
    console.error(err)
  } finally {
    loading.value = false
  }
}

function navigateTo(action) {
  if (action === 'account') {
    router.push('/account')
  } else if (action === 'register') {
    router.push('/register')
  } else if (action === 'add_object') {
    router.push('/add_object')
  }
}
</script>

<template>
  <div class="page">
    <HeaderLK />
    <ul class="control">
      <li>
        <div class="main-text">Объекты</div>
      </li>
      <li>
        <ul class="Add" @click="navigateTo('add_object')">
          <li><img src="/Add_Plus_Circle.svg" alt="add" /></li>
          <li>Добавить объект</li>
        </ul>
      </li>
    </ul>

    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="list-container">
      <ul class="list-part">
        <li class="ID">ID</li>
        <li class="Article">Артикул</li>
        <li class="Type">Тип недвижимости</li>
        <li class="Heading">Заголовок</li>
        <li class="Cat">Категория</li>
        <li class="Active">Активность</li>
      </ul>

      <Element
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        :is-even="index % 2 === 1"
      />
    </div>
  </div>
</template>

<style scoped>
.control {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 100px 0 0 150px;
  justify-content: space-between;
  max-width: 1620px;
}

.main-text {
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 42px;
  width: 93px;
  height: 50px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #292f36;
  user-select: none;
}
.Add {
  display: flex;
  flex-direction: row;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  width: 146px;
  height: 24px;
  letter-spacing: 0px;
  line-height: 1em;
  color: #008ad7;
  white-space: nowrap;
  align-items: center;
  list-style: none;
  margin-right: 150px;
  user-select: none;
  cursor: pointer;
  padding: 20px 0px 0px 0px;
}
.Add img {
  height: 24px;
  width: auto;
  padding: 10px;
}

.list-container {
  max-width: 1620px;
  margin: 30px auto 0;
}

.list-part {
  list-style: none;
  font-family: 'PT Root UI', sans-serif;
  display: flex;
  flex-direction: row;
  background-color: #68717b;
  color: white;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1em;
  width: 100%;
  margin: 0;
  padding: 0;
  user-select: none;
}

.list-part li {
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 10px;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0 0px 0 10px;
}

.ID {
  width: 196px;
}
.Article {
  width: 254.25px;
}
.Type {
  width: 254.25px;
}
.Heading {
  width: 407px;
}
.Cat {
  width: 254.25px;
}
.Active {
  width: 254.25px;
}
</style>
