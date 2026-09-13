import './assets/main.css'
import './assets/fonts.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import Reg1Page from './pages/Reg1Page.vue'
import Reg2Page from './pages/Reg2Page.vue'
import Reg3Page from './pages/Reg3Page.vue'
import CongratsPage from './pages/CongratsPage.vue'
import ObjectsPage from './pages/ObjectsPage.vue'
import AccountPage from './pages/AccountPage.vue'
import AddObjectPage from './pages/AddObjectPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Reg1', component: Reg1Page },
  { path: '/code', name: 'Reg2', component: Reg2Page },
  { path: '/registration', name: 'Reg3', component: Reg3Page },
  { path: '/congratulation', name: 'Congr', component: CongratsPage },
  { path: '/objects', name: 'LK', component: ObjectsPage },
  { path: '/account', name: 'Acc', component: AccountPage },
  { path: '/add_object', name: 'AddOb', component: AddObjectPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')
