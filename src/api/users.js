import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
})

export default {
  async getUsers() {
    try {
      const response = await api.get('/users')
      return response.data
    } catch (error) {
      throw error.response.data
    }
  },

  async createObject(userData) {
    try {
      const response = await api.post('/users', {
        name: userData.name,
        surname: userData.surname,
        password: userData.password,
        phone_number: userData.phone_number,
      })
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Не удалось зарегистрировать пользователя')
    }
  },

  async updateObject(id, userData) {
    try {
      const response = await api.put(`/users/${id}`, userData)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  },

  async deleteObject(id) {
    try {
      const response = await api.delete(`/users/${id}`)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  },

  async login(credentials) {
    try {
      const response = await api.post('/login', {
        phone_number: credentials.phone_number,
        password: credentials.password,
      })
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Ошибка авторизации')
    }
  },

  async createUser(userData) {
    try {
      const response = await api.post('/register', userData)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Не удалось сохранить объект')
    }
  },
  async checkPhone(phone) {
    const response = await api.get(`/check-phone/${phone}`)
    return response.data.exists
  },
}
